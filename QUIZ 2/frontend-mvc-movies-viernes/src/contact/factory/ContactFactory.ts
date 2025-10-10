import ContactController from "../controller/ContactController.js"
import ContactModel from "../model/ContactModel.js"
import ContactView from "../view/ContactView.js"

export default class ContactFactory{
    static readonly create = (parent: HTMLElement): ContactController =>{
        const model = new ContactModel();
        const view = new ContactView(parent,model);
        return new ContactController(model,view);
    }
}