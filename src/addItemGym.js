import inputToStorage from './inputToStorage';

export default function addItemGym () {

    const page = document.getElementById("page");

    const addBtn = document.getElementById("newListItem");
    addBtn.classList.add("hidden");

    const newItemDiv = document.createElement("div");
    newItemDiv.classList.add("newItemDiv");
    page.appendChild(newItemDiv);

    const newItemName = document.createElement("input");
    newItemName.setAttribute("type", "text");
    newItemName.setAttribute("placeholder", "Muscle Group");
    newItemName.setAttribute("id", "name");
    newItemDiv.appendChild(newItemName);

    const sets = document.createElement("p");
    sets.innerText = "Sets: ";
    newItemDiv.appendChild(sets);

    const newItemSets = document.createElement("input");
    newItemSets.setAttribute("type", "number");
    newItemSets.setAttribute("id", "sets");
    newItemDiv.appendChild(newItemSets);

    const reps = document.createElement("p");
    reps.innerText = "Reps: "
    newItemDiv.appendChild(reps);

    const newItemReps = document.createElement("input");
    newItemReps.setAttribute("type", "number");
    newItemReps.setAttribute("id", "reps");
    newItemDiv.appendChild(newItemReps);

    const weight = document.createElement("p");
    weight.innerText = "Weight: ";
    newItemDiv.appendChild(weight);

    const newItemWeight = document.createElement("input");
    newItemWeight.setAttribute("type", "number");
    newItemWeight.setAttribute("id", "weight");
    newItemDiv.appendChild(newItemWeight);

    const lbs = document.createElement("p");
    lbs.innerText = "lbs";
    newItemDiv.appendChild(lbs);

    const submitItem = document.createElement("button");
    submitItem.innerText = "Submit";
    newItemDiv.appendChild(submitItem);
    submitItem.addEventListener("click", function () {
        return inputToStorage(null);
    })

}