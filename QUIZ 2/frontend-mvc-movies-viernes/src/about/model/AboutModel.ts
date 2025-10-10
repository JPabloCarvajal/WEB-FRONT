import About from "../types/About.js";

export default class AboutModel{
    private readonly about: About

    constructor(){
        this.about = {
            name: "Juan Pablo Carvajal Giraldo",
            id: "ID: 525717",
            imagePath: "./asset/img/yo.jpg"
        }
    }

    readonly getAbout = (): About =>{
        return this.about
    }

    readonly initComponent = () =>{}
}