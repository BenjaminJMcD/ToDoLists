import renderList from "./renderList";

export default function specifyList(page, array) {

    const pageArray = [];

    for (let i=0; i<array.length; i++) {
        if (array[i].list == page) {
            pageArray.push(array[i]);
        }
    }
    
    renderList(pageArray);

}