export default class SearchController {
    model;
    view;
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
    initComponent = () => {
        this.model.initComponent();
        this.view.initComponent();
    };
    clearSearch = () => {
        this.model.clearSearch();
        this.view.clearInput();
    };
}
