// Angelo Allen
// May 28, 2022
// N220-11088

let confusion = [0, 50, 100, 150, 200, 250, 300, 350,       //Lines 5-7 creat an array of multiples
                 400, 450, 500, 550, 600, 650, 700,         //of 50 up to 800
                 750, 800]

function setup() {                                          //Lines 9-11 create the canvas
    createCanvas(800, 600)
}

function draw() {                                           //Lines 13-25 draw ellipses that move down
    background(0)                                           //and right and grow at 1px/f and reset back
                                                            //to 0 once they reach 800
    for(var r = 0; r < 800; r++){
        ellipse(confusion[r], confusion[r], confusion[r]);

        confusion[r] += 1;

        if(confusion[r] > 800){
            confusion[r] = 0
        }
    }
}