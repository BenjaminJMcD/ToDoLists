import specifyList from "./specifyList";

export default function getLocalStorage(page) {

    let storageArray = [];

    if (localStorage.length !== 0) {
        for (let i=0; i<localStorage.length; i++) {
            storageArray.push(JSON.parse(localStorage.getItem(i)));
        }
    }

    specifyList(page, storageArray);

};