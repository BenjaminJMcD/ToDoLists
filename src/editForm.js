import editItem from "./editItem";
import togglePriority from "./togglePriorityEdit";

export default function editForm (item, parentElement) {

    parentElement.innerHTML = "";

    const key = item.key;
    const list = item.list;
    const name = item.name;


    const notes = item.notes;
    const price = item.price;
    const sets = item.sets;
    const reps = item.reps;
    const weight = item.weight;

    console.log(name);
    console.log(key);
    console.log(list);
    
    const nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.value = name;
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





    let submitEdit = document.createElement("button"); 
    submitEdit.innerText = "Edit";
    submitEdit.addEventListener("click", function () {return editItem(key, item, list)})
    parentElement.appendChild(submitEdit);

}