//    Angelo Allen
//    May 21, 2022
//    N220-11088

function setup(){                   //Lines 5-7 create the canvas
    createCanvas(800, 800)
}

function draw(){                    //Lines 9-13 draw a circle of "r"
for(r = 800; r > 0; r -= 20){       //radius until the radius equals 0
    ellipse(400, 400, r)  
        } 
}