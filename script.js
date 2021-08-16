function addDiv(){

    div = document.createElement("div");
    div.classList.add("flexItem");
    div.addEventListener("mouseenter", color);

    flexbox.appendChild(div);
}



const flexbox = document.querySelector(".flex");
flexbox.addEventListener("onmouseover", color);
console.log(flexbox);

for(i = 0; i < 16; i++){
    for( j = 0; j < 16; j++){
        addDiv();
    }
}
