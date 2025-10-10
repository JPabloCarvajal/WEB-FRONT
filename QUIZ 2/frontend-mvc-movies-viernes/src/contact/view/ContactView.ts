import ContactModel from "../model/ContactModel.js";
import ContactTemplate from "../template/ContactTemplate.js";
import Contact from "../types/Contact.js";

export default class ContactView{

    private readonly contactTemplate: ContactTemplate

    constructor(private readonly parent: HTMLElement, 
                private model: ContactModel
    ){
        this.contactTemplate = new ContactTemplate(this.model.getContact());
    }

    readonly initComponent = (contact: Contact) =>{
        this.contactTemplate.setContact(contact)
        this.parent.innerHTML = this.contactTemplate.getContactNode()
    }

    readonly render = () =>{
        this.initComponent(this.model.getContact())
    }
}