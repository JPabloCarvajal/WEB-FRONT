import Subject from '../../shared/Observer/Subject.js';
export default class MovieModel extends Subject {
    movies;
    allMovies = [];
    filteredMovies = [];
    constructor() {
        super();
        this.movies = [];
    }
    getMovies = () => {
        return this.movies;
    };
    fetchMovies = async () => {
        const response = await fetch('../database/movies-2020s.json');
        const data = await response.json();
        if (!data) {
            throw new Error('No data found');
        }
        return data;
    };
    filterMovies = (searchTerm) => {
        if (!searchTerm) {
            this.filteredMovies = this.allMovies;
        }
        else {
            const lowerSearchTerm = searchTerm.toLowerCase();
            this.filteredMovies = this.allMovies.filter((movie) => {
                const matchesTitle = movie.title.toLowerCase().includes(lowerSearchTerm);
                const matchesYear = movie.year.toString().includes(lowerSearchTerm);
                const matchesGenre = movie.genres.some((genre) => genre.toLowerCase().includes(lowerSearchTerm));
                return matchesTitle || matchesYear || matchesGenre;
            });
        }
        this.movies = this.getMoviesByPage(0, 10);
        this.notifyAllObservers();
    };
    initComponent = async () => {
        this.allMovies = await this.fetchMovies();
        this.filteredMovies = this.allMovies;
        this.movies = this.allMovies;
        this.notifyAllObservers();
    };
    getMoviesByPage = (offset, limit) => {
        return this.filteredMovies.slice(offset, offset + limit);
    };
    getTotalMovies = () => {
        return this.filteredMovies.length;
    };
    updateMoviesForPage = (offset, limit) => {
        this.movies = this.getMoviesByPage(offset, limit);
        this.notifyAllObservers();
    };
}
