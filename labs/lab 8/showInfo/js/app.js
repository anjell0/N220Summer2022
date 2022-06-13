//Angelo Allen
//June 12, 2022
//N220-11088

let nav = ["Home", "About", "Contact"]              //Line 5 creates an array "nav"

let home = document.getElementById('home')          //Lines 7-9 get elements from the HTML
let about = document.getElementById('about')
let contact = document.getElementById('contact')

function showInfo(div, nav, navIter) {              //Lines 11-14 define a function "showInfo" that will, when
    div.innerHTML = nav + navIter                   //clicked, display the array string associated with the button
    div.style.fontSize = "30px"                     //alongside the current iterand by means of taking specific
}                                                   //arguments listed in the button functions in the HTML