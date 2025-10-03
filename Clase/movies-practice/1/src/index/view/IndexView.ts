export default class IndexView{

    private readonly main: HTMLElement;

    constructor(){
        this.main = document.querySelector("main") as HTMLElement
    }

    readonly getMain = (): HTMLElement => this.main

    readonly initComponent = () =>{
        this.main.innerHTML += `<h1>Selftry</h1>`
    }
    
}