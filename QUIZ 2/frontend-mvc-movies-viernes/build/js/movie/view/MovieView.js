import Observer from '../../shared/Observer/Observer.js';
import MovieTemplate from '../template/MovieTemplate.js';
export default class MovieView extends Observer {
    parent;
    movieTemplate;
    moviesContainer = null;
    constructor(parent, MovieModel) {
        super(MovieModel);
        this.parent = parent;
        this.movieTemplate = new MovieTemplate(this.subject.getMovies());
    }
    update = () => {
        this.render();
    };
    initComponent = () => {
        // ✓ SIEMPRE recrear la estructura, sin importar el estado anterior
        this.parent.innerHTML = `
      <div id="movies-container"></div>
      <div id="pagination-container"></div>
    `;
        // ✓ Obtener la nueva referencia cada vez
        this.moviesContainer = this.parent.querySelector('#movies-container');
        this.render();
    };
    render = () => {
        // ✓ Buscar el contenedor SIEMPRE (por si fue recreado)
        const container = this.parent.querySelector('#movies-container');
        if (container) {
            this.movieTemplate.setMovies(this.subject.getMovies());
            container.innerHTML = this.movieTemplate.getMoviesHTML();
        }
    };
    getMoviesContainer = () => this.moviesContainer;
}
