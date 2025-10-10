import SearchController from '../controller/SearchController.js';
import SearchModel from '../model/SearchModel.js';
import SearchView from '../view/SearchView.js';
export default class SearchFactory {
    static create = (parent, onSearch) => {
        const model = new SearchModel();
        const view = new SearchView(parent, model, onSearch);
        return new SearchController(model, view);
    };
}
