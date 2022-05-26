//Angelo Allen
//May 26, 2022
//N220-11088

let dvOno = document.getElementById("ono")          //Line 5 creates a div element titled "ono"

dvOno.style.backgroundColor = "#0000D4"             //Line 7-9 creates a blue square div
dvOno.style.height = "100px"
dvOno.style.width = "100px"

function change() {                                 //Lines 11-13 create a function called "change"
    dvOno.style.backgroundColor = "#000000"         //that is called in the HTML that will change
}                                                   //the box's color to black when the mouse moves
                                                    //on the div

function goBack() {                                 //Lines 16-18 creat a function called "goBack"
    dvOno.style.backgroundColor = "#0000D4"         //that is called in the HTML that will change
}                                                   //the box's color back to blue when the mouse
                                                    //moves off the div