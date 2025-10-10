export default class AboutTemplate {
    about;
    constructor(about) {
        this.about = about;
    }
    setAbout = (about) => {
        this.about = about;
    };
    getAboutNode = () => {
        const div = document.createElement('div');
        div.className = 'about-container';
        const h1 = document.createElement('h1');
        const h2 = document.createElement('h2');
        const img = document.createElement('img');
        const p = document.createElement('p');
        p.innerHTML = 'Yo:';
        h1.innerHTML = this.about.name;
        h2.innerHTML = this.about.id;
        img.src = this.about.imagePath;
        div.appendChild(h1);
        div.appendChild(h2);
        div.appendChild(p);
        div.appendChild(img);
        return div;
    };
}
