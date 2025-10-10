import ContactTemplate from "../template/ContactTemplate.js";
export default class ContactView {
    parent;
    model;
    contactTemplate;
    constructor(parent, model) {
        this.parent = parent;
        this.model = model;
        this.contactTemplate = new ContactTemplate(this.model.getContact());
    }
    initComponent = (contact) => {
        this.contactTemplate.setContact(contact);
        this.parent.innerHTML = this.contactTemplate.getContactNode();
    };
    render = () => {
        this.initComponent(this.model.getContact());
    };
}
