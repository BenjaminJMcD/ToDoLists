import inputToStorage from './inputToStorage';
import addItem from './addItem';

export default function addSubItem (parentFolder) {

    // DONT ALLOW DUPLICATES //

    if (document.getElementById("newSubItemDiv")){
        document.getElementById("newSubItemDiv").remove();
    }

    document.getElementById("newItemDiv").remove();

    const subList = document.getElementById(parentFolder);
    subList.classList.add("subList");

    const newItemDiv = document.createElement("div");
    newItemDiv.setAttribute("id", "newSubItemDiv");
    subList.appendChild(newItemDiv);

    const newItemName = document.createElement("input");
    newItemName.setAttribute("type", "text");
    newItemName.setAttribute("placeholder", "List Item");
    newItemName.setAttribute("id", "subItem");
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

    const submitItem = document.createElement("button");
    submitItem.innerText = "Submit";
    newItemDiv.appendChild(submitItem);
    submitItem.addEventListener("click", function () {
        addItem();
        return inputToStorage(parentFolder);
    })


}