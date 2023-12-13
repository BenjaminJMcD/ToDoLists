import storageAvailable from "./storageAvailable";

export default function getLocalStorage() {

    if (storageAvailable("localStorage")) {
        JSON.parse(localStorage.getItem("tasks"));
    }
    else {
        console.log("No Storage")
    }
};