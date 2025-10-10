import Subject from '../../shared/Observer/Subject.js';
export default class MovieModel extends Subject {
    movies;
    allMovies = [];
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
    initComponent = async () => {
        this.allMovies = await this.fetchMovies();
        this.movies = this.allMovies;
        this.notifyAllObservers();
    };
    getMoviesByPage = (offset, limit) => {
        return this.allMovies.slice(offset, offset + limit);
    };
    getTotalMovies = () => {
        return this.allMovies.length;
    };
    updateMoviesForPage = (offset, limit) => {
        this.movies = this.getMoviesByPage(offset, limit);
        this.notifyAllObservers();
    };
}
