const column = document.querySelectorAll(".column");

const createElement = (inputValue) => {

    const paragraph_Element = document.createElement("p");
    // console.log( paragraph_Element);
    const paragraph_Text = document.createTextNode(inputValue);
    
    paragraph_Element.setAttribute("draggable", "true");
    paragraph_Element.appendChild(paragraph_Text)

    // console.log(parentElement);

    return paragraph_Element;
}


const addTask = (event) => {
    
    event.preventDefault();
    console.log(event);
    const currentForm = event.target;

    const inputValue = currentForm.elements[0].value;
    console.log(`UserName: ${inputValue}`);

    const parentElement = currentForm.parentElement;
    
    const paragraph_Element = createElement(inputValue); 
    console.log(paragraph_Element);
    parentElement.insertBefore(paragraph_Element, currentForm);
    console.log(parentElement);
    
    currentForm.reset();
  
}

for (let i = 0; i < column.length; i++) {
    const form = column[i].lastElementChild;
    // console.log(form);

    form.addEventListener("submit", addTask)
}