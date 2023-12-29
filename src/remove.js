import findItem from './findItem';
import resetLocalStorage from './resetLocalStorage';
import getLocalStorage from './getLocalStorage';

export default function remove (event) {

    // GET ITEM NAME TO FIND FULL ITEM IN LOCAL STORAGE

    const parentElement = event.target.parentNode;
    
    let name = parentElement.firstChild.innerText.slice(2);

    // ACCESS FULL ITEM IN LOCALSTORAGE TO GET LIST AND KEY

    const itemRemove = findItem(name);

    // GET ITEM KEY AND LIST

    const keyRemove = itemRemove.key;
    const list = itemRemove.list;

    // CREATE LOCAL STORAGE ARRAY TO EDIT AND RESET

    const storageArray = [];

    for (let i=0; i<localStorage.length; i++) {
        storageArray.push(JSON.parse(localStorage.getItem(i)));
    }

    // REMOVE ITEM FROM LOCAL STORAGE

    localStorage.removeItem(keyRemove);

    // CREATE UPDATED ARRAY WITHOUT ITEM TO ASSIGN NEW KEYS

    let updatedStorage = [];
    let firstPortion = [];
    let lastPortion = [];

    firstPortion = storageArray.slice(0, keyRemove);
    lastPortion = storageArray.slice(keyRemove+1)
    updatedStorage = firstPortion.concat(lastPortion);

    resetLocalStorage(updatedStorage);

    // FINAL ITEM IN LOCAL STORAGE NOT BEING REMOVED
    // WHEN RESETTING LOCAL STORAGE
    
    if (keyRemove != localStorage.length) {
        localStorage.removeItem(localStorage.length-1);
    }

    // RENDER UPDATED LIST TO PAGE

    getLocalStorage(list);

}