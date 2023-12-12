export default function renderItems() {

    const page = document.getElementById("page");

    const getName = document.getElementById("name");
    const name = getName.value;

    const getPriority = document.getElementById("priority");
    let checked = getPriority.checked;

    const renderName = document.createElement("p");
    renderName.classList.add("renderName");
    renderName.innerText = `- ${name}`;
    page.appendChild(renderName);

    if (checked) {
        renderName.classList.add("listItemHighPriority");
    }

}