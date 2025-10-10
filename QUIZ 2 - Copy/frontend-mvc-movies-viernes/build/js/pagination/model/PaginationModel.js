import Subject from "../../shared/Observer/Subject.js";
export default class PaginationModel extends Subject {
    pagination;
    constructor(totalItems, itemsPerPage) {
        super();
        this.pagination = {
            currentPage: 1,
            itemsPerPage: itemsPerPage,
            totalItems: totalItems,
            totalPages: Math.ceil(totalItems / itemsPerPage)
        };
    }
    getPagination = () => this.pagination;
    getCurrentPage = () => this.pagination.currentPage;
    getTotalPages = () => this.pagination.totalPages;
    getOffset = () => (this.pagination.currentPage - 1) * this.pagination.itemsPerPage;
    setPage = (page) => {
        if (page >= 1 && page <= this.pagination.totalPages) {
            this.pagination.currentPage = page;
            this.notifyAllObservers();
        }
    };
    setTotalItems = (total) => {
        this.pagination.totalItems = total;
        this.pagination.totalPages = Math.ceil(total / this.pagination.itemsPerPage);
        this.notifyAllObservers();
    };
    initComponent = () => { };
}
