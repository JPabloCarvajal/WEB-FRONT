export default class MovieController {
    model;
    view;
    constructor(model, view) {
        this.model = model;
        this.view = view;
        console.log('IndexController');
    }
    initComponent = async () => {
        await this.model.initComponent();
        this.view.initComponent();
    };
}
