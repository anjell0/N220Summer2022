//Angelo Allen
//June 15, 2022
//N220-11088

let boxOne = document.getElementById('boxOne')                                      //Lines 5-7 get elements from the
let boxTwo = document.getElementById('boxTwo')                                      //HTML
let boxThree = document.getElementById('boxThree')

boxOne.style.backgroundColor = "#999"                                               //Lines 9-25 style three divs to
boxOne.style.height = "200px"                                                       //the page
boxOne.style.width = "200px"
boxOne.style.float = "left"
boxOne.style.marginLeft = "5px"

boxTwo.style.backgroundColor = "#999"
boxTwo.style.height = "200px"
boxTwo.style.width = "200px"
boxTwo.style.float = "left"
boxTwo.style.marginLeft = "5px"

boxThree.style.backgroundColor = "#999"
boxThree.style.height = "200px"
boxThree.style.width = "200px"
boxThree.style.float = "left"
boxThree.style.marginLeft = "5px"

function changeColor(event) {                                                       //Lines 27-29 define the function
    event.target.style.backgroundColor = event.target.getAttribute("data-color")    //"changeColor" that, when the div
}                                                                                   //is pressed, will change the
                                                                                    //color based on the divs data
                                                                                    //attribute for color