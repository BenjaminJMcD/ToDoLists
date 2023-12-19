import Item from './item';
import SetLocalStorage from "./setLocalStorage";
import getLocalStorage from './getLocalStorage';

export default function inputToStorage() {

    const newItem = new Item();

    const page = document.getElementById("page");
    const list = page.getAttribute("list");
    
    const getName = document.getElementById("name");
    const name = getName.value;

    newItem.key = localStorage.length;
    newItem.list = list;
    newItem.name = name;
    getName.value = "";

    const getPriority = document.getElementById("priority");
        if (getPriority) {
            const checked = getPriority.checked;
            newItem.priority = checked;
            getPriority.checked = false;
        }
        else {
            newItem.priority = null;
        }

    const getNotes = document.getElementById("notes");
        if (getNotes) {
        const notes = getNotes.value;
        newItem.notes = notes;
        getNotes.value = "";
        }
        else {
            newItem.notes = null;
        }

    const getPrice = document.getElementById("price");
        if (getPrice) {
            const price = getPrice.value;
            newItem.price = price;
            getPrice.value = "";
        }
        else {
            newItem.price = null;
        }

    const getSets = document.getElementById("sets");
        if (getSets) {
            const sets = getSets.value;
            newItem.sets = sets;
            getSets.value = "";
        }
        else {
            newItem.sets = null;
        }

    const getReps = document.getElementById("reps");
        if (getReps) {
            const reps = getReps.value;
            newItem.reps = reps;
            getReps.value = "";
        }
        else {
            newItem.reps = null;
        }

    const getWeight = document.getElementById("weight");
        if (getWeight) {
            const weight = getWeight.value;
            newItem.weight = weight;
            getWeight.value = "";
        }
        else {
            newItem.weight = null;
        }

    const getSubFolder = document.getElementById("subFolder");
        if (getSubFolder) {
            const subFolder = getSubFolder.value;
            newItem.subFolder = subFolder;
        }
        else {
            newItem.subFolder = null;
        }

    SetLocalStorage(localStorage.length, newItem);
    getLocalStorage(list);

}