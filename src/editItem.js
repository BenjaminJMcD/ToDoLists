import getLocalStorage from "./getLocalStorage";
import SetLocalStorage from "./setLocalStorage";

export default function editItem (key, value, list) {

    SetLocalStorage(key, value);
    getLocalStorage(list);

}