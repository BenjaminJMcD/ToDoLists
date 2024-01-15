import displayEditForm from "./displayEditForm";
import remove from './remove';
import addSubItem from "./addSubItem";
import addSubGeneral from './addSubGeneral';
import addSubGroceries from "./addSubGroceries";
import addSubXmas from "./addSubXmas";
import removeSubItems from "./removeSubItems";
import subFolderTotal from "./subFolderTotal";
import pageTotal from './pageTotal';
import toggleDone from "./toggleDone";


export default function renderList(array) {

    const listDiv = document.getElementById("listDiv");
    listDiv.innerHTML = "";

    // RENDER TOTAL PRICE FOR PAGE //

    if (array[0]) {
        if (array[0].list == "xmas" || array[0].list == "general") {
            let total = pageTotal(array[0].list);
            const grandTotal = document.createElement("p");
            grandTotal.innerText = `Total $${total}`;
            listDiv.appendChild(grandTotal);
        }
    }

    // RENDER EACH ITEM WITH PROPERTIES TO PAGE //
    
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

        const markAsDone = document.createElement("input");
        markAsDone.setAttribute("id", "doneCheck");
        markAsDone.setAttribute("type", "checkbox");
        markAsDone.setAttribute("name", "done");
        markAsDone.onchange = toggleDone;
        renderItem.appendChild(markAsDone);

        if (array[i].done == true) {
             markAsDone.checked = true;
             renderItem.classList.add("done");
        }

        if (array[i].list === "daily"  && array[i].subFolder === null|| array[i].list == "big" && array[i].subFolder === null) {
            const subfolderBtn = document.createElement("p");
            subfolderBtn.innerText = "+SubList";
            subfolderBtn.classList.add("subfolderBtn");
            renderItem.appendChild(subfolderBtn);
            subfolderBtn.addEventListener("click", function () {
                return addSubItem(array[i].name.replace(/ /g, ""))})
        }
        else if (array[i].list == "general" && array[i].subFolder === null) {
            const subfolderBtn = document.createElement("p");
            subfolderBtn.innerText = "+SubList";
            subfolderBtn.classList.add("subfolderBtn");
            renderItem.appendChild(subfolderBtn);
            subfolderBtn.addEventListener("click", function () {
                return addSubGeneral(array[i].name.replace(/ /g, ""))
            })
            const subTotal = document.createElement("p");
            const totalValue = subFolderTotal(array[i].name.replace(/ /g, ""));
            subTotal.innerText = `Total $${totalValue}`
            renderItem.appendChild(subTotal); 
        }
        else if (array[i].list == "groceries" && array[i].subFolder === null) {
            const subfolderBtn = document.createElement("p");
            subfolderBtn.innerText = "+SubList";
            subfolderBtn.classList.add("subfolderBtn");
            renderItem.appendChild(subfolderBtn);
            subfolderBtn.addEventListener("click", function () {
                return addSubGroceries(array[i].name.replace(/ /g, ""))}) 
        }
        else if (array[i].list == "xmas" && array[i].subFolder === null) {
            const subfolderBtn = document.createElement("p");
            subfolderBtn.innerText = "+SubList";
            subfolderBtn.classList.add("subfolderBtn");
            renderItem.appendChild(subfolderBtn);
            subfolderBtn.addEventListener("click", function () {
                return addSubXmas(array[i].name.replace(/ /g, ""))
            }) 
            const subTotal = document.createElement("p");
            const totalValue = subFolderTotal(array[i].name.replace(/ /g, ""));
            subTotal.innerText = `Total $${totalValue}`
            renderItem.appendChild(subTotal);
            
        }
        
        const editBtn = document.createElement("button");
        editBtn.classList.add("editBtn");
        editBtn.innerText = "Edit";
        renderItem.appendChild(editBtn);
        editBtn.onclick = displayEditForm;

        const removeBtn = document.createElement("button");
        removeBtn.classList.add("removeBtn");
        removeBtn.innerText = "Remove";
        renderItem.appendChild(removeBtn);
        removeBtn.onclick = remove;

        if (array[i].subFolder != null) {
            if (document.getElementById(array[i].subFolder)){  
                const subDiv = document.getElementById(array[i].subFolder);
                subDiv.appendChild(renderItem); 
            }
            else {  
                removeSubItems(array[i]);   
                break;
            }
        }
        else { 
            listDiv.appendChild(renderItem);
            const subfolderDiv = document.createElement("div");
            subfolderDiv.setAttribute("id", array[i].name.replace(/ /g, ""));
            subfolderDiv.classList.add("subList");
            listDiv.appendChild(subfolderDiv);
        }

    }


}