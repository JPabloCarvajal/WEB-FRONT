import SearchModel from '../model/SearchModel.js'
import SearchView from '../view/SearchView.js'

export default class SearchController {
  constructor(
    private readonly model: SearchModel,
    private readonly view: SearchView
  ) {}

  readonly initComponent = () => {
    this.model.initComponent()
    this.view.initComponent()
  }

  readonly clearSearch = () => {
    this.model.clearSearch()
    this.view.clearInput()
  }
}
