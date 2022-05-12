//    Angelo Allen
//    May 12, 2022
//    N220-11088

var radius = 50                         //Line 5 creates a variable named "radius" and sets its value to 50

function setup() {                      //Lines 7-9 create a canvas 400 pixels wide and 300 pixels tall
    createCanvas(400, 300);   
}

function draw() {                       //Lines 11-19 create an ellipse on a white background that will be
    background(255);                    //filled with red if it is on the right half of the screen or
    if (mouseX > 200) {                 //filled with blue if it is on the left half of the screen
        fill (255, 0, 0);
    } else if (mouseX < 200) {;
        fill (0, 0, 255);
    }
    ellipse(mouseX, mouseY, radius);
}