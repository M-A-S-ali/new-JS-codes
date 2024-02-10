let addBtn = document.getElementById('addListBtn');
addBtn.addEventListener('click', addListItem);
let parentList = document.getElementById('parentList');
function removeText(){
    if(parentList.children.length <=0){
        let displayText = document.createElement('h3');
        displayText.classList.add("isText");
        displayText.textContent = "There is nothing here please add the list item!",
        parentList.appendChild(displayText);
    }
}
removeText();

function addListItem(e){
    if(parentList.children.length > 0 && parentList.children[0].className == "isText"){
        parentList.children[0].remove(); 
    }

    let currentBtn = e.currentTarget;
    let currentInput = currentBtn.previousElementSibling;
    let currentList = currentInput.value;
    
    let newLi = document.createElement('li');
    newLi.className = "list-group-item d-flex justify-content-between";
    newLi.innerHTML = `<h3 class="Item">${currentList}</h3>
    <button class = "editBtn" onclick="editList(this)">edit</button>
    <button class="removeBtn" onclick="removeList(this)" >remove</button>`;
    parentList.appendChild(newLi);

}

function removeList(element){
    element.parentElement.remove();
    removeText();
}
function editList(currElement){
    if(currElement.textContent == "done"){
        currElement.textContent = "edit";
        let currValue = currElement.previousElementSibling.value;
        let currHeading = document.createElement("h3");
        currHeading.className = "Item";
        currHeading.textContent = currValue;
        currElement.parentElement.replaceChild(currHeading, currElement.previousElementSibling);
        

    }else{
        currElement.textContent = "done";
        let currText = currElement.previousElementSibling.textContent;
        let currInput = document.createElement("input");
        currInput.type = "text";
        currInput.className = "form-control";
        currInput.placeholder = "Add List";
        currInput.value = currText;

        currElement.parentElement.replaceChild(currInput, currElement.previousElementSibling);
    }



}


