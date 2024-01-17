import addSubGeneral from './addSubGeneral';
import addSubGroceries from './addSubGroceries';
import addSubXmas from './addSubXmas';
import inputToStorage from './inputToStorage';

export default function listHeader() {

    if (document.getElementById("newHeaderDiv")) {
        document.getElementById("newHeaderDiv").remove();
    }

    if (document.getElementById("newSubItemDiv")) {
        document.getElementById("newSubItemDiv").remove();
    }

    const page = document.getElementById("page");
    const list = page.getAttribute("list");

    document.getElementById("newItemDiv").remove();

    const newItemDiv = document.createElement("div");
    newItemDiv.setAttribute("id", "newHeaderDiv");
    page.appendChild(newItemDiv);

    const newItemName = document.createElement("input");
    newItemName.setAttribute("type", "text");
    newItemName.setAttribute("placeholder", "List Header");
    newItemName.setAttribute("id", "headerName");
    newItemDiv.appendChild(newItemName);



    const submitItem = document.createElement("button");
    submitItem.innerText = "Submit";
    newItemDiv.appendChild(submitItem);
    submitItem.addEventListener("click", function () {
        let subFolderName = newItemName.value.replace(/ /g, "");

        const subFolderDiv = document.createElement("div");
        subFolderDiv.setAttribute("id", subFolderName);
        newItemDiv.appendChild(subFolderDiv);

        inputToStorage(null);
        
        if (list == "groceries") {
            addSubGroceries(subFolderName);
        }
        else if (list == "xmas") {
            addSubXmas(subFolderName);
        }
        else if (list == "general") {
            addSubGeneral(subFolderName);
        }
        
    })

}