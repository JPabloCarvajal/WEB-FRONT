import PaginationController from "../controller/PaginationController.js";
import PaginationModel from "../model/PaginationModel.js";
import PaginationView from "../view/PaginationView.js";

export default class PaginationFactory{

    // TO-DO el total se deberia actualizar para luego que haga el search
    static readonly create = (
        parent: HTMLElement, 
        totalItems: number,
        onPageChange: (page: number) => void): PaginationController => {
        const model = new PaginationModel(totalItems, 10)
        const view = new PaginationView(parent, model, onPageChange)
        return new PaginationController(model, view)
    }
}