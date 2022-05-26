//Angelo Allen
//May 23, 2022
//N220-11088

let xpositions = [0,0,0,0,0,0,0,0,0,0];                 //Lines 5-6 create arrays for position values
let ypositions = [0,0,0,0,0,0,0,0,0,0];

function setup() {                                      //Lines 8-10 create the canvas
 createCanvas(800, 600)
 }

 function draw() {                                      //Lines 12-23 create push and shift methods for
     background(0)                                      //the arrays and create a loop that draws
                                                        //circles to positions relative to the length
     xpositions.push(mouseX);                           //of those arrays
     xpositions.shift();
     ypositions.push(mouseY);
     ypositions.shift();

     for(var i = 0; i < xpositions.length; i++){
         circle(xpositions[i], ypositions[i], 50)
     }
 }