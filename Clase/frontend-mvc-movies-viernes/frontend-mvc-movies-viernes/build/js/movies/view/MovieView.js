import Observer from "../../shared/Observer/Observer.js";
import MovieTemplate from "../template/MovieTemplate.js";
export default class MovieView extends Observer {
    parent;
    movieTemplate;
    constructor(parent, movieModel) {
        super(movieModel);
        this.parent = parent;
        this.movieTemplate = new MovieTemplate(this.subject.getMovies());
    }
    update = () => {
        this.render();
    };
    initComponent = async () => {
        this.movieTemplate.setMovies(this.subject.getMovies());
        this.render();
    };
    render = () => {
        this.movieTemplate.setMovies(this.subject.getMovies());
        this.parent.innerHTML += this.movieTemplate.getMoviesHTML();
    };
}
