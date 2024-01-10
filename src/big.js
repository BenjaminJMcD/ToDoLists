import addItem from './addItem';
import getLocalStorage from './getLocalStorage';
import clearSpecifiedList from './clearSpecifiedList';

export default function Big() {

    const content = document.getElementById("content");
    content.innerHTML = "";

    const page = document.createElement("div");
    page.setAttribute("id", "page");
    page.setAttribute("list", "big");
    content.appendChild(page);

    // LIST TITLE //

    const titleHeader = document.createElement("div");
    titleHeader.classList.add("titleHeader");
    page.appendChild(titleHeader);

    const listTitle = document.createElement("h1");
    listTitle.classList.add("listTitle");
    listTitle.innerText = "To Do - Big";
    titleHeader.appendChild(listTitle);

    // DIV FOR NEW LIST //

    const createNewList = document.createElement("div");
    createNewList.setAttribute("id", "newList");
    page.appendChild(createNewList);

    // CLEAR BUTTON //

    const clearBtn = document.createElement("button");
    clearBtn.innerText = "Clear All";
    clearBtn.classList.add("clearBtn");
    page.appendChild(clearBtn);
    clearBtn.onclick = clearSpecifiedList;

    // DIV FOR LIST //

    const listDiv = document.createElement("div");
    listDiv.setAttribute("id", "listDiv");
    page.appendChild(listDiv);

    // RENDER LIST FROM LOCAL STORAGE ON LOAD //  
     
    const list = "big"
    getLocalStorage(list);

    // NEW ITEM FORM //

    const newListItem = document.createElement("p");
    newListItem.setAttribute("id", "newListItem");
    newListItem.innerText = "Add Item";
    createNewList.appendChild(newListItem);
    newListItem.onclick = addItem;

}