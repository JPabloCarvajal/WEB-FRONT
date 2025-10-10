import Observer from '../../shared/Observer/Observer.js';
import MenuTemplate from '../template/MenuTemplate.js';
export default class MenuView extends Observer {
    parent;
    menuTemplate;
    constructor(parent, menuModel) {
        super(menuModel);
        this.parent = parent;
        this.menuTemplate = new MenuTemplate([]);
    }
    update = () => {
        this.render();
    };
    initComponent = (menu) => {
        this.menuTemplate.setMenu(menu);
        this.parent.appendChild(this.menuTemplate.getMenuNode());
    };
    render = () => {
        this.parent.innerHTML = '';
        this.parent.appendChild(this.menuTemplate.getMenuNode());
    };
}
