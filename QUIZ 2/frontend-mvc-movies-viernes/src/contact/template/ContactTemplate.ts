import Contact from "../types/Contact.js";

export default class ContactTemplate {

    constructor(private contact: Contact) { }

    readonly setContact = (contact: Contact) => {
        this.contact = contact
    }

    readonly getContactNode = (): string => {
        return `<section class="home-hero">

            <div class="home-panel">

            <h1 class="home-title">Formulario de Contacto</h1>
                <form action="${this.contact.url}" method="${this.contact.requestType}">
                <label for="email" class="home-description"> Email</label>
                <input type="email" id="email" name="email" class ="emailform" required>
                <label for="message" class="home-description"> Mensaje</label>
                <textarea type="text" name="message"   class ="textform"></textarea>
                <div class = "buttonxd">
                <button type="submit" title="Search" class="sendb">Enviar</button>
                </div>
                </form>

             </div>

        </section>`
    }
}