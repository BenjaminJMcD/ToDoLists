import inputToStorage from './inputToStorage';

export default function addItemGroceries () {

    const page = document.getElementById("page");

    const newItemDiv = document.createElement("div");
    newItemDiv.setAttribute("id", "newItemDiv");
    page.appendChild(newItemDiv);

    const newItemName = document.createElement("input");
    newItemName.setAttribute("type", "text");
    newItemName.setAttribute("placeholder", "List Item");
    newItemName.setAttribute("id", "name");
    newItemDiv.appendChild(newItemName);

    const submitItem = document.createElement("button");
    submitItem.innerText = "Submit";
    newItemDiv.appendChild(submitItem);
    submitItem.addEventListener("click", function () {
        return inputToStorage(null);
    })

}