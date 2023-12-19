import renderList from "./renderList";

export default function specifyList(page, array) {

    let pageArray = [];

        for (let i=0; i<array.length; i++) {
            if (array[i].list == page) {
                pageArray.push(array[i]);
            }
        }
        
    renderList(pageArray);
    
}