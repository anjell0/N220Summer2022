//    Angelo Allen
//    May 21, 2022
//    N220-11088

var black = "#000000"                                   //Lines 5-10 create variables and store their
var purple = "#450045"                                  //values
var green = "#00FF00"
var blue = "#0000FF"
var y = 25
var radius = 25

function setup() {                                      //Lines 12-14 create the canvas
createCanvas(800, 600)
}

function draw(){                                        //Lines 16-34 draw a line of ellipes until their
    for (var i = 25; i<= 25*25; i += 25){               //"i" value reaches 625. If the "i" value multiplied
        fill("black")                                   //by the shapes position is divisble by only 3,
        ellipse(i, y, radius)                           //a purple ellipse is drawn. If it is divisble by
    if (i == 3*25 || i == 6*25 || i == 9*25 ||          //only 5, a green square is drawn. If it is
        i == 12*25|| i == 18*25 || i == 21*25 ||        //divisible by 3 and 5, a blue square is drawn.
        i == 24*25) {
            fill("purple")
            ellipse(i, y, radius)
    }else if (i == 5*25 || i == 10*25 ||
              i == 20*25 || i == 25*25) {
            fill("green")
            rect(i-25/2, y/2, 25, 25)
    }else if (i == 15*25) {
            fill("blue")
            rect(i-25/2, y/2, 25, 25)
    }
}
}