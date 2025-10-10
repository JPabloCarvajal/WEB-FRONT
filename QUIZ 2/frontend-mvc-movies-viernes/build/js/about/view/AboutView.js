import AboutTemplate from "../template/AboutTemplate.js";
export default class AboutView {
    parent;
    model;
    aboutTemplate;
    constructor(parent, model) {
        this.parent = parent;
        this.model = model;
        this.aboutTemplate = new AboutTemplate(this.model.getAbout());
    }
    initComponent = (about) => {
        this.aboutTemplate.setAbout(about);
        this.parent.appendChild(this.aboutTemplate.getAboutNode());
    };
    render = () => {
        this.parent.innerHTML = '';
        this.parent.appendChild(this.aboutTemplate.getAboutNode());
    };
}
