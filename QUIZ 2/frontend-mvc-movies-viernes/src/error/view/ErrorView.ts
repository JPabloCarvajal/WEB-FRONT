import ErrorModel from "../model/ErrorModel.js"
import ErrorTemplate from "../template/ErrorTemplate.js"
import Error from "../types/Error.js"

export default class ErrorView {
  private readonly errorTemplate: ErrorTemplate

  constructor(
    private readonly parent: HTMLElement,
    private model: ErrorModel,
    private readonly onBackToRentals: () => void
  ) {
    this.errorTemplate = new ErrorTemplate(this.model.getError())
  }

  readonly initComponent = (error: Error) => {
    this.errorTemplate.setError(error)
    const node = this.errorTemplate.getErrorNode()
    this.parent.appendChild(node)
    
    const button = node.querySelector('#btn-back-rentals') as HTMLButtonElement
    if (button) {
      button.addEventListener('click', this.onBackToRentals)
    }
  }

  readonly render = () => {
    this.parent.innerHTML = ''
    const node = this.errorTemplate.getErrorNode()
    this.parent.appendChild(node)
    
    const button = node.querySelector('#btn-back-rentals') as HTMLButtonElement
    if (button) {
      button.addEventListener('click', this.onBackToRentals)
    }
  }
}
