import Observer from '../../shared/Observer/Observer.js';
export default class SearchView extends Observer {
    parent;
    searchModel;
    onSearch;
    searchInput = null;
    searchForm = null;
    constructor(parent, searchModel, onSearch) {
        super(searchModel);
        this.parent = parent;
        this.searchModel = searchModel;
        this.onSearch = onSearch;
    }
    update = () => {
        // Actualizar UI si es necesario
    };
    initComponent = () => {
        // El parent ES el form #search
        this.searchForm = this.parent;
        // Buscar el input DENTRO del form (sin ID, solo por tag)
        this.searchInput = this.searchForm.querySelector('input[type="text"]');
        if (!this.searchInput) {
            console.error('Search input not found in form');
            return;
        }
        console.log('Search input encontrado:', this.searchInput);
        // Prevenir el submit del form
        this.searchForm.addEventListener('submit', this.handleSubmit);
        // Escuchar el evento 'input' para búsqueda en tiempo real
        this.searchInput.addEventListener('input', this.handleInput);
    };
    handleSubmit = (event) => {
        event.preventDefault(); // Prevenir recarga de página
        console.log('Form submit prevenido');
    };
    handleInput = (event) => {
        const target = event.target;
        const searchTerm = target.value.trim();
        console.log('Input detectado:', searchTerm);
        // Actualizar el modelo
        this.searchModel.setSearchTerm(searchTerm);
        // Llamar al callback del IndexController
        this.onSearch(searchTerm);
    };
    clearInput = () => {
        if (this.searchInput) {
            this.searchInput.value = '';
            this.searchModel.setSearchTerm('');
        }
    };
}
