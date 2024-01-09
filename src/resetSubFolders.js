import SetLocalStorage from "./setLocalStorage";

export default function resetSubFolders (oldName, newName) {

    // create local array, change subfolders of local array, resetlocalstorage

    let newSubArray = [];

    for (let i=0; i<localStorage.length; i++) {
        newSubArray.push(JSON.parse(localStorage.getItem(i)));   
    }

    for (let i=0; i<newSubArray.length; i++) {
        if (newSubArray[i].subFolder == oldName) {
            newSubArray[i].subFolder = newName;
        }
        SetLocalStorage(i, newSubArray[i]);
    }


}