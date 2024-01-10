import inputToStorage from './inputToStorage';

export default function listTitle() {

    const page = document.getElementById("page");

    const addBtn = document.getElementById("newListItem");
    addBtn.classList.add("hidden");

    const titleBtn = document.getElementById("listTitle");
    titleBtn.classList.add("hidden");

    const newItemDiv = document.createElement("div");
    newItemDiv.classList.add("newItemDiv");
    page.appendChild(newItemDiv);

    const newItemName = document.createElement("input");
    newItemName.setAttribute("type", "text");
    newItemName.setAttribute("placeholder", "List Title");
    newItemName.setAttribute("id", "name");
    newItemDiv.appendChild(newItemName);

    const submitItem = document.createElement("button");
    submitItem.innerText = "Submit";
    newItemDiv.appendChild(submitItem);
    submitItem.addEventListener("click", function () {
        return inputToStorage(null);
    })

}