import addItemXmas from './addItemXmas';
import getLocalStorage from './getLocalStorage';
import clearSpecifiedList from './clearSpecifiedList';

export default function Xmas() {

    const content = document.getElementById("content");
    content.innerHTML = "";

    const page = document.createElement("div");
    page.setAttribute("id", "page");
    page.setAttribute("list", "xmas");
    content.appendChild(page);

    // LIST TITLE //

    const titleHeader = document.createElement("div");
    titleHeader.classList.add("titleHeader");
    page.appendChild(titleHeader);

    const listTitle = document.createElement("h1");
    listTitle.classList.add("listTitle");
    listTitle.innerText = "Xmas Gifts";
    titleHeader.appendChild(listTitle);
    
    // CLEAR BUTTON //

    const clearBtn = document.createElement("button");
    clearBtn.innerText = "Clear All";
    clearBtn.classList.add("clearBtn");
    page.appendChild(clearBtn);
    clearBtn.onclick = clearSpecifiedList;

    // ADD NEW LIST HOLDER //

    const startSubFolder = document.createElement("p");
    startSubFolder.classList.add("newSubfolder");
    startSubFolder.innerText = "Add Recipient";
    page.appendChild(startSubFolder);

    const createNewList = document.createElement("div");
    createNewList.setAttribute("id", "newList");
    page.appendChild(createNewList);

    const listDiv = document.createElement("div");
    listDiv.setAttribute("id", "listDiv");
    page.appendChild(listDiv);
    
    const newListItem = document.createElement("p");
    newListItem.setAttribute("id", "newListItem");
    newListItem.innerText = "General Item";
    createNewList.appendChild(newListItem);
    newListItem.onclick = addItemXmas;



    
    // RENDER LIST FROM LOCAL STORAGE ON LOAD
    
    const list = "xmas"
    getLocalStorage(list);



}