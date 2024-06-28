const columns = document.querySelectorAll(".column");
const input = document.querySelector("#add_task");


/* create elements in javascript */
const createElementParagraph = (inputValue) => {
    const paragraph_Element = document.createElement("p");
    const paragraph_Text = document.createTextNode(inputValue);
    paragraph_Element.appendChild(paragraph_Text);
    paragraph_Element.setAttribute("draggable", "true")

    const trashIcon = document.createElement('i');
    trashIcon.classList.add('fa-solid');
    trashIcon.classList.add("fa-trash");
    // trashIcon.classList.add('trash');
    paragraph_Element.appendChild(trashIcon);

    return paragraph_Element;
}

let savedTasks = JSON.parse(localStorage.getItem("savedTasks")); // local storage me se fetch kar rahe hain savedTasks ko and object me convert kar rahe hain
// console.log(savedTasks);

if (!savedTasks) {
    savedTasks = {};
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

       console.log(event);
       const currentForm = event.target; // current form element
       let inputValue = currentForm.elements[0].value; // value written in form's input 
       const parentElement = currentForm.parentElement; // parent of form i.e div.column

    if (!inputValue) {
        input.style.border = '2px solid red'; // agr user input empty enter kary tw input ka border red ho jaega 
        console.log("please input");
    }else{
        input.style.border = ''; // agr user input empty enter kary tw input ka border red ho jaega 
        const paragraph_Element = createElementParagraph(inputValue); // paragraph create element function call
        parentElement.insertBefore(paragraph_Element, currentForm);  // paragraph added in column before the form

        currentForm.reset(); // clearing form

        // savedTasks.push(inputValue); //  local storage me user ki value store krwaya hai
        localStorage.setItem("savedTasks", JSON.stringify(savedTasks)); //

        const h3Value = parentElement.children[0].innerText;
        console.log(h3Value);
    }


    // if (!Array.isArray(savedTasks[h3])) {
    //     savedTasks[h3] = [];
    // }
    // savedTasks[h3].push(inputValue);

}

for (let i = 0; i < columns.length; i++) {
    const form = columns[i].lastElementChild; // selecting every column's form because form is last element
    form.addEventListener("submit", addTask);
}

// const createTask = () => {

// }


// const userValue = prompt("Enter your five numbers");
// // console.log(!Number(userValue));
// // console.log(!Number(userValue));
// if (!Number(userValue)) {
//     alert("String Not Allow")
// }