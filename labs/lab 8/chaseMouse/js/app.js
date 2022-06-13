//Angelo Allen
//June 12, 2022
//N220-11088

var circX = 50                                                  //Lines 5-8 assigns values to some variables
var circY = 50
var circSize = 50
var circColor = "#000000"

function setup() {                                              //Lines 10-12 create the canvas
    createCanvas(800, 600)
}

function draw() {                                               //Lines 14-18 draw an ellipse that will act
    background(255)                                             //based on the "distance" function
    ellipse(circX, circY, circSize)
    distance()
}

function distance() {                                           //Lines 20-37 define a function "distance"
    if(mouseX > circX){                                         //that checks if the mouse is to the left,
        circX += 3                                              //right, top, or bottom of the circle and if it
    }else if(mouseX < circX){                                   //is, the circle will move in that direction.
        circX -= 3                                              //if the circle comes within 7 pixels of the
    }                                                           //mouse, it will turn red, otherwise, it stays
    if(mouseY > circY){                                         //black
        circY += 3
    }else if(mouseY < circY){
        circY -= 3
    }
    if ((mouseX < circX + 57) && (mouseY < circY + 57) && 
          (mouseX > circX - 57) && (mouseY > circY - 57)){
        fill("#FF0000")
    }else{
        fill("#000000")
    }
}