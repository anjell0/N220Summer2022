//Angelo Allen
//May 26, 2022
//N220-11088

let dvDivy = document.getElementById("divy");  //Line 5 creates the div element "McDiv"
let newEl = document.createElement("div");


for(var i = 0; i < 100; i++){
newEl.appendChild(createDiv(i));
}



function createDiv(){
    dvDivy.style.backgroundColor = "#000000";
    dvDivy.style.height = "20px";
    dvDivy.style.width = "20px";
    dvDivy.style.float = "left";
}





// function randomColor(){
//     const hexParts = "0123456789ABCDEF"
//     let color = "#"
//     for (var i = 0; i < 100; i++){
//         color += hexParts[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }