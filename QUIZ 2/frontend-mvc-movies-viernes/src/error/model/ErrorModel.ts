import Error from "../types/Error.js"

export default class ErrorModel {
  private readonly error: Error

  constructor() {
    this.error = {
      errorCode: "404",
      title: "Página no encontrada",
      message: "Oops! La página que buscas no existe o fue movida.",
      buttonText: "Volver a Rentals"
    }
  }

  readonly getError = (): Error => this.error

  readonly initComponent = () => {}
}
