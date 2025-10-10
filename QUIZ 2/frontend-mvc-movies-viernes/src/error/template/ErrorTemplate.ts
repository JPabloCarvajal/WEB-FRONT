import Error from "../types/Error.js"

export default class ErrorTemplate {
  constructor(private error: Error) {}

  readonly setError = (error: Error) => {
    this.error = error
  }

  readonly getErrorNode = (): HTMLDivElement => {
    const div = document.createElement('div')
    
    div.innerHTML = `      
      <div class="error-container">
        <h1 class="error-code">${this.error.errorCode}</h1>
        <h2 class="error-title">${this.error.title}</h2>
        <p class="error-message">${this.error.message}</p>
        <button class="error-button" id="btn-back-rentals">${this.error.buttonText}</button>
      </div>
    `
    
    return div
  }
}
