
let btn = document.getElementById("button");


const randomColor= ()=>{
    let val = "0123456789ABCDEF";

    let color = "#";

    for(let i=0;i<6;i++){
        color = color+ val[Math.floor(Math.random() * 16)];
    }
    return color;
}
function changeColor(){
    document.body.style.backgroundColor=randomColor()
}

btn.addEventListener("click",changeColor)
    
