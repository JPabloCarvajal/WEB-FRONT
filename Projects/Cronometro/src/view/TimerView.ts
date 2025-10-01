export default class TimerView{
    private readonly timer: HTMLParagraphElement;
    private readonly startButton: HTMLButtonElement;
    private readonly roundButton: HTMLButtonElement;
    private readonly stopButton: HTMLButtonElement;

    constructor(
        timer: string = "timer",
        inicioBtn: string = "initBtn",
        roundBtn: string = "roundBtn",
        stopBtn: string = "stopBtn",
    ){
        this.timer = document.getElementById(timer) as HTMLParagraphElement
        this.startButton = document.getElementById(inicioBtn) as HTMLButtonElement
        this.roundButton = document.getElementById(roundBtn) as HTMLButtonElement
        this.stopButton = document.getElementById(stopBtn) as HTMLButtonElement
    }

    
    readonly initComponent = async (): Promise<void> =>{
    
    }
}