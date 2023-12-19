import displayEditForm from "./displayEditForm";

export default function renderList(array) {

    const listDiv = document.getElementById("listDiv");
    listDiv.innerHTML = "";
    
    for (let i=0; i<array.length; i++) {

        const renderItem = document.createElement("div");
        renderItem.classList.add("renderItem");
        
        const renderName = document.createElement("p");
        renderName.classList.add("renderName");
        renderName.innerText = `- ${array[i].name}`;
        renderItem.appendChild(renderName);
        
        if (array[i].priority == true) {
            renderItem.classList.add("listItemHighPriority");
        }

        if (array[i].notes) {
            const renderNotes = document.createElement("p");
            renderNotes.classList.add("renderNotes");
            renderNotes.innerText = `${array[i].notes}`;
            renderItem.appendChild(renderNotes)
        }

        if (array[i].price) {
            const renderPrice = document.createElement("p");
            renderPrice.classList.add("renderPrice");
            renderPrice.innerText = `$${array[i].price}`;
            renderItem.appendChild(renderPrice);
        }

        if (array[i].sets) {
            const renderSets = document.createElement("p");
            renderSets.classList.add("renderSets");
            renderSets.innerText = `Sets: ${array[i].sets}`;
            renderItem.appendChild(renderSets);
        }

        if (array[i].reps) {
            const renderReps = document.createElement("p");
            renderReps.classList.add("renderReps");
            renderReps.innerText = `Reps: ${array[i].reps}`;
            renderItem.appendChild(renderReps);
        }

        if (array[i].weight) {
            const renderWeight = document.createElement("p");
            renderWeight.classList.add("renderWeight");
            renderWeight.innerText = `${array[i].weight} lbs`;
            renderItem.appendChild(renderWeight);
        }

        const editBtn = document.createElement("button");
        editBtn.classList.add("editBtn");
        editBtn.innerText = "Edit";
        renderItem.appendChild(editBtn);
        renderItem.onclick = displayEditForm;

        const removeBtn = document.createElement("button");
        removeBtn.classList.add("removeBtn");
        removeBtn.innerText = "Remove";
        renderItem.appendChild(removeBtn);

        listDiv.appendChild(renderItem);

    }


}