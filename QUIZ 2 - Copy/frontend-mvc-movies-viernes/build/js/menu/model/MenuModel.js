import Subject from '../../shared/Observer/Subject.js';
export default class MenuModel extends Subject {
    menu;
    navigationActions;
    constructor() {
        super();
        this.navigationActions = {
            showAbout: () => { },
            showRental: () => { }
        };
        this.menu = [
            {
                label: 'Home',
                link: '#home',
                active: false,
                action: () => {
                },
            },
            {
                label: 'Rentals',
                link: '#rentals',
                active: true,
                action: () => {
                    if (this.navigationActions?.showRental) {
                        this.setActive('Rentals');
                        this.navigationActions.showRental();
                    }
                },
            },
            {
                label: 'About',
                link: '#about',
                active: false,
                action: () => {
                    if (this.navigationActions?.showAbout) {
                        this.setActive('About');
                        this.navigationActions.showAbout();
                    }
                },
            },
        ];
    }
    setNavigationActions(actions) {
        this.navigationActions = actions;
    }
    setActive = (labe) => {
        this.menu.forEach(element => (labe === element.label) ? element.active = true : element.active = false);
        this.notifyAllObservers();
    };
    getMenu = () => this.menu;
    manageAction = () => {
    };
    initComponent = () => { };
}
