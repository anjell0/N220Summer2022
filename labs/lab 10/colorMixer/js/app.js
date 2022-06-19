//Angelo Allen
//June 15, 2022
//N220-11088

let boxColor = document.getElementById('boxColor')                          //Lines 5-10 get elements from the
let colorDisplay = document.getElementById('colorDisplay')                  //HTML and create variables
var r = 0;
var g = 0;
var b = 0;
var currentColor = "rgb("+r+","+g+","+b+")"

boxColor.style.backgroundColor = currentColor                               //Lines 12-17 create stylings for the
boxColor.style.height = "300px"                                             //div box that displays color and a line
boxColor.style.width = "600px"                                              //that displays the current color value

colorDisplay.innerHTML = "Current Color: " + currentColor
colorDisplay.style.fontSize = "50px"

function updateColor(event) {                                               //Lines 19-38 define the function 
    let chosenColor = event.target.getAttribute('data-color')               //"updateColor" which will, when the
    let increaseAmount = Number(event.target.getAttribute('data-amount'))   //buttons are pressed, will take the
                                                                            //button's data attributes for color and
    if(chosenColor == "r") {                                                //amount to check which color should be
        r += increaseAmount                                                 //increased and by how much. These
    }else if(chosenColor == "g") {                                          //increases are then updated and
        g += increaseAmount                                                 //displayed on screen with the colored
    }else if(chosenColor == "b") {                                          //div updating in color as well
        b += increaseAmount
    }

    currentColor = "rgb("+r+","+g+","+b+")"

    boxColor.style.backgroundColor = currentColor
    boxColor.style.height = "300px"
    boxColor.style.width = "600px"

    colorDisplay.innerHTML = "Current Color: " + currentColor
}