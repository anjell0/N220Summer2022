//Angelo Allen
//June 8, 2022
//N220-11088

let txtGreet = document.getElementById("txtGreet")      //Line 5 gets the element "txtGreet" from the HTML

function greetMe() {                                    //Lines 7-12 create a function "greet" that will
    console.log("Hello, " + txtGreet.value +            //log out a greeting phrase, inputting a typed in
                        "! Nice to meet you!");         //name (or value) and then will clear the text box
                                                        //once "Submit" is pressed
    txtGreet.value = " ";
}