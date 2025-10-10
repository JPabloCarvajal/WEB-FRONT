import Observer from "../../shared/Observer/Observer.js";
import PaginationTemplate from "../template/PaginationTemplate.js";
export default class PaginationView extends Observer {
    parent;
    paginationModel;
    onPageChange;
    paginationTemplate;
    constructor(parent, paginationModel, onPageChange) {
        super(paginationModel);
        this.parent = parent;
        this.paginationModel = paginationModel;
        this.onPageChange = onPageChange;
        this.paginationTemplate = new PaginationTemplate(paginationModel.getPagination());
    }
    update = () => {
        this.render();
    };
    initComponent = (pagination) => {
        this.paginationTemplate.setPagination(pagination);
        const node = this.paginationTemplate.getPaginationNode();
        //this.parent.innerHTML = ''
        this.parent.appendChild(node);
        this.paginationTemplate.attachEvents(node, this.handlePrevPage, this.handleNextPage);
    };
    handlePrevPage = () => {
        const newPage = this.paginationModel.getCurrentPage() - 1;
        if (newPage >= 1) {
            this.paginationModel.setPage(newPage);
            this.onPageChange(newPage);
            this.paginationModel.notifyAllObservers();
        }
    };
    handleNextPage = () => {
        const newPage = this.paginationModel.getCurrentPage() + 1;
        if (newPage <= this.paginationModel.getTotalPages()) {
            this.paginationModel.setPage(newPage);
            this.onPageChange(newPage);
            this.paginationModel.notifyAllObservers();
        }
    };
    render = () => {
        this.parent.innerHTML = '';
        this.paginationTemplate.setPagination(this.paginationModel.getPagination());
        const node = this.paginationTemplate.getPaginationNode();
        this.parent.appendChild(node);
        this.paginationTemplate.attachEvents(node, this.handlePrevPage, this.handleNextPage);
    };
}
