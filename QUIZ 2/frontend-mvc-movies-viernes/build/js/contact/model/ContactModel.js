export default class ContactModel {
    contact;
    constructor() {
        this.contact = {
            requestType: "POST",
            url: "/api/1.0/contacto"
        };
    }
    getContact = () => {
        return this.contact;
    };
    initComponent = () => { };
}
