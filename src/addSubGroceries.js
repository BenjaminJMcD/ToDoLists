import inputToStorage from './inputToStorage';
import addItemGroceries from './addItemGroceries';

export default function addSubGroceries(parentFolder) {

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

    const submitItem = document.createElement("button");
    submitItem.innerText = "Submit";
    newItemDiv.appendChild(submitItem);
    submitItem.addEventListener("click", function () {
        addItemGroceries();
        return inputToStorage(parentFolder);
    })

}