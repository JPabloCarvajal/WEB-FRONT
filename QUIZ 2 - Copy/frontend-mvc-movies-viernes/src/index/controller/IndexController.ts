import AboutController from '../../about/controller/AboutController.js'
import AboutFactory from '../../about/factory/AboutFactory.js'
import MenuController from '../../menu/controller/MenuController.js'
import MenuFactory from '../../menu/factory/MenuFactory.js'
import MovieController from '../../movie/controller/MovieController.js'
import MovieFactory from '../../movie/factory/MovieFactory.js'
import PaginationController from '../../pagination/controller/PaginationController.js'
import PaginationFactory from '../../pagination/factory/PaginationFactory.js'
import IndexModel from '../model/IndexModel.js'
import IndexView from '../view/IndexView.js'

export default class IndexController {
  private readonly movie: MovieController
  private readonly menu: MenuController
  private readonly about: AboutController
  private pagination!: PaginationController

  constructor(
    private readonly model: IndexModel,
    private readonly view: IndexView
  ) {
    const functions = {
      showAbout: this.showAbout,
      showRental: this.showRental
    }

    this.movie = MovieFactory.create(this.view.getMainHTML())
    this.menu = MenuFactory.create(this.view.getMenuHTML(), functions)
    this.about = AboutFactory.create(this.view.getMainHTML())
    // this.pagination = PaginationFactory.create(this.view.getMainHTML())
  }

  readonly initComponent = async () => {
    this.model.initComponent()
    this.view.initComponent()
    await this.movie.initComponent()

    const totalMovies = this.movie.getTotalMovies()
    this.pagination = PaginationFactory.create(
      this.view.getMainHTML(),
      totalMovies,
      this.handlePageChange
    )
    this.pagination.initComponent()
    
    //agregue esto
    this.handlePageChange(1)
    this.menu.initComponent()
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

  readonly showRental = () => {
    this.view.getMainHTML().innerHTML = ''
    this.movie.initComponent()
  }

}
