import ErrorModel from "../model/ErrorModel.js"
import ErrorView from "../view/ErrorView.js"

export default class ErrorController {
  constructor(
    private readonly model: ErrorModel,
    private readonly view: ErrorView
  ) {}

  readonly initComponent = () => {
    this.model.initComponent()
    this.view.initComponent(this.model.getError())
  }
}
