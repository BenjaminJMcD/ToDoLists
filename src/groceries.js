import addItemGroceries from './addItemGroceries';
import getLocalStorage from './getLocalStorage';
import clearSpecifiedList from './clearSpecifiedList';
import listHeader from './listHeader';

export default function Groceries() {

    const content = document.getElementById("content");
    content.innerHTML = "";

    const page = document.createElement("div");
    page.setAttribute("id", "page");
    page.setAttribute("list", "groceries");
    content.appendChild(page);

    // LIST NAME HEADER //

    const titleHeader = document.createElement("div");
    titleHeader.classList.add("titleHeader");
    page.appendChild(titleHeader);

    const listTitle = document.createElement("h1");
    listTitle.classList.add("listTitle");
    listTitle.innerText = "Groceries";
    titleHeader.appendChild(listTitle);

    // LIST HEADER BUTTON //
    
    const startSubFolder = document.createElement("p");
    startSubFolder.setAttribute("id", "listHeader");;
    startSubFolder.innerText = "Add List Header";
    startSubFolder.onclick = listHeader;
    page.appendChild(startSubFolder);

    // ADD NEW LIST HOLDER //

    const createNewList = document.createElement("div");
    createNewList.setAttribute("id", "newList");
    page.appendChild(createNewList);

    const listDiv = document.createElement("div");
    listDiv.setAttribute("id", "listDiv");
    page.appendChild(listDiv);

    // CLEAR BUTTON //

    const clearBtn = document.createElement("button");
    clearBtn.innerText = "Clear All";
    clearBtn.classList.add("clearBtn");
    page.appendChild(clearBtn);
    clearBtn.onclick = clearSpecifiedList;

    // RENDER LIST FROM LOCAL STORAGE ON LOAD
        
    const list = "groceries"
    getLocalStorage(list);

    // NEW ITEM FORM //
    
    addItemGroceries();



}