import inputToStorage from './inputToStorage';
import addItemXmas from './addItemXmas';

export default function addSubXmas (parentFolder) {

    // DONT ALLOW DUPLICATES //

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
        addItemXmas();
        return inputToStorage(parentFolder);
    })

}