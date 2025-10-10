import Subject from "../../shared/Observer/Subject.js";
import Pagination from "../types/Pagination.js";
import PaginationView from "../view/PaginationView.js";

export default class PaginationModel extends Subject<PaginationView> {

    private readonly pagination: Pagination

    constructor(totalItems: number, itemsPerPage: number) {
        super()
        this.pagination = {
            currentPage: 1,
            itemsPerPage: itemsPerPage,
            totalItems: totalItems,
            totalPages: Math.ceil(totalItems / itemsPerPage)
        }
    }

    readonly getPagination = (): Pagination => this.pagination
    readonly getCurrentPage = (): number => this.pagination.currentPage
    readonly getTotalPages = (): number => this.pagination.totalPages
    readonly getOffset = (): number => (this.pagination.currentPage - 1) * this.pagination.itemsPerPage
    readonly setPage = (page: number) => {
        if (page >= 1 && page <= this.pagination.totalPages) {
            this.pagination.currentPage = page
            this.notifyAllObservers()
        }
    }
    readonly setTotalItems = (total: number) => {
        this.pagination.totalItems = total
        this.pagination.totalPages = Math.ceil(total / this.pagination.itemsPerPage)
        this.notifyAllObservers()
    }

    readonly initComponent = () => { }
}