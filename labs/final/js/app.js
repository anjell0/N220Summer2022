//Angelo Allen
//June 18, 2022
//N220-11088

let playerName = document.getElementById('playerName')              //Lines 5-15 get all elements from the HTML
let playerHP = document.getElementById('playerHP')                  //and create 3 global variables
let playerATK = document.getElementById('playerATK')
let playerDEF = document.getElementById('playerDEF')
let enemyName = document.getElementById('enemyName')
let enemyHP = document.getElementById('enemyHP')
let enemyATK = document.getElementById('enemyATK')
let enemyDEF = document.getElementById('enemyDEF')
let enemyChoice = Math.floor(Math.random() * 2 + 1)
let killCount = 0
let i = 0

let player = {                                                      //Lines 17-22 create an object for the
    name: "Pete",                                                   //player stats
    health: 100,
    attack: 35,
    defense: 15
}

let enemy = [                                                       //Lines 24-34 create an array of objects for
    {name: "Slime", health: 20, attack: 10, defense: 15},           //all enemies
    {name: "Rat", health: 40, attack: 20, defense: 25},
    {name: "Dog", health: 35, attack: 30, defense: 35},
    {name: "Crow", health: 35, attack: 35, defense: 20},
    {name: "Snake", health: 60, attack: 30, defense: 15},
    {name: "Bandit", health: 70, attack: 40, defense: 40},
    {name: "Knight", health: 90, attack: 50, defense: 60},
    {name: "Dragon", health: 150, attack: 75, defense: 70},
    {name: "Zalzibar", health: 800, attack: 200, defense: 300},
]

function setup() {                                                  //Lines 36-38 create the canvas where enemies
    createCanvas(800, 600)                                          //are displayed
}
 
function draw() {                                                   //Lines 40-62 draw enemies so long as the current
    background(255)                                                 //iternad is their respective one in the enemy array
    noStroke()
    if(i == 0){
        slime()
    }else if(i == 1){
        rat()
    }else if(i == 2){
        dog()
    }else if(i == 3){
        crow()
    }else if(i == 4){
        snake()
    }else if(i == 5){
        bandit()
    }else if(i == 6){
        knight()
    }else if(i == 7){
        dragon()
    }else if(i == 8){
        zalzibar()
    }
}

playerName.innerHTML = player.name                                  //Lines 64-94 display and style all stats and names
playerName.style.fontSize = "50px"                                  //onto the screen. Line 96 begins the creation of
playerName.style.float = "left"                                     //a new element, "killCounter"

enemyName.innerHTML = enemy[i].name
enemyName.style.fontSize = "50px"
enemyName.style.marginLeft = "750px"

playerHP.innerHTML = "HP: " + player.health
playerHP.style.fontSize = "50px"
playerHP.style.float = "left"

enemyHP.innerHTML = "HP: " + enemy[i].health
enemyHP.style.fontSize = "50px"
enemyHP.style.marginLeft = "750px"

playerATK.innerHTML = "Attack: " + player.attack
playerATK.style.fontSize = "50px"
playerATK.style.float = "left"

enemyATK.innerHTML = "Attack: " + enemy[i].attack
enemyATK.style.fontSize = "50px"
enemyATK.style.marginLeft = "750px"

playerDEF.innerHTML = "Defense: " + player.defense
playerDEF.style.fontSize = "50px"
playerDEF.style.float = "left"

enemyDEF.innerHTML = "Defense: " + enemy[i].defense
enemyDEF.style.fontSize = "50px"
enemyDEF.style.marginLeft = "750px"

let killCounter = document.createElement('div')

function attack() {                                                                             //Lines 98-181 define the function "attack"
    if(enemyChoice == 1) {                                                                      //that will do the following:
        if((enemy[i].attack > player.defense) && (player.attack > enemy[i].defense)){           //Lines 99-108: If the enemy attacks, if the 
            enemy[i].health -= player.attack - enemy[i].defense                                 //enemies attack is greater than the players defense
            player.health -= enemy[i].attack - player.defense                                   //and the same the other way, new HP is calculated based
        }else if(enemy[i].attack > player.defense && (player.attack <= enemy[i].defense)){      //on attacks minus opposing defense. At any time an attack
            player.health -= enemy[i].attack - player.defense                                   //is less than defense, no new HP is calculated for the one 
        }else if((enemy[i].attack <= player.defense) && (player.attack > enemy[i].defense)){    //with higher defense
            enemy[i].health -= player.attack - enemy[i].defense
        }
    }
    if(enemyChoice == 2) {                                                                      //Lines 109-115: if the enemy defends, their defense is
        enemy[i].defense += 10                                                                  //boosted by 10, a check is done to see if the player attack
        if(enemy[i].defense < player.attack){                                                   //is higher, and if so, new HP is calculated, and the defense
            enemy[i].health -= player.attack - enemy[i].defense                                 //goes back down by 10
        }
        enemy[i].defense -= 10
    }
    if((enemy[i].health <= player.attack - enemy[i].defense) || (enemy[i].health <= 0)){        //Lines 116-136: If the enemy HP is ever less than the damage
        if(killCount < 6){                                                                      //to be dealt or 0 (or less), if the kill count is less than 6,
            i = Math.floor(Math.random() * 4)                                                   //one of the first 5 enemies is generated. When the kill count
            killCount ++                                                                        //is between 6 and 15, a "bandit" is added to the rotation. When
            player.health += 3                                                                  //the kill count is higher than 15, the "knight" is added to the
            player.attack += 3                                                                  //rotation.
            player.defense += 3
        }else if((killCount >= 6) && (killCount <= 15)) {
            i = Math.floor(Math.random() * 5)
            killCount ++
            player.health += 6
            player.attack += 6
            player.defense += 6
        }else if(killCount > 15){
            i = Math.floor(Math.random() * 7)
            killCount ++
            player.health += 9
            player.attack += 9
            player.defense += 9
        }
    }                                                                                           //Lines 137-143: If the kill count is divisible by 10, spawn a
    if(killCount % 10 == 0){                                                                    //dragon and if it is 40, spawn "Zalzibar"
        i = 7
        player.attack = player.attack + 30
    }
    if(killCount == 40){
        i = 8
    }
    if(killCount == 41){                                                                        //Lines 144-159: If the cill count reaches 41, display a victory
        let win = document.createElement('div')                                                 //message. If the player health reaches 0 or less, display a
                                                                                                //game over message
        win.innerHTML = "Pete has defeated the evil wizard Zalzibar! Congratulations!"
        win.style.fontSize = "50px"

        document.body.appendChild(win)
    }
    if(player.health <= 0){
        let lose = document.createElement('div')

        lose.innerHTML = "Pete was not so perky after all...Game Over"
        lose.style.fontSize = "50px"

        document.body.appendChild(lose)
    }

    playerHP.innerHTML = "HP: " + player.health                                                 //Lines 161-181: update all document objects on the page as needed

    enemyName.innerHTML = enemy[i].name

    enemyHP.innerHTML = "HP: " + enemy[i].health

    playerATK.innerHTML = "Attack: " + player.attack

    enemyATK.innerHTML = "Attack: " + enemy[i].attack

    playerDEF.innerHTML = "Defense: " + player.defense

    enemyDEF.innerHTML = "Defense: " + enemy[i].defense

    killCounter.innerHTML = "Kill Count: " + killCount
    killCounter.style.fontSize = "30px"

    document.body.appendChild(killCounter)

    enemyChoice = Math.floor(Math.random() * 2 + 1)
}

function defend() {                                                                             //Lines 183-214 do a defense check that boosts the player
    if(enemyChoice == 1) {                                                                      //defense by 10 and lowers it by 10 after an attack >< defense
        player.defense += 10                                                                    //check. If the player health reaches 0 after defending,
        if(enemy[i].attack > player.defense){                                                   //display a game over message, and updates all document objects
            player.health -= enemy[i].attack - player.defense
        }
        player.defense -= 10
    }
    if(player.health <= 0){
        let lose = document.createElement('div')

        lose.innerHTML = "Pete was not so perky after all...Game Over"
        lose.style.fontSize = "50px"

        document.body.appendChild(lose)
    }
    playerHP.innerHTML = "HP: " + player.health

    enemyName.innerHTML = enemy[i].name

    enemyHP.innerHTML = "HP: " + enemy[i].health

    playerATK.innerHTML = "Attack: " + player.attack

    enemyATK.innerHTML = "Attack: " + enemy[i].attack

    playerDEF.innerHTML = "Defense: " + player.defense

    enemyDEF.innerHTML = "Defense: " + enemy[i].defense
    
    enemyChoice = Math.floor(Math.random() * 2 + 1)
}

function slime() {                                                                              //Lines 216-224 draw the slime
    fill("#00FF00")
    ellipse(width/2, height/2, 350)
    triangle(width/2 - 100, height/2 - 140, width/2, 50, width/2 + 100, height/2 - 140)
    fill(0)
    ellipse(width/2 - 75, height/2 - 25, 50, 100)
    ellipse(width/2 + 75, height/2 - 25, 50, 100)
    arc(width/2, height/2 + 50, 125, 125, 0, PI, CHORD);
}

function rat() {                                                                                //Lines 226-237 draw the rat
    fill(150)
    ellipse(width/2, height/2 + 100, 250)
    ellipse(width/2, height/2 - 50, 150)
    ellipse(width/2 - 60, 180, 120)
    ellipse(width/2 + 60, 180, 120)
    fill(0)
    ellipse(width/2 - 25, height/2 - 75, 15, 30)
    ellipse(width/2 + 25, height/2 - 75, 15, 30)
    fill("#F59DCF")
    ellipse(width/2, height/2 - 50, 40, 20)
}

function dog() {                                                                                //Lines 239-252 draw the dog
    fill("#7A4211")
    rect(width/2 - 200, height/2 - 100, 400, 300)
    fill("#99551A")
    rect(width/2 - 100, height/2 - 250, 200, 300)
    fill("#5C320E")
    rect(width/2 - 175, 50, 100, 200)
    rect(width/2 + 75, 50, 100, 200)
    fill(0)
    ellipse(width/2 - 40, height/2 - 100, 50, 75)
    ellipse(width/2 + 40, height/2 - 100, 50, 75)
    fill("#F59DCF")
    arc(width/2, height/2 + 50, 125, 125, 0, PI, CHORD);
}

function crow() {                                                                               //Lines 254-269 draw the crow
    fill("#FFFF00")
    triangle(width/2 - 100, height/2 - 50, width/4 - 50, height/4 + 25, width/2 - 100, height/2 - 150)
    fill(0)
    ellipse(width/2, height/2 - 100, 300, 200)
    ellipse(width/2 + 25, height/2 + 50, 200, 300)
    fill(255)
    translate(width/2 - 25, height/2 - 125)
    beginShape();
    vertex(-80,0);
    bezierVertex(-30,-50,30,-50,80,0);
    bezierVertex(30,50,-30,50,-80,0)
    endShape();
    fill(0)
    ellipse(width/2 - 375, height/2 - 300, 50)
}

function snake() {                                                                              //Lines 271-283 draw the snake
    fill("#A0FF0F")
    triangle(width/2, height/2, width/2 + 200, height - 100, width/2 - 200, height - 100)
    rect(width/2 - 30, height/4, 60, 300)
    fill("#FF0000")
    triangle(width/2 - 25, height/2 - 75, width/2 + 25, height/2 - 30, width/2 - 10, height/2 + 75)
    triangle(width/2 + 25, height/2 - 75, width/2 - 25, height/2 - 30, width/2 + 10, height/2 + 75)
    fill("#A0FF0F")
    triangle(width/2, height/2, width/2 + 150, 100, width/2 - 150, 100)
    fill(0)
    ellipse(width/2 - 75, height/2 - 150, 25, 50)
    ellipse(width/2 + 75, height/2 - 150, 25, 50)
}

function bandit() {                                                                             //Lines 285-302 draw the bandit
    fill(0)
    ellipse(width/2, height/2 - 100, 200)
    fill("#F0D0B4")
    ellipse(width/2 - 30, height/2 - 125, 50)
    ellipse(width/2 + 30, height/2 - 125, 50)
    fill(255)
    ellipse(width/2 - 30, height/2 - 125, 25)
    ellipse(width/2 + 30, height/2 - 125, 25)
    fill(0)
    ellipse(width/2 - 30, height/2 - 125, 12.5)
    ellipse(width/2 + 30, height/2 - 125, 12.5)
    quad(width/2 - 40, height/2 - 25, width/2 + 40, height/2 - 25, width/2 + 70, height/2 + 250, width/2 - 70, height/2 + 250)
    fill(255)
    rect(width/2 -100, height/2 + 10, 200, 50)
    rect(width/2 -100, height/2 + 110, 200, 50)
    rect(width/2 -100, height/2 + 210, 200, 50)
}

function knight() {                                                                             //Lines 304-313 draw the knight
    fill(150)
    ellipse(width/2, height/3, 200)
    triangle(width/2, height/3 - 100, width/2, height/3 + 100, width/2 - 250, height/3)
    ellipse(width/2, height/2 + 100, 275)
    rect(width/2 - 300, height/2 + 25, 600, 60)
    fill(100)
    ellipse(width/2 - 250, height/2 + 50, 200)
    rect(width/2 + 225, height/2 - 150, 50, 250)
}

function dragon() {                                                                             //Lines 315-330 draw the dragon
    fill("#A0FF0F")
    rect(width/2 - 100, 100, 300, 300)
    rect(width/2 - 300, 100, 400, 100)
    rect(width/2 + 200, 100, 400, 100)
    rect(0, 100, 200, 200)
    rect(width - 100, 100, 100, 400)
    rect(width/2 - 50, 100, 50, 450)
    rect(width/2 + 100, 100, 50, 450)
    for(let k = 0; k < 8; k++){
        triangle(800 - (k * 100), 0, 800 - (k * 100), 100, 700 - (k * 100), 100)
    }
    fill(0)
    rect(25, 150, 50, 50)
    rect(125, 150, 50, 50)
}

function zalzibar() {                                                                           //Lines 332-349 draw Zalzibar
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    background(r, g, b)
    fill("#AF00FF")
    quad(width/2 - 20, height/2 + 100, width/2 - 20, height/2 + 140, width/4 , height/2 + 70, width/4, height/2 - 50)
    quad(width/2 + 20, height/2 + 100, width/2 + 20, height/2 + 140, width/2 + 200 , height/2 + 70, width/2 + 200, height/2 - 50)
    fill("#FF00FF")
    quad(width/2 - 40, height/2 + 30, width/2 + 40, height/2 + 30, width/2 + 70, height/2 + 250, width/2 - 70, height/2 + 250)
    fill("#F0D0B4")
    ellipse(width/2, height/2, 175)
    fill("#FF00FF")
    triangle(width/2 - 100, height/2, width/2, height/2 - 200, width/2 + 100, height/2)
    fill("#AF00FF")
    rect(width/2 - 150, height/2 - 25, 300, 25)
}