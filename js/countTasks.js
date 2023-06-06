const countTasks = () => {
    let checkboxList = document.querySelectorAll(".tasks__checkbox");

    const spanNumber = document.querySelector(".tasks__number > span");

    spanNumber.innerText = checkboxList.length;
}

function updateCounter() {
    let inactives = 0;
    const checkboxes = document.querySelectorAll(".tasks__checkbox");
    for (var i = 0; i < checkboxes.length; i++) {
        if (!checkboxes[i].checked) {

            inactives++;
        }
    }
    const spanNumber = document.querySelector(".tasks__number > span");
    spanNumber.innerText = inactives;
}
