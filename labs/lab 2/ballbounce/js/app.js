//    Angelo Allen
//    May 12, 2022
//    N220-11088

var radius = 45                                     //Lines 5-10 create variables named "raidus", "x",
var x = 45                                          //"y", "speed", "xdirection", and "ydirection" 
var y = 45                                          //and stores the values "45", "45", "45", "5", "1",
var speed = 5                                       //and "1", respectively
var xdirection = 1
var ydirection = 1

function setup() {                                  //Lines 12-14 creates a canvas 800 pixels wide
    createCanvas(800, 600);                         //and 600 pixels tall
}

function draw() {                                   //Lines 16-27 draw an ellipse to the "x" and "y"
    background(255);                                //coordinates and moves it to the right and down
    x += speed * xdirection;                        //at 5 pixels per frame. If the ellipse touches
    y += speed * ydirection;                        //the right or bottom "wall", it will invert its
    if ((x > width-radius) || (x < 0+radius)) {     //movement in the opposite direction of the "wall"
        xdirection = -xdirection;                   //and does the same for the left and top "wall"
    }
    if ((y > height-radius) || (y < 0+radius)) {
        ydirection = -ydirection;
    }
    fill(0)
    ellipse(x, y, radius, radius)
}