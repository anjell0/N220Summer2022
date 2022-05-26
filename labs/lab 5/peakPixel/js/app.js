//Angelo Allen
//May 26, 2022
//N220-11088

let dvBox = document.getElementById("box")      //Lines 5-6 create a div element called "Box"
let size = 100                                  //and a variable for "size"
                                                

dvBox.style.backgroundColor = "#006500"         //Lines 9-11 style the div to be green and 
dvBox.style.height = size + "px"                //call the "size" variable to set its size
dvBox.style.width = size + "px"

function grow() {                               //Lines 13-19 define the function "grow"
    let newHeight = dvBox.offsetHeight * 1.1;   //called on in the HTML with variables
    let newWidth = dvBox.offsetWidth * 1.1;     //for "newHeight" and "newWidth" with values
                                                //defined as the box div's height and width
    dvBox.style.height = newHeight + "px"       //offsets multiplied by 1.1 so that the box
    dvBox.style.width = newWidth + "px"         //increases in size with each click
}