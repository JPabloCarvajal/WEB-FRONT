export default class TaskController {
    taskModel;
    taskView;
    constructor(taskModel, taskView) {
        this.taskModel = taskModel;
        this.taskView = taskView;
    }
    initComponent() {
        // estado inicial
        this.taskView.render(this.taskModel.getAll());
        // vista → modelo
        this.taskView.bindAdd(title => {
            this.taskModel.add(title);
            this.taskView.render(this.taskModel.getAll());
        });
        this.taskView.bindDelete(id => {
            this.taskModel.remove(id);
            this.taskView.render(this.taskModel.getAll());
        });
    }
}
