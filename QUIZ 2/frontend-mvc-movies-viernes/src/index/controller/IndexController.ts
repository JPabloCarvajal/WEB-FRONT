import AboutController from '../../about/controller/AboutController.js'
import AboutFactory from '../../about/factory/AboutFactory.js'
import ContactController from '../../contact/controller/ContactController.js'
import ContactFactory from '../../contact/factory/ContactFactory.js'
import ErrorController from '../../error/controller/ErrorController.js'
import ErrorFactory from '../../error/factory/ErrorFactory.js'
import HomeController from '../../home/controller/HomeController.js'
import HomeFactory from '../../home/factory/HomeFactory.js'
import MenuController from '../../menu/controller/MenuController.js'
import MenuFactory from '../../menu/factory/MenuFactory.js'
import MovieController from '../../movie/controller/MovieController.js'
import MovieFactory from '../../movie/factory/MovieFactory.js'
import PaginationController from '../../pagination/controller/PaginationController.js'
import PaginationFactory from '../../pagination/factory/PaginationFactory.js'
import SearchController from '../../search/controller/SearchController.js'
import SearchFactory from '../../search/factory/SearchFactory.js'
import Router from '../../shared/Router/Router.js'
import IndexModel from '../model/IndexModel.js'
import IndexView from '../view/IndexView.js'

export default class IndexController {
  private readonly movie: MovieController
  private readonly menu: MenuController
  private readonly about: AboutController
  private readonly error: ErrorController
  private search!: SearchController
  private pagination!: PaginationController
  private home: HomeController
  private readonly contact: ContactController;

  private readonly router: Router
  
  
  constructor(
    private readonly model: IndexModel,
    private readonly view: IndexView
  ) {
    const functions = {
      showAbout: this.showAbout,
      showRental: this.showRental,
      showHome: this.showHome,
      showContact: this.showContact
    }

    this.movie = MovieFactory.create(this.view.getMainHTML())
    this.menu = MenuFactory.create(this.view.getMenuHTML(), functions)
    this.about = AboutFactory.create(this.view.getMainHTML())
    this.home = HomeFactory.create(this.view.getMainHTML())
    this.error = ErrorFactory.create(this.view.getMainHTML(), this.showRental)
    this.contact = ContactFactory.create(this.view.getMainHTML())

    this.router = new Router(['home', 'rentals', 'about', 'error', 'contact'])
  }

  readonly initComponent = async () => {
    this.model.initComponent()
    this.view.initComponent()
    await this.movie.initComponent()

    const totalMovies = this.movie.getTotalMovies()

    const paginationContainer = this.view.getMainHTML().querySelector('#pagination-container') as HTMLElement

    if (paginationContainer) {
      this.pagination = PaginationFactory.create(
        paginationContainer,
        totalMovies,
        this.handlePageChange
      )
      this.pagination.initComponent()
      this.handlePageChange(1)
    }

    this.menu.initComponent()

    const searchContainer = document.querySelector('#search') as HTMLElement
    if (searchContainer) {
      this.search = SearchFactory.create(searchContainer, this.handleSearch)
      this.search.initComponent()
    } else {
      console.warn('Search container #search not found')
    }
    this.setupRouter()
    
  }

  private readonly setupRouter = () => {
    this.router.registerRoute('home', this.showHome)
    this.router.registerRoute('rentals', this.showRental)
    this.router.registerRoute('about', this.showAbout)
    this.router.registerRoute('error', this.showError)
    this.router.registerRoute('contact', this.showContact)
    this.router.init()
  }

  private readonly handleSearch = (searchTerm: string) => {
    this.movie.filterMovies(searchTerm)

    const totalMovies = this.movie.getTotalMovies()
    console.log('Total después del filtro:', totalMovies)

    const paginationContainer = this.view.getMainHTML().querySelector('#pagination-container') as HTMLElement

    if (paginationContainer) {
      paginationContainer.innerHTML = ''
      this.pagination = PaginationFactory.create(
        paginationContainer,
        totalMovies,
        this.handlePageChange
      )
      this.pagination.initComponent()

      this.handlePageChange(1)
    }
  }

  private readonly handlePageChange = (page: number) => {
    const itemsPerPage = 10
    const offset = (page - 1) * itemsPerPage
    this.movie.updateMoviesForPage(offset, itemsPerPage)
  }

  readonly showAbout = () => {
    this.view.getMainHTML().innerHTML = ''
    this.about.initComponent()
  }

  readonly showContact = () =>{
    this.view.getMainHTML().innerHTML = ''
    this.contact.initComponent()
  }

  readonly showHome = () => {
    this.view.getMainHTML().innerHTML = ''
    this.home.initComponent()
  }

  readonly showError = () => {
    this.view.getMainHTML().innerHTML = ''
    this.error.initComponent()
  }

  readonly showRental = async () => {
    this.view.getMainHTML().innerHTML = ''
    await this.movie.initComponent()

    if (this.search) {
      this.search.clearSearch()
    }

    const totalMovies = this.movie.getTotalMovies()
    const paginationContainer = this.view.getMainHTML().querySelector('#pagination-container') as HTMLElement

    if (paginationContainer) {
      this.pagination = PaginationFactory.create(
        paginationContainer,
        totalMovies,
        this.handlePageChange
      )
      this.pagination.initComponent()
      this.handlePageChange(1)
    }
  }
}
