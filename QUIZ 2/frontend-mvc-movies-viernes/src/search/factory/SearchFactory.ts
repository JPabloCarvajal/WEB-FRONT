import SearchController from '../controller/SearchController.js'
import SearchModel from '../model/SearchModel.js'
import SearchView from '../view/SearchView.js'

export default class SearchFactory {
  static readonly create = (
    parent: HTMLElement,
    onSearch: (term: string) => void
  ): SearchController => {
    const model = new SearchModel()
    const view = new SearchView(parent, model, onSearch)
    return new SearchController(model, view)
  }
}
