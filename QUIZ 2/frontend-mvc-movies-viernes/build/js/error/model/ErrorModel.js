export default class ErrorModel {
    error;
    constructor() {
        this.error = {
            errorCode: "404",
            title: "Página no encontrada",
            message: "Oops! La página que buscas no existe o fue movida.",
            buttonText: "Volver a Rentals"
        };
    }
    getError = () => this.error;
    initComponent = () => { };
}
