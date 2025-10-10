export default class MenuController {
    model;
    view;
    callbacks;
    constructor(model, view, callbacks) {
        this.model = model;
        this.view = view;
        this.callbacks = callbacks;
    }
    initComponent = () => {
        this.model.setNavigationActions(this.callbacks);
        this.model.initComponent();
        this.view.initComponent(this.model.getMenu());
    };
}
