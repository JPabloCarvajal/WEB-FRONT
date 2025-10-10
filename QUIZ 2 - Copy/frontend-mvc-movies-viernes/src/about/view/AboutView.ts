import AboutModel from "../model/AboutModel.js";
import AboutTemplate from "../template/AboutTemplate.js";
import About from "../types/About.js";

export default class AboutView{

    private readonly aboutTemplate: AboutTemplate

    constructor(private readonly parent: HTMLElement, 
                private model: AboutModel
    ){
        this.aboutTemplate = new AboutTemplate(this.model.getAbout());
    }

    readonly initComponent = (about: About) =>{
        this.aboutTemplate.setAbout(about)
        this.parent.appendChild(this.aboutTemplate.getAboutNode())
    }

    readonly render = () =>{
        this.parent.innerHTML = ''
        this.parent.appendChild(this.aboutTemplate.getAboutNode())
    }
}