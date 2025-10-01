export default class IndexView{

    private readonly body: HTMLElement;


    constructor(){
        this.body = document.body
    }

    readonly initComponent = async () =>{
        this.body.innerHTML+=`<h1> Hello, World! </h1>`
    }
}