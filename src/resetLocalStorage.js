import SetLocalStorage from "./setLocalStorage";

export default function resetLocalStorage(array) {

    for (let i=0; i<array.length; i++) {
        SetLocalStorage(i, array[i]);
    }

}