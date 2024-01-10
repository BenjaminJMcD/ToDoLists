import addItemGeneral from './addItemGeneral';
import getLocalStorage from './getLocalStorage';
import clearSpecifiedList from './clearSpecifiedList';
import listTitle from './listTitle';

export default function General() {

    const content = document.getElementById("content");
    content.innerHTML = "";

    const page = document.createElement("div");
    page.setAttribute("id", "page");
    page.setAttribute("list", "general");
    content.appendChild(page);

    // LIST NAME HEADER //

    const titleHeader = document.createElement("div");
    titleHeader.classList.add("titleHeader");
    page.appendChild(titleHeader);

    const listName = document.createElement("h1");
    listName.classList.add("listName");
    listName.innerText = "General";
    titleHeader.appendChild(listName);

    // LIST TITLE BUTTON //

    const startSubFolder = document.createElement("p");
    startSubFolder.setAttribute("id", "listTitle");
    startSubFolder.innerText = "Add List Title";
    startSubFolder.onclick = listTitle;
    page.appendChild(startSubFolder);

    // ADD NEW LIST HOLDER //

    const createNewList = document.createElement("div");
    createNewList.setAttribute("id", "newList");
    page.appendChild(createNewList);

    const listDiv = document.createElement("div");
    listDiv.setAttribute("id", "listDiv");
    page.appendChild(listDiv);
    
    const newListItem = document.createElement("p");
    newListItem.setAttribute("id", "newListItem");
    newListItem.innerText = "Add Item";
    createNewList.appendChild(newListItem);
    newListItem.onclick = addItemGeneral;


    // CLEAR BUTTON //

    const clearBtn = document.createElement("button");
    clearBtn.innerText = "Clear All";
    clearBtn.classList.add("clearBtn");
    page.appendChild(clearBtn);
    clearBtn.onclick = clearSpecifiedList;

    // RENDER LIST FROM LOCAL STORAGE ON LOAD
    
    const list = "general"
    getLocalStorage(list);



}