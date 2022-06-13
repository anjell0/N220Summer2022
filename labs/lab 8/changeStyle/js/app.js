//Angelo Allen
//June 12, 2022
//N220-11088

let boxOne = document.getElementById("boxOne");         //Lines 5-7 get elements from the HTML
let boxTwo = document.getElementById("boxTwo");
let boxThree = document.getElementById("boxThree");

boxOne.style.backgroundColor = "#FF0000"                //Lines 9-25 style the three divs initially
boxOne.style.width = "100px"
boxOne.style.height = "100px"
boxOne.style.marginLeft = "50px"
boxOne.style.float = "left"

boxTwo.style.backgroundColor = "#FF0000"
boxTwo.style.width = "100px"
boxTwo.style.height = "100px"
boxTwo.style.marginLeft = "50px"
boxTwo.style.float = "left"

boxThree.style.backgroundColor = "#FF0000"
boxThree.style.width = "100px"
boxThree.style.height = "100px"
boxThree.style.marginLeft = "50px"
boxThree.style.float = "left"

function changeStyle(div, colour, size) {               //Lines 27-30 create a function "changeStyle" that
    div.style.backgroundColor = colour                  //takes arguments for "div", "colour", and "size" and,
    div.style.width = size                              //when the divs are clicked, the "div" argument's
}                                                       //background color and width will be changed to
                                                        //"colour" and "size". In the HTML, each "div" is set
                                                        //to match the current div and the "colour" and "size"
                                                        //are set to blue and 50px