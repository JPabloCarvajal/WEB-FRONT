import HomeModel from "../model/HomeModel.js"
import HomeTemplate from "../template/HomeTemplate.js"
import Home from "../types/Home.js"

export default class HomeView {
  private readonly homeTemplate: HomeTemplate

  constructor(
    private readonly parent: HTMLElement,
    private model: HomeModel
  ) {
    this.homeTemplate = new HomeTemplate(this.model.getHome())
  }

  readonly initComponent = (home: Home) => {
    this.homeTemplate.setHome(home)
    this.parent.appendChild(this.homeTemplate.getHomeNode())
  }

  readonly render = () => {
    this.parent.innerHTML = ''
    this.parent.appendChild(this.homeTemplate.getHomeNode())
  }
}
