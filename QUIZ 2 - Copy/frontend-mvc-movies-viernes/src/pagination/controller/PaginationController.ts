import PaginationModel from "../model/PaginationModel.js";
import PaginationView from "../view/PaginationView.js";

export default class PaginationController{

    constructor(
        private readonly model: PaginationModel,
        private readonly view: PaginationView
    ){}

    readonly initComponent = () =>{
        this.model.initComponent()
        this.view.initComponent(this.model.getPagination())

    }
}