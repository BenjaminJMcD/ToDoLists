import renderList from "./renderList";
import resetLocalStorage from "./resetLocalStorage";

export default function specifyList(page, array) {

    let pageArray = [];

        for (let i=0; i<array.length; i++) {
            if (array[i].list == page) {
                pageArray.push(array[i]);
            }
        }
        
    renderList(pageArray);
    
}