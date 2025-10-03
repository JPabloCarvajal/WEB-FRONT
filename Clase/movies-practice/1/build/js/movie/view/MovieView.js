import Observer from "../../shared/Observer/Observer.js";
import MovieTemplate from "../template/MovieTemplate.js";
export default class MovieView extends Observer {
    parent;
    movieTemplate;
    constructor(parent, movieModel) {
        super(movieModel);
        this.parent = parent;
        // traigo el listado del modelo y las paso como info al template
        const movies = this.subject.getMovies();
        this.movieTemplate = new MovieTemplate(movies);
    }
    update = () => {
        this.render();
    };
    render = () => {
        const movies = this.subject.getMovies();
        this.movieTemplate.setMovies(movies);
        this.parent.innerHTML += this.movieTemplate.getMoviesHTML();
    };
    initComponent = async () => {
        const movies = this.subject.getMovies();
        this.movieTemplate.setMovies(movies);
        this.render();
    };
}
