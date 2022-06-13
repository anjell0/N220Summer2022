//Angelo Allen
//June 12, 2022
//N220-11088

var circleX = 50                                                        //Lines 5-16 create all the variables
var circleY = 50                                                        //for the algorithm
var speed = 5
var size = 50
var xdirection = 1
var ydirection = 1
var rectX = 400
var rectY = 560
var rectW = 120
var rectH = 40
let tally = 0
let score = document.getElementById('score')

function setup() {                                                      //Lines 18-20 create the canvas
    createCanvas(800, 600)
}

score.innerHTML = "Score: " + tally                                     //Lines 22-24 create a div to keep
score.style.fontSize = '30px'                                           //track of the "score"
score.style.marginLeft = "10px"

function draw() {                                                       //Lines 26-30 call the functions
    background(0)                                                       //"paddle and "movingCirc"
    paddle();
    movingCirc();
}

function movingCirc() {                                                 //Lines 32-61 define a function,
    circleX += speed * xdirection                                       //"movingCirc" that will move the
    circleY += speed * ydirection                                       //ellipse around the screen. The
                                                                        //first check is a collision check
    if (circleX > rectX && circleX < rectX + rectW) {                   //with the moving rectangle. If the
        if((circleY > rectY - size/2) && (circleY < rectY + rectH)) {   //collision happens, the ball will
            ydirection = -ydirection                                    //change y direction and the "tally"
            tally++                                                     //will increase by 1. If the circle
                                                                        //collides with the left, right, or
            score.innerHTML = "Score: " + tally                         //top walls, it will move in the
        }                                                               //opposite direction. If the circle
    }                                                                   //passes the bottom wall, a div will
    if ((circleX > width - size/2) || (circleX < 0 + size/2)) {         //appear that will tell the player
        xdirection = -xdirection                                        //"Game Over!" and will display their
    }                                                                   //final score
    if ((circleY < 0 + size/2)){
        ydirection = -ydirection
    }
    if (circleY == 600) {
        let gameOver = document.createElement('div')

        gameOver.innerHTML = "Game Over! Final Score: " + tally + ". Refresh to start over."
        gameOver.style.fontSize = "30px"
        gameOver.style.marginLeft = "10px"

        document.body.appendChild(gameOver)
    }
    fill(255)
    ellipse(circleX, circleY, size)
}

function paddle() {                                                     //Lines 63-76 define a function
    if(keyIsPressed && rectX > 0) {                                     //"paddle" that draws a rectangle and
        if (key == 'a') {                                               //will move it left to right so long
            rectX -= 5                                                  //as it is within the left and right
        }                                                               //walls and the 'a' or 'd' key is
    }                                                                   //held down
    if(keyIsPressed && rectX < 800 - rectW) {
        if (key == 'd') {
            rectX += 5
        }
    }
    fill(255)
    rect(rectX, rectY, rectW, rectH)
}