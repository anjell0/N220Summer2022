//Angelo Allen
//June 12, 2022
//N220-11088

let lightColors = ["#FF0000", "#FFFF00", "#00FF00"];    //Line 5 creates an array of 3 colors

function setup(){                                       //Lines 7-9 create the canvas
    createCanvas(800, 600)
}

function stoplight() {                                  //Lines 11-16 create a function "stoplight"
    for(let i = 0; i<lightColors.length; i++){          //that creates a loop that will draw an
        fill(lightColors[i]);                           //ellipse as many times as there are items
        ellipse(50, 35 * (i + 1), 30)                   //in the "lightColors" array and loops
    }                                                   //through the colors in it for each ellipse
}

function draw() {                                       //Lines 18-20 call the "stoplight()"
    stoplight()                                         //function
}