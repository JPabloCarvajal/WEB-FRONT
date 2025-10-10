import About from "../types/About.js";

export default class AboutModel{
    private readonly about: About

    constructor(){
        this.about = {
            name: "Juan Pablo Carvajal",
            id: "525717",
            imagePath: "../../asset/img/First_Cow_poster.jpeg"
        }
    }

    readonly getAbout = (): About =>{
        return this.about
    }

    readonly initComponent = () =>{}
}