import Item from './item';
import SetLocalStorage from "./setLocalStorage";
import getLocalStorage from './getLocalStorage';

export default function inputToStorage() {

    const page = document.getElementById("page");
    const list = page.getAttribute("list");

    const getName = document.getElementById("name");
    const name = getName.value;

    const getPriority = document.getElementById("priority");
    let checked = getPriority.checked;

    const newItem = new Item(list, name, checked);

    SetLocalStorage(localStorage.length, newItem);
    getLocalStorage(list);

}