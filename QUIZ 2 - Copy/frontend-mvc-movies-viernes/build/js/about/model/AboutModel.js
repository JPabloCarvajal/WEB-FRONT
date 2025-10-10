export default class AboutModel {
    about;
    constructor() {
        this.about = {
            name: "Juan Pablo Carvajal",
            id: "525717",
            imagePath: "../../asset/img/First_Cow_poster.jpeg"
        };
    }
    getAbout = () => {
        return this.about;
    };
    initComponent = () => { };
}
