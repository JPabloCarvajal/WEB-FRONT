import Subject from '../../shared/Observer/Subject.js';
import MenuItem from '../types/MenuItem.js'
import MenuView from '../view/MenuView.js';

export default class MenuModel extends Subject<MenuView> {
  private readonly menu: MenuItem[]
  private navigationActions: { showAbout: () => void; showRental: () => void; showHome: () => void;showContact: () => void;}
  constructor() {
    super()
    this.navigationActions = {
      showAbout: () => { },
      showRental: () => { },
      showHome: () => { },
      showContact: () => { }
    }
    this.menu = [
      {
        label: 'Home',
        link: '#home',
        active: false,
        action: () => {
          if (this.navigationActions?.showHome) {
            this.setActive('Home')
            this.navigationActions.showHome()
          }
        },
      },
      {
        label: 'Rentals',
        link: '#rentals',
        active: true,
        action: () => {
          if (this.navigationActions?.showRental) {
            this.setActive('Rentals')
            this.navigationActions.showRental()
          }
        },
      },
      {
        label: 'About',
        link: '#about',
        active: false,
        action: () => {
          if (this.navigationActions?.showAbout) {
            this.setActive('About')
            this.navigationActions.showAbout()
          }
        },
      },
      {
        label: 'Contact',
        link: '#contact',
        active: false,
        action: () => {
          if (this.navigationActions?.showContact) {
            this.setActive('Contact')
            this.navigationActions.showContact()
          }
        },
      },
    ]
  }

  setNavigationActions(actions: { showAbout: () => void; showRental: () => void; showHome: () => void; showContact: () => void;}) {
    this.navigationActions = actions
  }

  readonly setActive = (labe: string) => {
    this.menu.forEach(element =>
      (labe === element.label) ? element.active = true : element.active = false
    )
    this.notifyAllObservers()
  }

  readonly getMenu = (): MenuItem[] => this.menu

  readonly manageAction = () => {
  }

  readonly initComponent = () => { }
}
