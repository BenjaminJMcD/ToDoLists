import resetLocalStorage from "./resetLocalStorage";
import getLocalStorage from "./getLocalStorage";

export default function removeSubItems (item) {

    // get list/page to reset, get subfolder name to be removed

    const list = item.list;
    const subFolder = item.subFolder;

    // create local array to be edited

    const storageArray = [];

    for (let i=0; i<localStorage.length; i++) {
        storageArray.push(JSON.parse(localStorage.getItem(i)));
    }

    // find and remove all subfolder items and create new array of leftover items

    const newArray = [];

    for (let i=0; i<storageArray.length; i++) {
        if (storageArray[i].subFolder == subFolder) {
            localStorage.removeItem(storageArray[i].key);
        }
        else {
            newArray.push(storageArray[i]);
        }
    }

    // clear local storage

    localStorage.clear();

    // reset keys of leftover items and push to localStorage

    resetLocalStorage(newArray);

    // reset page

    getLocalStorage(list);

}