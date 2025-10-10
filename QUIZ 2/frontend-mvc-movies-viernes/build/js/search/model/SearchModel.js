import Subject from '../../shared/Observer/Subject.js';
export default class SearchModel extends Subject {
    search;
    constructor() {
        super();
        this.search = {
            searchTerm: ''
        };
    }
    getSearch = () => this.search;
    getSearchTerm = () => this.search.searchTerm;
    setSearchTerm = (term) => {
        this.search.searchTerm = term;
        this.notifyAllObservers();
    };
    clearSearch = () => {
        this.search.searchTerm = '';
        this.notifyAllObservers();
    };
    initComponent = () => { };
}
