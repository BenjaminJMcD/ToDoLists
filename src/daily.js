import addItem from './addItem';
import getLocalStorage from './getLocalStorage';


export default function Daily() {

    const content = document.getElementById("content");
    content.innerHTML = "";

    const page = document.createElement("div");
    page.setAttribute("id", "page");
    page.setAttribute("list", "daily");
    content.appendChild(page);

    // LIST TITLE //

    const titleHeader = document.createElement("div");
    titleHeader.classList.add("titleHeader");
    page.appendChild(titleHeader);

    const listTitle = document.createElement("h1");
    listTitle.classList.add("listTitle");
    listTitle.innerText = "To Do - Today";
    titleHeader.appendChild(listTitle);

    // ADD NEW LIST HOLDER //

    const startSubFolder = document.createElement("p");
    startSubFolder.classList.add("newSubfolder");
    startSubFolder.innerText = "Create Subfolder";
    page.appendChild(startSubFolder);

    const createNewList = document.createElement("div");
    createNewList.setAttribute("id", "newList");
    page.appendChild(createNewList);

    const newListItem = document.createElement("p");
    newListItem.classList.add("newListItem");
    newListItem.innerText = "+++++";
    createNewList.appendChild(newListItem);
    newListItem.onclick = addItem;

    const listDiv = document.createElement("div");
    listDiv.setAttribute("id", "listDiv");
    page.appendChild(listDiv);

    // RENDER LIST FROM LOCAL STORAGE ON LOAD
    
    const list = "daily"
    getLocalStorage(list);



}