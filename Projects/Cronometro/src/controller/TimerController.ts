import TimerModel from "../model/TimerModel.js";
import TimerView from "../view/TimerView";

export default class TimerController{

    constructor(
        private readonly timerModel: TimerModel,
        private readonly timerView: TimerView
    ){}

    readonly initComponent = async (): Promise<void> =>{
        this.timerModel.initComponent()
        this.timerView.initComponent()
    }
}