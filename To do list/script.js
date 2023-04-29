const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        //document.getElementById("list-container").appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener('click', function(element){
    if(element.target.tagName === "LI"){
        element.target.classList.toggle("checked");
        saveData();
    }
    else if(element.target.tagName === "SPAN"){
        element.target.parentElement.remove();
        saveData();
    }
}, false);

// To store the data
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}

// if you refresh the page the data wont be removed
// Display the data whenever we open the website again

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
