export default class ContactTemplate {
    contact;
    constructor(contact) {
        this.contact = contact;
    }
    setContact = (contact) => {
        this.contact = contact;
    };
    getContactNode = () => {
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

        </section>`;
    };
}
