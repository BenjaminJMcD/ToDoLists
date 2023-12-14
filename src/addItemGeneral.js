import inputToStorage from './inputToStorage';

export default function addItemGeneral() {

    const page = document.getElementById("page");

    const newItemDiv = document.createElement("div");
    newItemDiv.classList.add("newItemDiv");
    page.appendChild(newItemDiv);

    const newItemName = document.createElement("input");
    newItemName.setAttribute("type", "text");
    newItemName.setAttribute("placeholder", "List Item");
    newItemName.setAttribute("id", "name");
    newItemDiv.appendChild(newItemName);

    const highPriority = document.createElement("p");
    highPriority.innerText = "High Priority";
    newItemDiv.appendChild(highPriority);

    const priorityCheck = document.createElement("input");
    priorityCheck.setAttribute("type", "checkbox");
    priorityCheck.setAttribute("id", "priority");
    priorityCheck.setAttribute("name", "priority");
    priorityCheck.setAttribute("value", "high");
    newItemDiv.appendChild(priorityCheck);

    const newItemNotes = document.createElement("input");
    newItemNotes.setAttribute("type", "text");
    newItemNotes.setAttribute("placeholder", "Notes");
    newItemNotes.setAttribute("id", "notes");
    newItemDiv.appendChild(newItemNotes);

    const dollarSign = document.createElement("p");
    dollarSign.innerText = "$";
    newItemDiv.appendChild(dollarSign);

    const newItemPrice = document.createElement("input");
    newItemPrice.setAttribute("type", "number");
    newItemPrice.setAttribute("id", "price");
    newItemDiv.appendChild(newItemPrice);

    const submitItem = document.createElement("button");
    submitItem.innerText = "Submit";
    newItemDiv.appendChild(submitItem);
    submitItem.onclick = inputToStorage;

}