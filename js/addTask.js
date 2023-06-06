import { createTask } from "./createTask.js"; 

const form = document.querySelector(".form__tasks");
let input = document.querySelector(".form__input-tasks");

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    addTaskToList(input.value);
    countTasks();
    form.reset();
});

const addTaskToList = (text) =>{
    const tasksList = document.querySelector(".tasks__list");
    let newTask = createTask(text);
    
    setTimeout(() =>{
        newTask.style.opacity = 1;
    }, 200);

    tasksList.appendChild(newTask);
}