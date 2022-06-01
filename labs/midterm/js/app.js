//Angelo Allen
//June 1, 2022
//N220-11088

let alienRow = [100, 150, 200, 250, 300, 350, 400, 450];
let alienColumn = [50, 100, 150];
let alien = {
    color: "#FFFFFF",
    size: 35
}
let ship = {
    x: 400,
    y: 500,
    color: "#FDF0F0",
    size: 50
}

function setup() {
    createCanvas(800, 600)
    background(0)
}

function draw() {
    aliens();
    shippy();
}

function aliens() {
    var newAlienColumn = alienColumn[c] + 50
    
    for(var r = 0; r < alienRow.length; r++){
        for(var c = 0; c < alienColumn.length; c++){
            fill(alien.color)
            rect(alienRow[r], alienColumn[c], alien.size, alien.size)

            alienRow[r]++

            if(alienRow[r] > 650 || alienRow[r] < 100){
                alienColumn = newAlienColumn
            }
        }
    }
}

function shippy() {
    fill(ship.color)
    rect(ship.x, ship.y, ship.size, ship.size)

    if(keyIsPressed && 150 < ship.x) {
        if(key == 'a'){
            ship.x --
        }
    }
    if(keyIsPressed && ship.x < 650){
        if(key == "d") {
            ship.x ++
        }
    }
}