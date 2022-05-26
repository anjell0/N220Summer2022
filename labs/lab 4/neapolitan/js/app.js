//Angelo Allen
//May 23, 2022
//N220-11088

let iceCream = ["#ff9eae", "#fffed6", "#6e390b"]        //Line 5 creates an array of three colors

function setup(){                                       //Lines 7-9 create the canvas
    createCanvas(800, 600)
}

function draw(){                                        //Lines 11-16 create a loop that draws a
for (i=0; i<iceCream.length; i++){                      //rectangle of each color in the array
    fill(iceCream[i])                                   //"iceCream" for as many items that are in
    rect(100*i, 0, 100, 300)                            //the array
}
}