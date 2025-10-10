import Subject from '../../shared/Observer/Subject.js'
import Movie from '../types/Movie.js'
import MovieView from '../view/MovieView.js'

export default class MovieModel extends Subject<MovieView> {

  private movies: Movie[]
  private allMovies: Movie[] = []
  private filteredMovies: Movie[] = []

  constructor() {
    super()
    this.movies = []
  }

  readonly getMovies = (): Movie[] => {
    return this.movies
  }

  readonly fetchMovies = async (): Promise<Movie[]> => {
    const response = await fetch('../database/movies-2020s.json')
    const data = await response.json()
    if (!data) {
      throw new Error('No data found')
    }
    return data as Movie[]
  }

  readonly filterMovies = (searchTerm: string) => {
    if (!searchTerm) {
      this.filteredMovies = this.allMovies
    } else {
      const lowerSearchTerm = searchTerm.toLowerCase()
      
      this.filteredMovies = this.allMovies.filter((movie) => {
        const matchesTitle = movie.title.toLowerCase().includes(lowerSearchTerm)

        const matchesYear = movie.year.toString().includes(lowerSearchTerm)

        const matchesGenre = movie.genres.some((genre) =>
          genre.toLowerCase().includes(lowerSearchTerm)
        )

        return matchesTitle || matchesYear || matchesGenre
      })
    }

    this.movies = this.getMoviesByPage(0, 10)
    this.notifyAllObservers()
  }

  readonly initComponent = async (): Promise<void> => {
    this.allMovies = await this.fetchMovies()
    this.filteredMovies = this.allMovies
    this.movies = this.allMovies
    this.notifyAllObservers()
  }

  readonly getMoviesByPage = (offset: number, limit: number): Movie[] => {
    return this.filteredMovies.slice(offset, offset + limit)
  }

  readonly getTotalMovies = (): number => {
    return this.filteredMovies.length
  }

  readonly updateMoviesForPage = (offset: number, limit: number) => {
    this.movies = this.getMoviesByPage(offset, limit)
    this.notifyAllObservers()
  }
}
