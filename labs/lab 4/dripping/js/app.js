//Angelo Allen
//May 23, 2022
//N220-11088

let ypositions = [0, 100, 200, 300, 400, 500, 600];         //Line 5 creates an array for "yposition"s

function setup() {                                          //Lines 7-9 create the canvas
 createCanvas(800, 600)
 }

 function draw() {                                          //Lines 11-23 creat a loop that draws a circle
    background(0)                                           //at each y position listed in "ypositions" and
                                                            //has it move down at 5 pixels per frame. Once
    for(var y = 0; y < ypositions.length; y++ ){            //the y value for each circle exceeds the height
        circle(400, ypositions[y]-600, 20);                 //of the canvas, it is looped back to the top

        ypositions[y]+= 5;

        if(ypositions[y] - 600 > height) {
            ypositions[y] = 600;
        }
    } 
 }