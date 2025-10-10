import Pagination from "../types/Pagination.js";

export default class PaginationTemplate {

  constructor(private pagination: Pagination) { }

  readonly setPagination = (pagination: Pagination) => {
    this.pagination = pagination
  }

  readonly getPaginationNode = (): HTMLDivElement => {
    const container = document.createElement('div')
    container.className = 'pagination'

    const prevBtn = document.createElement('button')
    prevBtn.textContent = '<--'
    prevBtn.disabled = this.pagination.currentPage === 1

    const nextBtn = document.createElement('button')
    nextBtn.textContent = '-->'
    nextBtn.disabled = this.pagination.currentPage === this.pagination.totalPages

    const numInfo = document.createElement('span')
    numInfo.textContent = `${this.pagination.currentPage} / ${this.pagination.totalPages}`

    container.appendChild(prevBtn)
    container.appendChild(numInfo)
    container.appendChild(nextBtn)

    return container
  }

  readonly attachEvents = (
    container: HTMLDivElement, 
    onPrev: () => void, 
    onNext: () => void
) => {
    const prevBtn = container.querySelector('button:first-child') as HTMLButtonElement
    const nextBtn = container.querySelector('button:last-child') as HTMLButtonElement
    
    prevBtn.addEventListener('click', onPrev)
    nextBtn.addEventListener('click', onNext)
}
}
