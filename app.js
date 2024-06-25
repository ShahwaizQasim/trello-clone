const columns = document.querySelectorAll(".column");


/* create elements in javascript */
const createElement = (inputValue) => {
    const paragraph_Element = document.createElement("p");
    console.log(paragraph_Element);
    const paragraph_Text = document.createTextNode(inputValue);
    paragraph_Element.appendChild(paragraph_Text);
    paragraph_Element.setAttribute("draggable", "true")

    const trashIcon = document.createElement('i');
    trashIcon.classList.add('fa-solid');
    trashIcon.classList.add("fa-trash");
    trashIcon.classList.add('trash');
    paragraph_Element.appendChild(trashIcon);

    return paragraph_Element;
}


const addTask = (event) => {
    event.preventDefault();
       console.log(event);
       const currentForm = event.target; // current form element
       const inputValue = currentForm.elements[0].value; // value written in form's input 
    //    console.log(`UserInput: ${inputValue}`);
       const parentElement = currentForm.parentElement; // parent of form i.e div.column
        // console.log("parent", parentElement);

    if (inputValue == "") {
      console.log("please input");
    } else{
        const paragraph_Element = createElement(inputValue); // paragraph create element function call
        console.log(paragraph_Element);
 
        parentElement.insertBefore(paragraph_Element, currentForm);  // paragraph added in column
 
        currentForm.reset(); // clearing form
    }
}

for (let i = 0; i < columns.length; i++) {
    const form = columns[i].lastElementChild; // selecting every column's form because form is last element
    // console.log(form);

    form.addEventListener("submit", addTask);
}

const createTask = () => {

}