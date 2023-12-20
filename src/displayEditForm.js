import findItem from "./findItem";
import editForm from './editForm';

export default function displayEditForm (event) {
    
    const parentElement = event.target.parentNode;

    console.log(parentElement);

    
    let name = parentElement.firstChild.innerText.slice(2);
    
    console.log(name);

    const itemEdit = findItem(name);

    console.log(itemEdit);
    
    // CREATE ARRAY OF LOCALSTORAGE AS ITEMS
    // GET SPECIFIC ITEM
    // VALUE = ITEM.WHATEVER
    // KEY = ITEM.KEY
    // SET ITEM W ITEM.KEY
    // RELOAD PAGE W LIST


    // RENDER INPUTS TO PARENTELEMENT WITH ORIGINAL VALUES

    editForm(itemEdit, parentElement);
    


}