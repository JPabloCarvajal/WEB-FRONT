import Observer from "../../shared/Observer/Observer.js";
import MovieModel from "../model/MovieModel.js";
import MovieTemplate from "../template/MovieTemplate.js";

export default class MovieView extends Observer<MovieModel>{
    
    private readonly movieTemplate: MovieTemplate;

    constructor(private readonly parent: HTMLElement, movieModel: MovieModel){
        super(movieModel)

        // traigo el listado del modelo y las paso como info al template
        const movies = (this.subject as MovieModel).getMovies()
        this.movieTemplate = new MovieTemplate(movies)
    }

    override readonly update = () =>{
     this.render()
    }

    readonly render = () => {
        const movies = (this.subject as MovieModel).getMovies()
        this.movieTemplate.setMovies(movies)
        this.parent.innerHTML += this.movieTemplate.getMoviesHTML()
    }
    
    readonly initComponent = async () =>{
        const movies = (this.subject as MovieModel).getMovies()
        this.movieTemplate.setMovies(movies)
        this.render()
    }

}