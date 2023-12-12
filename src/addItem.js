import renderItems from './renderItems';

export default function AddItem() {

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
    newItemDiv.appendChild(priorityCheck);
    // onclick to turn item red and add to front of assay

    const submitDaily = document.createElement("button");
    submitDaily.innerText = "Submit";
    newItemDiv.appendChild(submitDaily);
    submitDaily.onclick = renderItems;

}