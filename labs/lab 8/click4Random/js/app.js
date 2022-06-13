//Angelo Allen
//June 12, 2022
//N220-11088

let colors = ["#FF0000", "#00FF00",                                     //Lines 5-11 create an array of colors
                "#0000FF", "#FFFF00"]                                   //and an object that stores values for
let circleSpot = {                                                      //the "circleSpot"
    x: 300,
    y: 300,
    size: 300
}

function setup() {                                                      //Lines 13-15 create the canvas
    createCanvas(800, 600)
}

function mouseClicked() {                                               //Lines 17-22 define the function for
    if(mouseX > circleSpot.x/2 && mouseX < circleSpot.x * 1.5 &&        //the mouse being clicked that, if the
            mouseY > circleSpot.y/2 && mouseY < circleSpot.y * 1.5){    //mouse is within the given parameters,
        fill(colors[Math.floor(Math.random() * 4)])                     //will change the fill color of the drawn
    }                                                                   //ellipse to that of a randomized color
}                                                                       //in the array, "colors"

function draw() {                                                       //Lines 24-26 draw an ellipse based on
    ellipse(circleSpot.x, circleSpot.y, circleSpot.size)                //values stored in the "circleSpot"
}                                                                       //object