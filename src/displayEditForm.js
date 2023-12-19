export default function displayEditForm (event) {
    
    const parentElement = event.target.parentNode;

    console.log(parentElement);

    
    // GET VALUES
    
    let firstChild = parentElement.firstChild.innerText.slice(2);
    
    console.log(firstChild);

    if (parentElement.getAttribute("class", "listItemHighPriority")) {
        console.log("Needs to be highlighted")
    }

    // RENDER INPUTS TO PARENTELEMENT WITH ORIGINAL VALUES
    
    // GET KEY - SET ITEM KEY

    parentElement.innerHTML = "";
    

    
}