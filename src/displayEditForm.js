import findItem from "./findItem";
import editForm from './editForm';

export default function displayEditForm (event) {
    
    const parentElement = event.target.parentNode;
    
    let name = parentElement.firstChild.innerText.slice(2);

    const itemEdit = findItem(name);

    editForm(itemEdit, parentElement);

}