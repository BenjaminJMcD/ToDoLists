import SetLocalStorage from "./setLocalStorage";
import Item from './item';

export default function inputToStorage() {

    const page = document.getElementById("page");
    const list = page.getAttribute("list");

    const getName = document.getElementById("name");
    const name = getName.value;

    const getPriority = document.getElementById("priority");
    let checked = getPriority.checked;

    // DELETE THIS - ADD AFTER GET STORAGE
    const renderName = document.createElement("p");
    renderName.classList.add("renderName");
    renderName.innerText = `- ${name}`;
    page.appendChild(renderName);

    const newItem = new Item(list, name, checked);

    SetLocalStorage(localStorage.length, newItem);

    if (checked) {
        renderName.classList.add("listItemHighPriority");
    }

}