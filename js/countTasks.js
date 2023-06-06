// export const countTasks = () =>{
//     let checkboxList = document.querySelectorAll(".tasks__checkbox");
//     let numberPendingTasks = 0;
    
//     const spanNumber = document.querySelector(".tasks__number > span");
    
//     spanNumber.innerText = checkboxList.length;
// }
/*
let checkboxList = document.querySelectorAll(".tasks__checkbox");
console.log(checkboxList.length);

checkboxList.forEach((checkbox) => {
    let counterActive = 0;
    checkbox.addEventListener("change", () =>{
        checkboxList.forEach((checkbox) => {
            if(checkbox.checked){
                counterActive += 1;
            }
        })
    })

    console.log(counterActive);
})

/*
checkboxList.forEach((checkbox) => {
    checkbox.addEventListener("click", () => {
        console.log(checkbox);
    })
})
*/

countTasks = () =>{
    let checkboxList = document.querySelectorAll(".tasks__checkbox");
        
    const spanNumber = document.querySelector(".tasks__number > span");
        
    spanNumber.innerText = checkboxList.length;
}

const  spanNumber = document.querySelector(".tasks__number > span");
// Agregar event listener a cada checkbox
document.querySelector(".tasks").addEventListener("change", () => {
    var checkboxes = document.querySelectorAll(".tasks__checkbox");
    var inactivos = 0;
    
    console.log("CAMBIO")
    for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].addEventListener("change", () => {
        for (var i = 0; i < checkboxes.length; i++) {
            if (!checkboxes[i].checked) {
              
                inactivos++;
                console.log(inactivos);
            }
          }
      });
    }
    console.log(inactivos)
    console.log(spanNumber.innerText);
    spanNumber.innerText = inactivos;
});
/*
// Función para actualizar el contador
function actualizarContador(checkboxes, inactivos) {
  
  for (var i = 0; i < checkboxes.length; i++) {
    if (!checkboxes[i].checked) {
      
        inactivos++;
    }
  }
}*/
