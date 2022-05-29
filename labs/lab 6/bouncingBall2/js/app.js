// Angelo Allen
// May 28, 2022
// N220-11088

let orb = {                                     //Lines 5-13 create an object named "orb"
    x: 45,                                      //that stores values for "x", "y", "size",
    y: 45,                                      //"color", "velocity", "xdirection", and
    size: 45,                                   //"ydirection"
    color: "#A4D1B8",
    velocity: 5,
    xdirection: 1,
    ydirection: 1,
}

function setup() {                              //Lines 15-17 create the canvas
    createCanvas(800, 600);
}

function draw() {                               //Lines 19-32 draw an ellipse with the values
    background(0);                              //of "orb" and sets up code so that the ellipse
    orb.x += orb.velocity * orb.xdirection;     //will "bounce" off the 4 borders of the canvas
    orb.y += orb.velocity * orb.ydirection;
    if ((orb.x > width-orb.size) ||
    (orb.x < 0 + orb.size)) {
        orb.xdirection = -orb.xdirection;
    }
    if ((orb.y > height-orb.size) || 
    (orb.y < 0 + orb.size)) {
        orb.ydirection = -orb.ydirection;
    }
    fill(orb.color)
    ellipse(orb.x, orb.y, orb.size)
}