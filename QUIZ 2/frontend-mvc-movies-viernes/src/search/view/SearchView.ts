import Observer from '../../shared/Observer/Observer.js'
import SearchModel from '../model/SearchModel.js'

export default class SearchView extends Observer<SearchModel> {
  private searchInput: HTMLInputElement | null = null
  private searchForm: HTMLFormElement | null = null

  constructor(
    private readonly parent: HTMLElement,
    private searchModel: SearchModel,
    private readonly onSearch: (term: string) => void
  ) {
    super(searchModel)
  }

  override readonly update = () => {
    // Actualizar UI si es necesario
  }

  readonly initComponent = () => {
    // El parent ES el form #search
    this.searchForm = this.parent as HTMLFormElement
    
    // Buscar el input DENTRO del form (sin ID, solo por tag)
    this.searchInput = this.searchForm.querySelector('input[type="text"]') as HTMLInputElement
    
    if (!this.searchInput) {
      console.error('Search input not found in form')
      return
    }

    console.log('Search input encontrado:', this.searchInput)

    // Prevenir el submit del form
    this.searchForm.addEventListener('submit', this.handleSubmit)

    // Escuchar el evento 'input' para búsqueda en tiempo real
    this.searchInput.addEventListener('input', this.handleInput)
  }

  private readonly handleSubmit = (event: Event) => {
    event.preventDefault() // Prevenir recarga de página
    console.log('Form submit prevenido')
  }

  private readonly handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement
    const searchTerm = target.value.trim()
    
    console.log('Input detectado:', searchTerm)
    
    // Actualizar el modelo
    this.searchModel.setSearchTerm(searchTerm)
    
    // Llamar al callback del IndexController
    this.onSearch(searchTerm)
  }

  readonly clearInput = () => {
    if (this.searchInput) {
      this.searchInput.value = ''
      this.searchModel.setSearchTerm('')
    }
  }
}
