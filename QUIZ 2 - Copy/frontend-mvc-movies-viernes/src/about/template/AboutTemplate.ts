import About from "../types/About.js";

export default class AboutTemplate {

    constructor(private about: About) { }

    readonly setAbout = (about: About) => {
        this.about = about
    }

    readonly getAboutNode = (): HTMLDivElement => {
        const div = document.createElement('div');
        const h1 = document.createElement('h1');
        const h2 = document.createElement('h2');
        const img = document.createElement('img')
        h1.innerHTML = this.about.name
        h2.innerHTML = this.about.id
        img.src = this.about.imagePath

        div.appendChild(h1);
        div.appendChild(h2);
        div.appendChild(img);
        
        return div
    }
}