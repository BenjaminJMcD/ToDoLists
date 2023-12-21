import findItem from './findItem';
import resetLocalStorage from './resetLocalStorage';
import getLocalStorage from './getLocalStorage';

export default function remove (event) {

    const parentElement = event.target.parentNode;
    
    let name = parentElement.firstChild.innerText.slice(2);

    const itemRemove = findItem(name);

    const keyRemove = itemRemove.key;
    const list = itemRemove.list;

    const storageArray = [];

    for (let i=0; i<localStorage.length; i++) {
        storageArray.push(JSON.parse(localStorage.getItem(i)));
    }

    localStorage.removeItem(keyRemove);

    let updatedStorage = [];
    let firstPortion = [];
    let lastPortion = [];

    firstPortion = storageArray.slice(0, keyRemove);
    lastPortion = storageArray.slice(keyRemove+1)
    updatedStorage = firstPortion.concat(lastPortion);

    resetLocalStorage(updatedStorage)

    // FINAL ITEM IN LOCAL STORAGE NOT BEING REMOVED
    // WHEN RESETTING LOCAL STORAGE
    
    if (keyRemove != localStorage.length) {
        localStorage.removeItem(localStorage.length-1);
    }

    getLocalStorage(list);

}