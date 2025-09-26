const $btnGuardar = document.getElementById('btn-task'),
    $list = document.getElementById('list'),
    $inputTask = document.getElementById('task')

let tasks = [
    {
        id: 1,
        title: 'first-nigga'
    }
]

const getTasks = () => {
    if (tasks.length) {
        $list.innerHTML = '';
        tasks.forEach(element => {
            const $li = document.createElement("li");
            $li.innerHTML = `<p>${element.title}</p>
            <button id ="delete-task" data-id="${element.id}" class="delete.task">Eliminar</button>`;
            $li.classList.add("items");
            $list.appendChild($li)
        })
    }
    else $list.innerHTML = '<h4>No hay tareas nigga</h4>'
}

const saveTask = () => {
    const task = {
        id: new Date().getTime(),
        title: $inputTask.value
    }
    tasks.push(task)
    $inputTask.value = "";
    getTasks()
}

const deleteTask = (id) =>{
    let newTask = [];
    newTask = tasks.filter(e => parseInt(e.id) !== parseInt(id));
    tasks = newTask;
    getTasks();
}

document.addEventListener("DOMContentLoaded", (e) => getTasks());
document.addEventListener("click", (e) => {
    if(e.target === $btnGuardar) saveTask()
    if(e.target.matches("#delete-task")) deleteTask(e.target.dataset.id)
});