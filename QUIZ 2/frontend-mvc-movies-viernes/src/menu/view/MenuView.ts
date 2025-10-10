import Observer from '../../shared/Observer/Observer.js'
import MenuModel from '../model/MenuModel.js'
import MenuTemplate from '../template/MenuTemplate.js'
import MenuItem from '../types/MenuItem.js'

export default class MenuView extends Observer<MenuModel>{
  private readonly menuTemplate: MenuTemplate

  constructor(private readonly parent: HTMLElement,
    menuModel: MenuModel
  ) {
    super(menuModel)
    this.menuTemplate = new MenuTemplate([])
  }

  override readonly update = () => {
    this.render()
  }
  
  readonly initComponent = (menu: MenuItem[]) => {
    this.menuTemplate.setMenu(menu)
    this.parent.appendChild(this.menuTemplate.getMenuNode())
  }

  readonly render = () => {
    this.parent.innerHTML = ''
    this.parent.appendChild(this.menuTemplate.getMenuNode())
  }
}
