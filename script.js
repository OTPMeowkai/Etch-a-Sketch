function addDiv(){

    div = document.createElement("div");
    div.classList.add("flexItem");
    div.addEventListener("mouseenter", color);

    flexbox.appendChild(div);
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

for(i = 0; i < 16; i++){
    for( j = 0; j < 16; j++){
        addDiv();
    }
}

button.addEventListener("click", erase);
