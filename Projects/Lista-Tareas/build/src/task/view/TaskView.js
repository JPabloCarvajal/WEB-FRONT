export default class TaskView {
    btnSave;
    list;
    input;
    constructor(btnId = "btn-task", listId = "list", inputId = "task") {
        this.btnSave = document.getElementById(btnId);
        this.list = document.getElementById(listId);
        this.input = document.getElementById(inputId);
    }
    render(tasks) {
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
    bindAdd(onAdd) {
        this.btnSave.addEventListener("click", () => {
            const title = this.input.value.trim();
            if (!title)
                return;
            onAdd(title);
            this.input.value = "";
            this.input.focus();
        });
        this.input.addEventListener("keydown", (e) => {
            if (e.key === "Enter")
                this.btnSave.click();
        });
    }
    bindDelete(onDelete) {
        this.list.addEventListener("click", e => {
            const target = e.target;
            if (target && target.matches("button.delete-task")) {
                const idAttr = target.dataset["id"];
                if (idAttr)
                    onDelete(Number(idAttr));
            }
        });
    }
}
