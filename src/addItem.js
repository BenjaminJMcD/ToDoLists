import inputToStorage from './inputToStorage';

export default function addItem() {

    const page = document.getElementById("page");

    const addBtn = document.getElementById("newListItem");
    addBtn.classList.add("hidden");

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
    // onclick to turn item red and add to front of assay

    const submitItem = document.createElement("button");
    submitItem.innerText = "Submit";
    newItemDiv.appendChild(submitItem);
    submitItem.addEventListener("click", function () {
        return inputToStorage(null);
    })

}