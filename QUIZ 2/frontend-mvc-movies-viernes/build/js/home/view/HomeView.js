import HomeTemplate from "../template/HomeTemplate.js";
export default class HomeView {
    parent;
    model;
    homeTemplate;
    constructor(parent, model) {
        this.parent = parent;
        this.model = model;
        this.homeTemplate = new HomeTemplate(this.model.getHome());
    }
    initComponent = (home) => {
        this.homeTemplate.setHome(home);
        this.parent.appendChild(this.homeTemplate.getHomeNode());
    };
    render = () => {
        this.parent.innerHTML = '';
        this.parent.appendChild(this.homeTemplate.getHomeNode());
    };
}
