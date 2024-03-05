var inputData = document.getElementById("input-box")
var listContainer = document.getElementById("list-container")

function addData(){
    if (inputData.value == ""){
        alert("You haven't entered any task")
        storeData()
    }
    else{
       var li = document.createElement("li")
       li.innerHTML = inputData.value
        listContainer.appendChild(li)
    
        var span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
        
     }
    inputData.value = ""
    storeData()
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked")
        storeData()
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove()
        storeData()
    }
},false)


function storeData(){
    localStorage.setItem("Data", listContainer.innerHTML)
}

function showData(){
 listContainer.innerHTML = localStorage.getItem("Data")
}
showData()


