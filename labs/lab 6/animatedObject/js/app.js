// Angelo Allen
// May 28, 2022
// N220-11088

let mass = {                                //Lines 5-10 create an object called "mass" and stores
    x: 20,                                  //values for "x", "y", "size", and "color"
    y: 300,
    size: 10,
    color: "#8DA4E9"
}

function setup() {                          //Lines 12-14 create the canvas
    createCanvas(800, 600)
}

function draw() {                           //Lines 16-28 draw an ellipse using "mass" values that
    background(0)                           //moves right by 1px/f and grows by 1 px/f that will reset
    mass.x += 1;                            //its "x" and "size" once it reaches the edge of the canvas
    mass.size += 1                          //or a size of 300, respectively
    if(mass.x > width){
        mass.x = 20
    }
    if(mass.size > 300){
        mass.size = 10
    }
    fill(mass.color)
    ellipse(mass.x, mass.y, mass.size)
}