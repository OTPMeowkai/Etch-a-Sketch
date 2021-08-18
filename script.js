function randomValue(){
    return(Math.round(Math.random() * 255))
}



function createDiv(){
    div = document.createElement("div");
    div.classList.add("flexItem");
    div.classList.add("white");
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
    if(e.target.classList.contains("white")){
        e.target.classList.remove("white");
        e.target.classList.add("black90");
    }else if(e.target.classList.contains("black90")){
        e.target.classList.remove("black90");
        e.target.classList.add("black80");
    }else if(e.target.classList.contains("black80")){
        e.target.classList.remove("black80");
        e.target.classList.add("black70");
    }else if(e.target.classList.contains("black70")){
        e.target.classList.remove("black70");
        e.target.classList.add("black60");
    }else if(e.target.classList.contains("black60")){
        e.target.classList.remove("black60");
        e.target.classList.add("black50");
    }else if(e.target.classList.contains("black50")){
        e.target.classList.remove("black50");
        e.target.classList.add("black40");
    }else if(e.target.classList.contains("black40")){
        e.target.classList.remove("black40");
        e.target.classList.add("black30");
    }else if(e.target.classList.contains("black30")){
        e.target.classList.remove("black30");
        e.target.classList.add("black20");
    }else if(e.target.classList.contains("black20")){
        e.target.classList.remove("black20");
        e.target.classList.add("black10");
    }else if(e.target.classList.contains("black10")){
        e.target.classList.remove("black10");
        e.target.classList.add("black");
    }
    
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


button.addEventListener("click", erase);
