import ErrorTemplate from "../template/ErrorTemplate.js";
export default class ErrorView {
    parent;
    model;
    onBackToRentals;
    errorTemplate;
    constructor(parent, model, onBackToRentals) {
        this.parent = parent;
        this.model = model;
        this.onBackToRentals = onBackToRentals;
        this.errorTemplate = new ErrorTemplate(this.model.getError());
    }
    initComponent = (error) => {
        this.errorTemplate.setError(error);
        const node = this.errorTemplate.getErrorNode();
        this.parent.appendChild(node);
        const button = node.querySelector('#btn-back-rentals');
        if (button) {
            button.addEventListener('click', this.onBackToRentals);
        }
    };
    render = () => {
        this.parent.innerHTML = '';
        const node = this.errorTemplate.getErrorNode();
        this.parent.appendChild(node);
        const button = node.querySelector('#btn-back-rentals');
        if (button) {
            button.addEventListener('click', this.onBackToRentals);
        }
    };
}
