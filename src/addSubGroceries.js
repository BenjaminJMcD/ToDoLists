import inputToStorage from './inputToStorage';

export default function addSubGroceries(parentFolder) {

    const subList = document.getElementById(parentFolder);
    subList.classList.add("subList");

    const newItemDiv = document.createElement("div");
    newItemDiv.classList.add("newItemDiv");
    subList.appendChild(newItemDiv);

    const newItemName = document.createElement("input");
    newItemName.setAttribute("type", "text");
    newItemName.setAttribute("placeholder", "List Item");
    newItemName.setAttribute("id", "name");
    newItemDiv.appendChild(newItemName);

    const submitItem = document.createElement("button");
    submitItem.innerText = "Submit";
    newItemDiv.appendChild(submitItem);
    submitItem.addEventListener("click", function () {
        return inputToStorage(parentFolder);
    })

}