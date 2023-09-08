import "./style/style.css"

let taskChecked = []

function handleSubmit(ev) {
    ev.preventDefault();
    const taskValue = document.getElementById("task-description")
    
    if (taskValue.value) {
        createTask()
    } else {
        alert("Digite alguma tarefa!")
    }
}
function createTask() {
    const taskValue = document.getElementById("task-description")
    const ul = document.getElementById("task-list")
    const modelTask = document.querySelector(".task")
    const newTask = modelTask.cloneNode(true)

    const newTaskTitle = newTask.querySelector("h3")
    newTaskTitle.innerText = taskValue.value
    taskValue.value = ""

    const checkButton = document.createElement("button")
    checkButton.innerText = "Check"
    const deleteButton = document.createElement("button")
    deleteButton.innerText = "Delete"

    newTask.querySelector("div").append(checkButton, deleteButton)
    
    ul.appendChild(newTask)
    
    newTask.style.display = "flex"
    newTask.querySelector("div").style.display = "flex"
    newTask.querySelector("div").style.gap = "8px"

    checkButton.addEventListener("click", check)
    deleteButton.addEventListener("click", delet)

    function check() {
        taskChecked.push(newTaskTitle.innerText)
        newTask.querySelector("h3").style.textDecoration = "line-through"
        newTask.querySelector("h3").style.color = "#808080"
        console.clear()
        console.log(taskChecked);
    }

    function delet() {
        const elementToDelet = newTask
        if (elementToDelet) {
            elementToDelet.remove()
            taskChecked = taskChecked.filter((element)=>{
                return (element !== elementToDelet.querySelector("h3").innerText)
            })
            console.clear()
            console.log(taskChecked);
        }
    }
}

document.getElementById("form-toDo").addEventListener("submit", handleSubmit)