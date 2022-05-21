//    Angelo Allen
//    May 21, 2022
//    N220-11088

function setup(){                           //Lines 5-7 create the canvas
    createCanvas(800, 600)
}

function draw(){                            //Lines 9-16 draw rectangles down and right
    for (var y = 0; y <= 150; y+=50) {      //so long as the current "y" and "x" values
      for (var x = 0; x <= y; x+=50) {      //for the given column and row so long as the
        fill("#FF0000")                     //values are less than 150 but will only go as
        rect(x, y, 50, 50)                  //far as the current "y" and "x" value maximum
      }
}
}