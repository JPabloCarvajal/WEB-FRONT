import MenuModel from '../model/MenuModel.js'
import MenuView from '../view/MenuView.js'

export default class MenuController {
  constructor(
    private readonly model: MenuModel,
    private readonly view: MenuView,
    private readonly callbacks: { showAbout: () => void; showRental: () => void; showHome: () => void ;showContact: () => void;}
  ) {}

  readonly initComponent = () => {
    this.model.setNavigationActions(this.callbacks)
    this.model.initComponent()
    this.view.initComponent(this.model.getMenu())
  }
}
