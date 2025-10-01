export default class TimerModel {
    constructor() { }

    readonly initComponent = async (): Promise<void> => {

    }

    public startTime: number = 0;
    public elapsedPausedTime: number = 0;
    public stopwatchInterval: number = 0;

    readonly startStopWatch = async (): Promise<void> => {
        let startTime = new Date().getTime() - this.elapsedPausedTime
    }

    readonly stopStopwatch = async (): Promise<void> => {
        clearInterval(this.stopwatchInterval);
        this.stopwatchInterval = 0;
    }

    readonly resetStopwatch = async (): Promise<void> => {
        this.stopStopwatch();
        this.elapsedPausedTime = 0;
    }
}