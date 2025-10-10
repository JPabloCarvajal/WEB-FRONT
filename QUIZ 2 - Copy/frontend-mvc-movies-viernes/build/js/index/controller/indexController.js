import AboutFactory from '../../about/factory/AboutFactory.js';
import MenuFactory from '../../menu/factory/MenuFactory.js';
import MovieFactory from '../../movie/factory/MovieFactory.js';
import PaginationFactory from '../../pagination/factory/PaginationFactory.js';
export default class IndexController {
    model;
    view;
    movie;
    menu;
    about;
    pagination;
    constructor(model, view) {
        this.model = model;
        this.view = view;
        const functions = {
            showAbout: this.showAbout,
            showRental: this.showRental
        };
        this.movie = MovieFactory.create(this.view.getMainHTML());
        this.menu = MenuFactory.create(this.view.getMenuHTML(), functions);
        this.about = AboutFactory.create(this.view.getMainHTML());
        // this.pagination = PaginationFactory.create(this.view.getMainHTML())
    }
    initComponent = async () => {
        this.model.initComponent();
        this.view.initComponent();
        await this.movie.initComponent();
        const totalMovies = this.movie.getTotalMovies();
        this.pagination = PaginationFactory.create(this.view.getMainHTML(), totalMovies, this.handlePageChange);
        this.pagination.initComponent();
        //agregue esto
        this.handlePageChange(1);
        this.menu.initComponent();
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
    showRental = () => {
        this.view.getMainHTML().innerHTML = '';
        this.movie.initComponent();
    };
}
