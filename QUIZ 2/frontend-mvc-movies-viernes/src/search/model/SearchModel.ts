import Subject from '../../shared/Observer/Subject.js'
import SearchView from '../view/SearchView.js'
import Search from '../types/Search.js'

export default class SearchModel extends Subject<SearchView> {
  private search: Search

  constructor() {
    super()
    this.search = {
      searchTerm: ''
    }
  }

  readonly getSearch = (): Search => this.search

  readonly getSearchTerm = (): string => this.search.searchTerm

  readonly setSearchTerm = (term: string) => {
    this.search.searchTerm = term
    this.notifyAllObservers()
  }

  readonly clearSearch = () => {
    this.search.searchTerm = ''
    this.notifyAllObservers()
  }

  readonly initComponent = () => {}
}
