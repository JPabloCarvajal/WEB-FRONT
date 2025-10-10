import ErrorController from "../controller/ErrorController.js";
import ErrorModel from "../model/ErrorModel.js";
import ErrorView from "../view/ErrorView.js";
export default class ErrorFactory {
    static create = (parent, onBackToRentals) => {
        const model = new ErrorModel();
        const view = new ErrorView(parent, model, onBackToRentals);
        return new ErrorController(model, view);
    };
}
