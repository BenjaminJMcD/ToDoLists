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

    const priorityCheck = document.createElement("button");
    priorityCheck.innerText = "High Priority";
    newItemDiv.appendChild(priorityCheck);
    // onclick to turn item red and add to front of assay

    const submitDaily = document.createElement("button");
    submitDaily.innerText = "Submit";
    newItemDiv.appendChild(submitDaily);
    // onclick to add to assay and render assay
}