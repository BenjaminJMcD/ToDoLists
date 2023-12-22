export default function addSubfolder () {

    const page = document.getElementById("page");

    const subfolderNameDiv = document.createElement("div");
    subfolderNameDiv.classList.add("subfolderName");
    page.appendChild(subfolderNameDiv);

    const folderName = document.createElement("input");
    folderName.setAttribute("type", "text");
    folderName.setAttribute("placeholder", "Sub List Name");
    subfolderNameDiv.appendChild(folderName);

    const submitFolder = document.createElement("button");
    submitFolder.classList.add("subfolderNameSubmit");
    submitFolder.innerText = "Create"
    subfolderNameDiv.appendChild(submitFolder);


    // ON SUBMIT, NEW JS MAKE NAME AND + IN NEW DIV W INPUT.VALUE AS ID
    // INSTANTLY HAVE ADD ITEM OPEN
    // CREATE NEW JS FOR EACH ADD ITEM AUTO SUBFOLDER PROP AND 
    // PUTS IT IN SUBFOLDER DIV

}