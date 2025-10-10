import MenuController from '../controller/MenuController.js';
import MenuModel from '../model/MenuModel.js';
import MenuView from '../view/MenuView.js';
export default class MenuFactory {
    static create = (parent, callbacks) => {
        const model = new MenuModel();
        const view = new MenuView(parent, model);
        return new MenuController(model, view, callbacks);
    };
}
