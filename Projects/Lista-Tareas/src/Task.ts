import TaskController from "./task/controller/TaskController.js";
import TaskModel from "./task/model/TaskModel.js";
import TaskView from "./task/view/TaskView.js";

document.addEventListener("DOMContentLoaded", () => {
  const controller = new TaskController(new TaskModel(), new TaskView());
  controller.initComponent();
});
