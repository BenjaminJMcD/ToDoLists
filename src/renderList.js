export default function renderList(array) {

    const listDiv = document.getElementById("listDiv");
    listDiv.innerHTML = "";
    
    for (let i=0; i<array.length; i++) {
        
        const renderName = document.createElement("p");
        renderName.classList.add("renderName");
        renderName.innerText = `- ${array[i].name}`;
        
        console.log(renderName)

        
        if (array[i].priority == true) {
            renderName.classList.add("listItemHighPriority");
        }

        listDiv.appendChild(renderName);

    }


}