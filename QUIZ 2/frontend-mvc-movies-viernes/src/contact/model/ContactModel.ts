import Contact from "../types/Contact.js";

export default class ContactModel{
    private readonly contact: Contact

    constructor(){
        this.contact = {
            requestType: "POST",
            url: "/api/1.0/contacto"
        }
    }

    readonly getContact = (): Contact =>{
        return this.contact
    }

    readonly initComponent = () =>{}
}