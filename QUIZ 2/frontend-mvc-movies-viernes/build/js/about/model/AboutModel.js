export default class AboutModel {
    about;
    constructor() {
        this.about = {
            name: "Juan Pablo Carvajal Giraldo",
            id: "ID: 525717",
            imagePath: "./asset/img/yo.jpg"
        };
    }
    getAbout = () => {
        return this.about;
    };
    initComponent = () => { };
}
