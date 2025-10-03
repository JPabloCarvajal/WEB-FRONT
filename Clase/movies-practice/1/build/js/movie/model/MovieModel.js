import Subject from "../../shared/Observer/Subject.js";
export default class MovieModel extends Subject {
    movies;
    constructor() {
        super();
        this.movies = [];
    }
    getMovies = () => {
        return this.movies;
    };
    fetchMovies = async () => {
        // el script corre desde el html
        const response = await fetch('../database/movies-2020s.json');
        const data = await response.json();
        if (!data) {
            throw new Error('No data');
        }
        return data;
    };
    initComponent = async () => {
        this.movies = await this.fetchMovies();
        this.notifyAllObservers();
    };
}
