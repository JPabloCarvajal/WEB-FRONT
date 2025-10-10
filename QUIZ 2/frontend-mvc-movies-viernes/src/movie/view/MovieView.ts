import Observer from '../../shared/Observer/Observer.js'
import MovieModel from '../model/MovieModel.js'
import MovieTemplate from '../template/MovieTemplate.js'

export default class MovieView extends Observer<MovieModel> {
  private readonly movieTemplate: MovieTemplate
  private moviesContainer: HTMLElement | null = null

  constructor(private readonly parent: HTMLElement, MovieModel: MovieModel) {
    super(MovieModel)
    this.movieTemplate = new MovieTemplate(
      (this.subject as MovieModel).getMovies()
    )
  }

  override readonly update = () => {
    this.render()
  }

  readonly initComponent = () => {
    // ✓ SIEMPRE recrear la estructura, sin importar el estado anterior
    this.parent.innerHTML = `
      <div id="movies-container"></div>
      <div id="pagination-container"></div>
    `
    // ✓ Obtener la nueva referencia cada vez
    this.moviesContainer = this.parent.querySelector('#movies-container') as HTMLElement
    this.render()
  }

  readonly render = () => {
    // ✓ Buscar el contenedor SIEMPRE (por si fue recreado)
    const container = this.parent.querySelector('#movies-container') as HTMLElement
    
    if (container) {
      this.movieTemplate.setMovies((this.subject as MovieModel).getMovies())
      container.innerHTML = this.movieTemplate.getMoviesHTML()
    }
  }
  
  readonly getMoviesContainer = (): HTMLElement | null => this.moviesContainer
}
