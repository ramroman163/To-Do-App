export const createTask = (text) => {
    const li = document.createElement("li");
    li.classList.add("tasks__task");
    
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.classList.add("tasks__checkbox");
    checkbox.setAttribute("onchange", "updateCounter()");

    li.appendChild(checkbox);

    const paragraph = document.createElement("p");
    paragraph.classList.add("tasks__text");
    paragraph.innerText = text;

    li.appendChild(paragraph);

    li.style.opacity = 0;

    return li;
}

export default createTask;