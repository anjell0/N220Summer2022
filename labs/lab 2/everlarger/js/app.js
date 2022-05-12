//    Angelo Allen
//    May 12, 2022
//    N220-11088

var radius = 1                      //Lines 5-8 create variables named "radius", "x", "y", and "speed"
var x = 400                         //with values set to "1", "400", "300", and "1", respectively
var y = 300
var speed = 1


function setup() {                  //Lines 11-13 create a canvas 800 pixels wide and 600 pixels tall
    createCanvas(800, 600);   
}

function draw() {                   //Lines 15-23 create a purple ellipse at "x" x-coordinate and "y"
background(255);                    //y-coordinate that increases in size at "speed" pixels per frame that
radius += speed;                    //will be drawn back to 1 pixel when "radius" becomes greater than 200
if (radius > 200) {                 //and will resume increasing in size in a loop
    radius = 1
}
    fill("#552288")
    ellipse(x, y, radius)
}