import TaskModel from "../model/TaskModel.js";
import TaskView from "../view/TaskView.js";

export default class TaskController {
  constructor(
    private readonly taskModel: TaskModel,
    private readonly taskView: TaskView
  ) {}

  initComponent(): void {
    this.taskView.render(this.taskModel.getAll());

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
