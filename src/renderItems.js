export default function renderItems() {

    const page = document.getElementById("page");

    const nameValue = document.getElementById("name");
    const value = nameValue.value;

    const renderName = document.createElement("p");
    renderName.classList.add("renderName");
    renderName.innerText = `- ${value}`;
    page.appendChild(renderName);

}