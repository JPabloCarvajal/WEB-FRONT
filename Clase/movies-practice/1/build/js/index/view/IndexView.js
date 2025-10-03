export default class IndexView {
    main;
    constructor() {
        this.main = document.querySelector("main");
    }
    getMain = () => this.main;
    initComponent = () => {
        this.main.innerHTML += `<h1>Selftry</h1>`;
    };
}
