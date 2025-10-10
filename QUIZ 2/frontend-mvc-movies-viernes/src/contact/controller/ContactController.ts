import ContactModel from "../model/ContactModel.js";
import ContactView from "../view/ContactView.js";

export default class ContactController{
    constructor(
        private readonly model: ContactModel,
        private readonly view: ContactView
    ){}

    readonly initComponent = () =>{
        this.model.initComponent()
        this.view.initComponent(this.model.getContact())
    }
}