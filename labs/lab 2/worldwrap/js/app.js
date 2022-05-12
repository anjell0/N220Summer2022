//    Angelo Allen
//    May 12, 2022
//    N220-11088

var radius = 300                        //Lines 5-8 create variables named "radius", "x", "y", and "speed"
var x = 0                               //with values set to "300", "0", "300", and "5", respectively
var y = 300
var speed = 5


function setup() {                      //Lines 11-13 create a canvas 800 pixels wide and 600 pixels tall
    createCanvas(800, 600);   
}

function draw() {                       //Lines 15-23 create a purple ellipse at "x" x-coordinate and "y"
background(255);                        //y-coordinate that moves right at "speed" pixels per frame that
x += speed;                             //will be drawn back to the left side of the screen when "x" becomes
if (x > width) {                        //greater than 800 and will move right again in a loop
    x = 0
}
    fill("#552288")
    ellipse(x, y, radius)
}