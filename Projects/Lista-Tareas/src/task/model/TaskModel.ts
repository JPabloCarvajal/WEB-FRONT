export interface Task {
  id: number;
  title: string;
}

export default class TaskModel {
  private tasks: Task[] = [{ id: 1, title: "Primera tarea" }];

  constructor() {}

  readonly initComponent = async (): Promise<void> => {

  };

  getAll(): Task[] {
    return [...this.tasks];
  }

  add(title: string): Task {
    const task: Task = { id: Date.now(), title: title.trim() };
    this.tasks = [...this.tasks, task];
    return task;
  }

  remove(id: number): void {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }
}
