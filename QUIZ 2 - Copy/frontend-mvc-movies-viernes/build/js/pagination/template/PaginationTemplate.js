export default class PaginationTemplate {
    pagination;
    constructor(pagination) {
        this.pagination = pagination;
    }
    setPagination = (pagination) => {
        this.pagination = pagination;
    };
    getPaginationNode = () => {
        const container = document.createElement('div');
        container.className = 'pagination';
        const prevBtn = document.createElement('button');
        prevBtn.textContent = '<--';
        prevBtn.disabled = this.pagination.currentPage === 1;
        const nextBtn = document.createElement('button');
        nextBtn.textContent = '-->';
        nextBtn.disabled = this.pagination.currentPage === this.pagination.totalPages;
        const numInfo = document.createElement('span');
        numInfo.textContent = `${this.pagination.currentPage} / ${this.pagination.totalPages}`;
        container.appendChild(prevBtn);
        container.appendChild(numInfo);
        container.appendChild(nextBtn);
        return container;
    };
    attachEvents = (container, onPrev, onNext) => {
        const prevBtn = container.querySelector('button:first-child');
        const nextBtn = container.querySelector('button:last-child');
        prevBtn.addEventListener('click', onPrev);
        nextBtn.addEventListener('click', onNext);
    };
}
