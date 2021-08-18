function randomValue(){
    return(Math.round(Math.random() * 255))
}



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

    e.target.style.backgroundColor = `rgb(${randomValue()},${randomValue()},${randomValue()})`;
    
}

function erase(e){

    const div = document.querySelectorAll(".flexItem");
    let n;
    div.forEach(div =>{
        flexbox.removeChild(div);
    })
    
    do{
    n = prompt("Insert the number of squares in the grid:","16")
    }while( n < 16 || n > 100);

    document.documentElement.style.setProperty("--itemSize", `calc(${100 / parseInt(n)}% - 2px)`)
    console.log(parseInt(n));
    addDiv(n);
    
}

const flexbox = document.querySelector(".flex");
const button = document.querySelector("button");

addDiv(16);
randomValue();

button.addEventListener("click", erase);
