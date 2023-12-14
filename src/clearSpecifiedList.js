import resetLocalStorage from "./resetLocalStorage";
import getLocalStorage from './getLocalStorage';

export default function clearSpecifiedList() {

    const page = document.getElementById("page");
    const list = page.getAttribute("list");

    let storageArray = [];

    if (localStorage.length !== 0) {
        for (let i=0; i<localStorage.length; i++) {
            storageArray.push(JSON.parse(localStorage.getItem(i)))
        }
    }

    let removeKeys = [];
    let resetKeys = [];

    for (let i=0; i<storageArray.length; i++) {
        if (storageArray[i].list == list) {
            removeKeys.push(i);
        }
        else {
            resetKeys.push(JSON.parse(localStorage.getItem(i)));
        }
    }
    
    for (let i=0; i<removeKeys.length; i++) {
        localStorage.removeItem(i);
    }

    localStorage.clear();
    resetLocalStorage(resetKeys);
    getLocalStorage(list);

}