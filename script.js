
function createDiv(){
    div = document.createElement("div");
    div.classList.add("flexItem");
    div.addEventListener("mouseenter", color);

    return div;
}




function addDiv(n){
    for(i = 0; i < n; i++){
        for( j = 0; j < n; j++){
            flexbox.appendChild(createDiv());
        }
    }
}

function color(e){

    e.target.style.backgroundColor = "black";
    
}

function erase(e){

    const div = document.querySelectorAll(".flexItem");

    div.forEach(div =>{
        div.style.backgroundColor = "white";
    })
    

    
}

const flexbox = document.querySelector(".flex");
const button = document.querySelector("button");

addDiv(16);

button.addEventListener("click", erase);
