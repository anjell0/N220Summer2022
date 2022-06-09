//Angelo Allen
//June 8, 2022
//N220-11088

let txtTipper = document.getElementById("txtTipper")            //Line 5 gets the element "txtTipper" from the HTML

function tip() {                                                //Lines 7-15 create a function "tip" that will take
    let billTotal = Number(txtTipper.value);                    //(only) a number input and multiply it by .18. It
    let tipAmount = Math.round((billTotal * .18) * 100) / 100;  //will then log out a "Tip" amount and an overall
                                                                //"Total" when "Calculate" is pressed. The text box
    console.log("Tip: $" + tipAmount)                           //is then emptied
    console.log("Total: $" + (tipAmount + billTotal))

    txtTipper.value = "";
}