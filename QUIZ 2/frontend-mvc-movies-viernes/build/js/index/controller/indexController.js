import AboutFactory from '../../about/factory/AboutFactory.js';
import ContactFactory from '../../contact/factory/ContactFactory.js';
import ErrorFactory from '../../error/factory/ErrorFactory.js';
import HomeFactory from '../../home/factory/HomeFactory.js';
import MenuFactory from '../../menu/factory/MenuFactory.js';
import MovieFactory from '../../movie/factory/MovieFactory.js';
import PaginationFactory from '../../pagination/factory/PaginationFactory.js';
import SearchFactory from '../../search/factory/SearchFactory.js';
import Router from '../../shared/Router/Router.js';
export default class IndexController {
    model;
    view;
    movie;
    menu;
    about;
    error;
    search;
    pagination;
    home;
    contact;
    router;
    constructor(model, view) {
        this.model = model;
        this.view = view;
        const functions = {
            showAbout: this.showAbout,
            showRental: this.showRental,
            showHome: this.showHome,
            showContact: this.showContact
        };
        this.movie = MovieFactory.create(this.view.getMainHTML());
        this.menu = MenuFactory.create(this.view.getMenuHTML(), functions);
        this.about = AboutFactory.create(this.view.getMainHTML());
        this.home = HomeFactory.create(this.view.getMainHTML());
        this.error = ErrorFactory.create(this.view.getMainHTML(), this.showRental);
        this.contact = ContactFactory.create(this.view.getMainHTML());
        this.router = new Router(['home', 'rentals', 'about', 'error', 'contact']);
    }
    initComponent = async () => {
        this.model.initComponent();
        this.view.initComponent();
        await this.movie.initComponent();
        const totalMovies = this.movie.getTotalMovies();
        const paginationContainer = this.view.getMainHTML().querySelector('#pagination-container');
        if (paginationContainer) {
            this.pagination = PaginationFactory.create(paginationContainer, totalMovies, this.handlePageChange);
            this.pagination.initComponent();
            this.handlePageChange(1);
        }
        this.menu.initComponent();
        const searchContainer = document.querySelector('#search');
        if (searchContainer) {
            this.search = SearchFactory.create(searchContainer, this.handleSearch);
            this.search.initComponent();
        }
        else {
            console.warn('Search container #search not found');
        }
        this.setupRouter();
    };
    setupRouter = () => {
        this.router.registerRoute('home', this.showHome);
        this.router.registerRoute('rentals', this.showRental);
        this.router.registerRoute('about', this.showAbout);
        this.router.registerRoute('error', this.showError);
        this.router.registerRoute('contact', this.showContact);
        this.router.init();
    };
    handleSearch = (searchTerm) => {
        this.movie.filterMovies(searchTerm);
        const totalMovies = this.movie.getTotalMovies();
        console.log('Total después del filtro:', totalMovies);
        const paginationContainer = this.view.getMainHTML().querySelector('#pagination-container');
        if (paginationContainer) {
            paginationContainer.innerHTML = '';
            this.pagination = PaginationFactory.create(paginationContainer, totalMovies, this.handlePageChange);
            this.pagination.initComponent();
            this.handlePageChange(1);
        }
    };
    handlePageChange = (page) => {
        const itemsPerPage = 10;
        const offset = (page - 1) * itemsPerPage;
        this.movie.updateMoviesForPage(offset, itemsPerPage);
    };
    showAbout = () => {
        this.view.getMainHTML().innerHTML = '';
        this.about.initComponent();
    };
    showContact = () => {
        this.view.getMainHTML().innerHTML = '';
        this.contact.initComponent();
    };
    showHome = () => {
        this.view.getMainHTML().innerHTML = '';
        this.home.initComponent();
    };
    showError = () => {
        this.view.getMainHTML().innerHTML = '';
        this.error.initComponent();
    };
    showRental = async () => {
        this.view.getMainHTML().innerHTML = '';
        await this.movie.initComponent();
        if (this.search) {
            this.search.clearSearch();
        }
        const totalMovies = this.movie.getTotalMovies();
        const paginationContainer = this.view.getMainHTML().querySelector('#pagination-container');
        if (paginationContainer) {
            this.pagination = PaginationFactory.create(paginationContainer, totalMovies, this.handlePageChange);
            this.pagination.initComponent();
            this.handlePageChange(1);
        }
    };
}
