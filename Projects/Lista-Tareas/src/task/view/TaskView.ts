import type { Task } from "../model/TaskModel.js";

export default class TaskView {
  private readonly btnSave: HTMLButtonElement;
  private readonly list: HTMLUListElement;
  private readonly input: HTMLInputElement;

  constructor(
    btnId: string = "btn-task",
    listId: string = "list",
    inputId: string = "task"
  ) {
    this.btnSave = document.getElementById(btnId)! as HTMLButtonElement;
    this.list = document.getElementById(listId)! as HTMLUListElement;
    this.input = document.getElementById(inputId)! as HTMLInputElement;
  }

  render(tasks: Task[]): void {
    if (!tasks.length) {
      this.list.innerHTML = "<h4>No hay tareas</h4>";
      return;
    }
    this.list.innerHTML = "";
    const frag = document.createDocumentFragment();

    tasks.forEach(t => {
      const li = document.createElement("li");
      li.className = "items";

      const p = document.createElement("p");
      p.textContent = t.title;

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "delete-task";
      btn.dataset["id"] = String(t.id);
      btn.textContent = "Eliminar";

      li.append(p, btn);
      frag.appendChild(li);
    });

    this.list.appendChild(frag);
  }

  bindAdd(onAdd: (title: string) => void): void {
    this.btnSave.addEventListener("click", () => {
      const title = this.input.value.trim();
      if (!title) return;
      onAdd(title);
      this.input.value = "";
      this.input.focus();
    });

    this.input.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.key === "Enter") this.btnSave.click();
    });
  }

  bindDelete(onDelete: (id: number) => void): void {
    this.list.addEventListener("click", e => {
      const target = e.target as HTMLElement | null;
      if (target && target.matches("button.delete-task")) {
        const idAttr = (target as HTMLButtonElement).dataset["id"];
        if (idAttr) onDelete(Number(idAttr));
      }
    });
  }
}
