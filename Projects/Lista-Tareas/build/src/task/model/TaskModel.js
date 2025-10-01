export default class TaskModel {
    tasks = [{ id: 1, title: "Primera tarea" }];
    constructor() { }
    initComponent = async () => {
    };
    getAll() {
        return [...this.tasks];
    }
    add(title) {
        const task = { id: Date.now(), title: title.trim() };
        this.tasks = [...this.tasks, task];
        return task;
    }
    remove(id) {
        this.tasks = this.tasks.filter(t => t.id !== id);
    }
}
