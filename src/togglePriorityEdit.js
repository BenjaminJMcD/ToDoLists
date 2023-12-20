export default function togglePriority () {

    let button = document.getElementById("priorityEdit");

    if (!button.checked) {
        button.parentElement.classList.remove("listItemHighPriority");
    }
    else if (button.checked) {
        button.parentElement.classList.add("listItemHighPriority");
    }

}