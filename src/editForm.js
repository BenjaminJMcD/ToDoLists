import editItem from "./editItem";

export default function editForm (item, parentElement) {

    parentElement.innerHTML = "";

    const key = item.key;
    const list = item.list;
    const name = item.name;

    const priority = item.priority;
    const notes = item.notes;
    const price = item.price;
    const sets = item.sets;
    const reps = item.reps;
    const weight = item.weight;

    console.log(name);
    console.log(priority);
    console.log(key);
    console.log(list);

    // onchange = name = input.value
    
    const nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.value = name;
    nameInput.onchange = (event) => {
        item.name = event.target.value;
    };
    parentElement.appendChild(nameInput);


    if (item.priority) {

        const priorityP = document.createElement("p");
        priorityP.classList.add("editPriority");
        priorityP.innerText = "High Priority";
        parentElement.appendChild(priorityP);

        const highlightBtn = document.createElement("input");
        highlightBtn.setAttribute("type", "checkbox");
        highlightBtn.setAttribute("id", "priority");
        highlightBtn.setAttribute("name", "priority");
        highlightBtn.setAttribute("value", "high");
        parentElement.appendChild(highlightBtn);
    }
    
    
    let submitEdit = document.createElement("button"); 
    submitEdit.innerText = "Edit";
    submitEdit.addEventListener("click", function () {return editItem(key, item, list)})
    parentElement.appendChild(submitEdit);

}