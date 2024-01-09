import inputToStorage from './inputToStorage';

export default function addSubItem (parentFolder) {

    // parentfolder = name of div = name of previous item without spaces
    // create all inputs for new item
    // add parentfolder name as .subFolder
    // print to parentfolderdiv

    const subList = document.getElementById(parentFolder);
    subList.classList.add("subList");

    const addBtn = document.getElementById("newListItem");
    addBtn.classList.add("hidden");

    const newItemDiv = document.createElement("div");
    newItemDiv.classList.add("newItemDiv");
    subList.appendChild(newItemDiv);

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

    const submitItem = document.createElement("button");
    submitItem.innerText = "Submit";
    newItemDiv.appendChild(submitItem);
    submitItem.addEventListener("click", function () {
        return inputToStorage(parentFolder);
    })


}