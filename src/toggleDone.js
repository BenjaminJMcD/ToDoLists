export default function toggleDone(event) {

    if (event.target.checked) {
        event.target.parentElement.classList.add("done");
    }
    else if (!event.target.checked) {
        event.target.parentElement.classList.remove("done");
    }

}