export default function Big() {

    const content = document.getElementById("content");
    content.innerHTML = "";

    const page = document.createElement("div");
    page.classList.add("page");
    content.appendChild(page);

    // LIST TITLE //

    const titleHeader = document.createElement("div");
    titleHeader.classList.add("titleHeader");
    page.appendChild(titleHeader);

    const listTitle = document.createElement("h1");
    listTitle.classList.add("listTitle");
    listTitle.innerText = "To Do - Big";
    titleHeader.appendChild(listTitle);

    // LIST CREATION + EDITING //

    



}