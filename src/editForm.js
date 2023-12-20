import editItem from "./editItem";
import togglePriority from "./togglePriorityEdit";

export default function editForm (item, parentElement) {

    parentElement.innerHTML = "";

    const key = item.key;
    const list = item.list;

    const weight = item.weight;

    console.log(key);
    console.log(list);
    
    const nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.value = item.name;
    nameInput.onchange = (event) => {
        item.name = event.target.value;
    };
    parentElement.appendChild(nameInput);


    if (item.priority != null) {

        const priorityP = document.createElement("p");
        priorityP.classList.add("editPriority");
        priorityP.innerText = "High Priority";
        parentElement.appendChild(priorityP);

        const highlightBtn = document.createElement("input");
        highlightBtn.setAttribute("type", "checkbox");
        highlightBtn.setAttribute("id", "priorityEdit");
        highlightBtn.setAttribute("name", "priority");
        highlightBtn.setAttribute("value", "high");
        if (item.priority) {
            highlightBtn.checked = true;
        }
        highlightBtn.onclick = togglePriority;
        parentElement.appendChild(highlightBtn);
    }

    parentElement.onchange = function () {
        if (parentElement.classList.contains("listItemHighPriority")) {
            item.priority = true;
        }
        else {
            item.priority = false;
        }
    }

    if (item.notes != null) {
        const notesInput = document.createElement("input");
        notesInput.setAttribute("type", "text");
        notesInput.value = item.notes;
        notesInput.onchange = (event) => {
            item.notes = event.target.value;
        };
        parentElement.appendChild(notesInput);
    }

    if (item.price != null) {
        const priceInput = document.createElement("input");
        priceInput.setAttribute("type", "number");
        priceInput.value = item.price;
        priceInput.onchange = (event) => {
            item.price = event.target.value;
        }
        parentElement.appendChild(priceInput);
    }

    if (item.sets != null) {
        const setsInput = document.createElement("input");
        setsInput.setAttribute("type", "number");
        setsInput.value = item.sets;
        setsInput.onchange = (event) => {
            item.sets = event.target.value;
        };
        parentElement.appendChild(setsInput);
    }

    if (item.reps != null) {
        const repsInput = document.createElement("input");
        repsInput.setAttribute("type", "number");
        repsInput.value = item.sets;
        repsInput.onchange = (event) => {
            item.reps = event.target.value;
        };
        parentElement.appendChild(repsInput);
    }

    if (item.weight != null) {
        const weightInput = document.createElement("input");
        weightInput.setAttribute("type", "number");
        weightInput.value = item.weight;
        weightInput.onchange = (event) => {
            item.weight = event.target.value;
        };
        parentElement.appendChild(weightInput);
    }

    let submitEdit = document.createElement("button"); 
    submitEdit.innerText = "Edit";
    submitEdit.addEventListener("click", function () {return editItem(key, item, list)})
    parentElement.appendChild(submitEdit);

}