// Angelo Allen
// May 28, 2022
// N220-11088

let player = {                                                          //Lines 5-15 create objects for "player"
    playerHealth: 100,                                                  //and "enemy" storing values for "health",
    playerAttack: 50,                                                   //"attack", and "defense" for both
    playerDefense: 50
}

let enemy = {
    enemyHealth: 75,
    enemyAttack: 75,
    enemyDefense: 25
}

let playerName = document.getElementById("pname");                      //Lines 17-24 create div elements for
let playerHP = document.getElementById("php")                           //"name", "hp", "attack", and "defense"
let playerATK = document.getElementById("pattack");                     //for both "player" and "enemy"
let playerDEF = document.getElementById("pdefense");
let enemyName = document.getElementById("ename");
let enemyHP = document.getElementById("ehp")
let enemyATK = document.getElementById("eattack");
let enemyDEF = document.getElementById("edefense");

playerName.innerHTML = "You";                                           //Lines 26-57 display player and enemy
playerName.style.fontSize = "50px";                                     //name, hp, attack, and defense initially
playerName.style.margin = "10px";

playerHP.innerHTML = "HP: " + player.playerHealth;
playerHP.style.fontSize = "50px";
playerHP.style.margin = "10px";

playerATK.innerHTML = "ATK: " + player.playerAttack;
playerATK.style.fontSize = "50px";
playerATK.style.margin = "10px";

playerDEF.innerHTML = "DEF: " + player.playerDefense;
playerDEF.style.fontSize = "50px";
playerDEF.style.margin = "10px";

enemyName.innerHTML = "Zalzibar";
enemyName.style.fontSize = "50px";
enemyName.style.margin = "10px";
enemyName.style.marginTop = "100px"

enemyHP.innerHTML = "HP: " + enemy.enemyHealth;
enemyHP.style.fontSize = "50px";
enemyHP.style.margin = "10px";

enemyATK.innerHTML = "ATK: " + enemy.enemyAttack;
enemyATK.style.fontSize = "50px";
enemyATK.style.margin = "10px";

enemyDEF.innerHTML = "DEF: " + enemy.enemyDefense;
enemyDEF.style.fontSize = "50px";
enemyDEF.style.margin = "10px";

function fight() {                                                      //Lines 59-81 define the function "fight()"
                                                                        //which, when the button is pressed, will
    player.playerHealth -= enemy.enemyAttack - player.playerDefense;    //calculate and display new playerHP and
    enemy.enemyHealth -= player.playerAttack - enemy.enemyDefense;      //enemyHP based on their attack and defense
                                                                        //stats. When the enemyHP reaches 0 or lower,
    playerHP.innerHTML = "HP: " + player.playerHealth;                  //a message will display stating that you have
    playerHP.style.fontSize = "50px";                                   //defeated them.
    playerHP.style.margin = "10px";    

    enemyHP.innerHTML = "HP: " + enemy.enemyHealth;
    enemyHP.style.fontSize = "50px";
    enemyHP.style.margin = "10px";

    if(enemy.enemyHealth <= 0) {
        let enemyUpdate = document.createElement('div')

        enemyUpdate.innerHTML = "You defeated Zalzibar! Refresh to Try Again!"
        enemyUpdate.style.fontSize = "40px"
        enemyUpdate.style.margin = "40px"

        document.body.appendChild(enemyUpdate)
    }
}