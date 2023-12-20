import Item from "./item";

export default function findItem (name) {

    const localArray = [];

    for (let i=0; i<localStorage.length; i++) {
        localArray.push(JSON.parse(localStorage.getItem(i)));
    }

    let item = new Item;

    for (let i=0; i<localArray.length; i++) {
        if (localArray[i].name == name) {
            item = localArray[i];
        }
    }

    return item;

}