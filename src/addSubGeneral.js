import inputToStorage from "./inputToStorage";
import addItemGeneral from "./addItemGeneral";

export default function addSubGeneral (parentFolder) {
    // ONLY ONE INPUT //

    if (document.getElementById("newSubItemDiv")){
        document.getElementById("newSubItemDiv").remove();
    }

    if (document.getElementById("newItemDiv")){
        document.getElementById("newItemDiv").remove();
    }

    const subList = document.getElementById(parentFolder);

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
    submitItem.addEventListener("click", function () {
        addItemGeneral();
        return inputToStorage(parentFolder)
    })


}