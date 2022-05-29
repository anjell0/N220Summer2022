// Angelo Allen
// May 28, 2022
// N220-11088

let fish = {                                                    //Lines 5-13 create an object called "fish" and
    x: 400,                                                     //stores values for "x", "y", "size", and four
    y: 300,                                                     //colors
    size: 200,
    tailColor: "#0000FF",
    bodyColor: "#005050",
    finColor: "#00DDAA",
    faceColor: "#000000"
}

function setup() {                                              //Lines 15-18 create the canvas and color it grey
    createCanvas(800, 600)
    background(100)
}

function draw() {                                               //Lines 20-22 draw the function called "fishy"
    fishy(fish)                                                 //that uses values stored in the object "fish"
}

function fishy(f){                                              //Lines 24-37 create a function called "fishy"
    fill(f.tailColor);                                          //using "f" as an argument that creates an image
    triangle(f.x - 300, f.y - 100, f.x - 300,                   //using arguments that will be relative to the
        f.y + 100, f.x - 100, f.y);                             //object "fish"
    fill(f.bodyColor);
    ellipse(f.x - 25, f.y, f.size + 175, 
        f.size + 50);
    fill(f.finColor);
    triangle(f.x - 100, f.y - 50, f.x - 100, 
        f.y + 50, f.x, f.y);
    fill(f.faceColor);
    ellipse(f.x + 100, f.y - 50, f.size/9, f.size/6);
    ellipse(f.x + 100, f.y + 25, f.size/4, f.size/9);
}