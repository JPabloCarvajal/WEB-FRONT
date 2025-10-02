export default class IndexView {
    body;
    main;
    constructor() {
        this.body = document.body;
        this.main = this.body.querySelector('main');
    }
    getMain = () => this.main;
    initComponent = async () => {
        this.main.innerHTML += `<h1>Index</h1>`;
    };
}
