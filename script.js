
import { createCard, createElementParagraph } from "./functions.js";

// const columns = document.querySelector(".column");
const main = document.querySelector("#main");
const addCard = document.querySelector(".myInput");


let UserSaveTasks = JSON.parse(localStorage.getItem("savedTasks")); // local storage me se data ko fetch kar rahe hain savedTasks ko object me convert kar rahe hain
// console.log(UserSaveTasks);

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
    const arrayOfTask = UserSaveTasks[myKey]; // local storage me se object ki value ko variable me store krawaya hai 

    for (let i = 0; i < arrayOfTask.length; i++) {
       const p = createElementParagraph(arrayOfTask[i]); // jo paragraph create kiya tha uss paragraph ke ander localStorage ki values ko rakh dia
       card_div.insertBefore(p, card_div.lastElementChild) // uss paragraph ko from se pehla print karwaya hai
    }

    main.insertBefore(card_div, addCard); // card ko button se pehle print krwa dia 
}


addCard.addEventListener("submit", (event) => {  // jb card par click ho 
    event.preventDefault();
    const currentForm = event.target;
    const User_cardTitle = event.target.elements[0].value; // User jo input me title enter karega wo card title hoga 

    if (!User_cardTitle) return ; // agr prompt user empty enter kary tw card nhi hoga
    const yourDiv = createCard(User_cardTitle); // jo div create ki thi usky ander user jo title input karega wo div ka title hoga
    UserSaveTasks[User_cardTitle] = [];
    localStorage.setItem("savedTasks", JSON.stringify(UserSaveTasks));
    
    main.insertBefore(yourDiv, addCard)  // card ko button se pehle print krwa dia 
    currentForm.reset();
})

/* data structure of local storage */
// {
//     "workTodo" : ["task1", "task2"],
//     "progress" : ["task1", "task2"],
// }


/* Remove Column for user Xmark Button use */

main.addEventListener("click", (event) => {

    if (event.target.classList.contains("removeCard")) { // jab tak removeCard ki class nahi milegi jb tak if condition nahi chalegi
        const cardElement = event.target.parentElement.parentElement;
        const cardTitle = cardElement.querySelector(".columnTitle").innerText;
        cardElement.remove();

        // Card Remove From Local Storage
        delete UserSaveTasks[cardTitle]; 
        localStorage.setItem("savedTasks", JSON.stringify(UserSaveTasks));
    }

    if (event.target.classList.contains("remove_Element")) {
        const taskElement = event.target.parentElement;
        const taskText = taskElement.innerText;
        const taskColumnElement = taskElement.parentElement;
        const taskColumnTitle = taskColumnElement.querySelector(".columnTitle").innerText;
        console.log(taskColumnTitle);

        // Remove From DOM 
        taskElement.remove();
        
        // console.log(UserSaveTasks[taskColumnTitle]); // aese hum object ki values ko catch kar sakte hain
        
        // Remove Task From Local Storage 
        UserSaveTasks[taskColumnTitle] = UserSaveTasks[taskColumnTitle].filter((task) => task !== taskText);
        localStorage.setItem("savedTasks", JSON.stringify(UserSaveTasks));

    }

    if (event.target.classList.contains("Edit_Element")) {
        const taskElement = event.target.parentElement;
        const taskText = taskElement.innerText;
        console.log(taskText);
        const taskColumn = taskElement.parentElement;
        console.log(taskColumn);
    }
})


/* remove paragraph Element for user delete button use */



 

//  const editTask = document.querySelector("edit_task");

