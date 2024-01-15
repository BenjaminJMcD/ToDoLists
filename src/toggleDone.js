import findItem from "./findItem";
import editItem from "./editItem";

export default function toggleDone(event) {

    const item = event.target;

    const parentElement = item.parentNode;
    
    const itemName = parentElement.firstChild.innerText.slice(2);

    const itemEdit = findItem(itemName);

    if (item.checked) {
        item.parentElement.classList.add("done");
        itemEdit.done = true;
    }
    else if (!item.checked) {
        item.parentElement.classList.remove("done");
        itemEdit.done = false;
    }

    editItem(itemEdit.key, itemEdit, itemEdit.list);

}