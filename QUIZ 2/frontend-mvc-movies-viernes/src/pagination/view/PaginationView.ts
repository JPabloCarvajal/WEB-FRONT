import Observer from "../../shared/Observer/Observer.js";
import PaginationModel from "../model/PaginationModel.js";
import PaginationTemplate from "../template/PaginationTemplate.js";
import Pagination from "../types/Pagination.js";

export default class PaginationView extends Observer<PaginationModel> {
    private readonly paginationTemplate: PaginationTemplate

    constructor(private readonly parent: HTMLElement,
        private paginationModel: PaginationModel,
        private readonly onPageChange: (page: number) => void
    ) {
        super(paginationModel)
        this.paginationTemplate = new PaginationTemplate(paginationModel.getPagination())
    }

    override readonly update = () => {
        this.render()
    }

    readonly initComponent = (pagination: Pagination) => {
        this.paginationTemplate.setPagination(pagination)
        const node = this.paginationTemplate.getPaginationNode()

        //this.parent.innerHTML = ''

        this.parent.appendChild(node)

        this.paginationTemplate.attachEvents(
            node,
            this.handlePrevPage,
            this.handleNextPage
        )
    }

    private readonly handlePrevPage = () => {
        
        const newPage = this.paginationModel.getCurrentPage() - 1
        if (newPage >= 1) {
            this.paginationModel.setPage(newPage)
            this.onPageChange(newPage)
            this.paginationModel.notifyAllObservers()
        }
    }

    private readonly handleNextPage = () => {
        const newPage = this.paginationModel.getCurrentPage() + 1
        if (newPage <= this.paginationModel.getTotalPages()) {
            this.paginationModel.setPage(newPage)
            this.onPageChange(newPage)
            this.paginationModel.notifyAllObservers()
        }
    }

    readonly render = () => {
        this.parent.innerHTML = ''
        
        this.paginationTemplate.setPagination(this.paginationModel.getPagination())

        const node = this.paginationTemplate.getPaginationNode()
        this.parent.appendChild(node)   

        this.paginationTemplate.attachEvents(
            node,
            this.handlePrevPage,
            this.handleNextPage
        )
    }
}