//Angelo Allen
//June 8, 2022
//N220-11088

let txtUser = document.getElementById("txtUser");                           //Lines 5-6 get elements "txtUser" and
let txtPass = document.getElementById("txtPass");                           //"txtPass" from the HTML

function logIn() {                                                          //Lines 8-30 create a function "logIn"
    if((txtUser.value == "Username") && (txtPass.value == "Password")) {    //that will, if the correct information
        let correct = document.createElement('div')                         //is input, will display a "Success!"
                                                                            //message and clear the input boxes.
        correct.innerHTML = "Success!";                                     //If the correct information is not input,
        correct.style.fontSize = "30px";                                    //a "Wrong information!" message will
                                                                            //display and clear the input boxes.
        document.body.appendChild(correct);

        txtUser.value = ""
        txtPass.value = ""
    }else{
        let incorrect = document.createElement('div');

        incorrect.innerHTML = "Wrong information!";
        incorrect.style.fontSize = "30px";

        document.body.appendChild(incorrect)
        
        txtUser.value = ""
        txtPass.value = ""
    }
}