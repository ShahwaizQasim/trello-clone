// const columns = document.querySelector(".column");
const parent_main = document.querySelector("#main");
const addCardBtn = document.querySelector("#addCard");

/* create elements in javascript */
const createElementParagraph = (inputValue) => {
    const paragraph_Element = document.createElement("p");
    const paragraph_Text = document.createTextNode(inputValue);
    paragraph_Element.appendChild(paragraph_Text);
    paragraph_Element.setAttribute("draggable", "true")

    const trashIcon = document.createElement('i');
    trashIcon.classList.add('fa-solid');
    trashIcon.classList.add("fa-trash");
    trashIcon.classList.add('remove_Element');
    paragraph_Element.appendChild(trashIcon);

    return paragraph_Element;
}

// savedtask pehly se local storage me save hai just column me display karwaya hai 
// for (let i = 0; i < savedTasks.length; i++) {
//     const p = createElement(savedTasks[i]);
//     // console.log(savedTasks[i]);
//     // console.log(p);
//     columns[0].insertBefore(p, columns[0].lastElementChild);

// }

const addTask = (event) => {
    event.preventDefault();

    //    console.log(event);
       const currentForm = event.target; // current form element
       const myInput = currentForm.elements[0]; // input written
       let inputValue = currentForm.elements[0].value; // value written in form's input 
       const parentElement = currentForm.parentElement; // parent of form i.e div.column

    if (!inputValue) {
        myInput.className = "addTask1"; // agr user input empty enter kary tw input ka border red ho jaega
    }else{
        myInput.className = "addTask"; // agr user input empty enter kary tw input ka border red ho jaega 
        const paragraph_Element = createElementParagraph(inputValue); // paragraph create element function call

        parentElement.insertBefore(paragraph_Element, currentForm);  // paragraph added in column before the form

        currentForm.reset(); // clearing form
        
        const h5Value = parentElement.children[0].innerText; // card ky title ka text is variable me store kiya hai 
        
        if (!Array.isArray(UserSaveTasks[h5Value])) {
            UserSaveTasks[h5Value] = []; // agar array nahi hai tw empty array set krwa do because undefined me .push nho ho sakta error ayega 
        }
        
        UserSaveTasks[h5Value].push(inputValue);
        localStorage.setItem("savedTasks", JSON.stringify(UserSaveTasks)); // local storage me data ko save kara hai
    }
}

// for (let i = 0; i < columns.length; i++) {
//     const form = columns[i].lastElementChild; // selecting every column's form because form is last element
//     form.addEventListener("submit", addTask);
// }

const createCard = (cardsTitle) => {

    // <div class="column">
    //     <h5>Work Todo <i class="fa-solid fa-xmark"></i></h5>
    //      <p>task 1</p>
    //         <p>task 2 <i class="fa-solid fa-trash"></i></p>
    //         <p>task 3</p> 
    //     <form>
    //       <input type="text" placeholder="add task" class="add_task" />
    //     </form>
    //   </div>

    const myDiv = document.createElement("div")
    myDiv.setAttribute("class", "column");
    // console.log(myDiv);

    const h6 = document.createElement("h6");
    const h6Text = document.createTextNode(cardsTitle);

    const XMarkIcon = document.createElement("i");
    XMarkIcon.classList.add("fa-solid");
    XMarkIcon.classList.add("fa-xmark");
    XMarkIcon.classList.add("removeCard")

    const myForm = document.createElement("form");

    const myInput = document.createElement("input");
    myInput.setAttribute("type","text");
    myInput.setAttribute("placeholder","add task");
    myInput.setAttribute("class","addTask");
    
    // myDiv.innerHTML = ``

    h6.appendChild(h6Text);
    h6.appendChild(XMarkIcon);
    myDiv.appendChild(h6);
    myForm.appendChild(myInput);
    myDiv.appendChild(myForm);

    myForm.addEventListener("submit", addTask)

    return myDiv;
    
}
// createCard(); 


let UserSaveTasks = JSON.parse(localStorage.getItem("savedTasks")); // local storage me se data ko fetch kar rahe hain savedTasks ko object me convert kar rahe hain
// console.log(savedTasks);

if (!UserSaveTasks) {  
    UserSaveTasks = {}; // agr local storage me kuch bi store na ho tw empty object ko set kar do 
}

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
    const yourDiv = createCard(cardTitle); // jo div create ki thi usky ander user jo title input karega wo div ka title hoga
    
    main.insertBefore(yourDiv, addCardBtn)  // card ko button se pehle print krwa dia 
})


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