//Angelo Allen
//June 8, 2022
//N220-11088

let txtX1 = document.getElementById('txtX1')                    //Lines 5-8 get elements "txtX1", "txtY1", "txtX2",
let txtY1 = document.getElementById('txtY1')                    //and "txtY2" from the HTML
let txtX2 = document.getElementById('txtX2')
let txtY2 = document.getElementById('txtY2')

function calculate() {                                          //Lines 10-23 create function "calculate" which
    let x1 = Number(txtX1.value)                                //runs a distance calculation for the 4 values
    let y1 = Number(txtY1.value)                                //input and outputs it to the console. All fields
    let x2 = Number(txtX2.value)                                //are cleared after pressing the "Calculate Distance"
    let y2 = Number(txtY2.value)                                //button
    let d = Math.round(Math.sqrt(x1*x2 + y1*y2) * 100) / 1000

    console.log(d)

    txtX1.value = "";
    txtY1.value = "";
    txtX2.value = "";
    txtY2.value = "";
}