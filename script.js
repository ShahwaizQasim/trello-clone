
import { createCard, createElementParagraph } from "./functions.js";

// const columns = document.querySelector(".column");
const main = document.querySelector("#main");
const addCardBtn = document.querySelector("#addCard");



let UserSaveTasks = JSON.parse(localStorage.getItem("savedTasks")); // local storage me se data ko fetch kar rahe hain savedTasks ko object me convert kar rahe hain
// console.log(savedTasks);

if (!UserSaveTasks) {  
    UserSaveTasks = {}; // agr local storage me kuch bi store na ho tw empty object ko set kar do 
}


// savedtask pehly se local storage me save hai just column me display karwaya hai 
// for (let i = 0; i < savedTasks.length; i++) {
//     const p = createElement(savedTasks[i]);
//     // console.log(savedTasks[i]);
//     // console.log(p);
//     columns[0].insertBefore(p, columns[0].lastElementChild);

// }


// for (let i = 0; i < columns.length; i++) {
//     const form = columns[i].lastElementChild; // selecting every column's form because form is last element
//     form.addEventListener("submit", addTask);
// }





/* page referesh karny par value apni jaga par rahengi */
for (const myKey in UserSaveTasks) { // local storage se data ko display krwany ky liye forin loop ka use kiya

    const card_div = createCard(myKey); // jo div create ki thi usko ak variable me store krwaya hai
    const arrayOfTask = UserSaveTasks[myKey]; // local storage me se object ki value ko variable me store kawaya hai 

    for (let i = 0; i < arrayOfTask.length; i++) {
       const p = createElementParagraph(arrayOfTask[i]); // jo paragraph create kiya tha uss paragraph ke ander object ki values ko rakh dia
       card_div.insertBefore(p, card_div.lastElementChild) // uss paragraph ko from se pehla print karwaya hai
    }

    main.insertBefore(card_div, addCardBtn); // card ko button se pehle print krwa dia 
}

addCardBtn.addEventListener("click", () => {  // jb card par click ho  
    const cardTitle = prompt("Enter Your Card Name"); // user card title input karega
    if (!cardTitle) return; // agr prompt user empty enter kary tw card nhi hoga
    const yourDiv = createCard(cardTitle); // jo div create ki thi usky ander user jo title input karega wo div ka title hoga
    
    main.insertBefore(yourDiv, addCardBtn)  // card ko button se pehle print krwa dia 
})

/* data structure of local storage */
// {
//     "workTodo" : ["task1", "task2"],
//     "progress" : ["task1", "task2"],
// }


/* Remove Column for user Xmark Button use */
const RemoveCard = document.querySelectorAll(".removeCard");
RemoveCard.forEach((cardRemove) => {
    cardRemove.addEventListener("click", (event) => {
          event.target.parentElement.parentElement.remove();
        // let storedObjects = JSON.parse(localStorage.getItem("savedTasks"));
        // delete storedObjects.cardRemove;
        // let updateObject = localStorage.setItem("savedTasks", JSON.stringify(storedObjects))
    })
})


/* remove paragraph Element for user delete button use */
const removeTask = document.querySelectorAll(".remove_Element");
removeTask.forEach((i) => {
    i.addEventListener("click", (event) => {
       event.target.parentElement.remove();
        // let storedObjects = JSON.parse(localStorage.getItem("savedTasks"));
        // console.log(storedObjects);
        // delete storedObjects.i;
        // let updateObject = localStorage.setItem("savedTasks", JSON.stringify(storedObjects))
        // console.log(updateObject);
    })
 })

 

//  const editTask = document.querySelector("edit_task");






// const createInput = () => {
//     // console.log(event);
//     const form = document.createElement("form");
//     const input2 = document.createElement("input");
//     input2.setAttribute("type", "text");
//     input2.setAttribute("placeholder","Enter Your Card Name");
//     input2.setAttribute("class", "addTask");
//     form.appendChild(input2);

//     return form;
// }
// console.log(createInput());