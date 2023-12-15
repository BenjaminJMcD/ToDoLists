import addItemGroceries from './addItemGroceries';
import getLocalStorage from './getLocalStorage';
import clearSpecifiedList from './clearSpecifiedList';

export default function Groceries() {

    const content = document.getElementById("content");
    content.innerHTML = "";

    const page = document.createElement("div");
    page.setAttribute("id", "page");
    page.setAttribute("list", "groceries");
    content.appendChild(page);

    // LIST TITLE //

    const titleHeader = document.createElement("div");
    titleHeader.classList.add("titleHeader");
    page.appendChild(titleHeader);

    const listTitle = document.createElement("h1");
    listTitle.classList.add("listTitle");
    listTitle.innerText = "Groceries";
    titleHeader.appendChild(listTitle);

    // ADD NEW LIST HOLDER //

    const startSubFolder = document.createElement("p");
    startSubFolder.classList.add("newSubfolder");
    startSubFolder.innerText = "Create Subfolder";
    page.appendChild(startSubFolder);

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
    newListItem.onclick = addItemGroceries;


    // CLEAR BUTTON //

    const clearBtn = document.createElement("button");
    clearBtn.innerText = "Clear All";
    clearBtn.classList.add("clearBtn");
    page.appendChild(clearBtn);
    clearBtn.onclick = clearSpecifiedList;

    // RENDER LIST FROM LOCAL STORAGE ON LOAD
        
    const list = "groceries"
    getLocalStorage(list);



}