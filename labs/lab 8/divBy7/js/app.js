//Angelo Allen
//June 12, 2022
//N220-11088

let txtNumber = document.getElementById("txtNumber")                //Line 5 gets the element from the HTML

function divide() {                                                 //Lines 7-29 define the function "divide()"
    let guess = Number(txtNumber.value)                             //so that, when clicked, if the "testIt"
                                                                    //function returns true, it will create
    if(testIt() === true){                                          //a div that says your input is divisible
        let correct = document.createElement('div')                 //by 7. If the function returns false, it
                                                                    //will tell you that your input is not
        correct.innerHTML = guess + " is divisble by 7!"            //divisible by 7. The input field is reset
        correct.style.fontSize = "30px"                             //after each click

        document.body.appendChild(correct)

        txtNumber.value = ""
    }else if(testIt() === false) {
        let incorrect = document.createElement('div')

        incorrect.innerHTML = guess + " is not divisible by 7!"
        incorrect.style.fontSize = "30px"

        document.body.appendChild(incorrect)

        txtNumber.value = ""
    }
}

function testIt() {                                                 //Lines 31-39 define the funtion "testIt"
    let guess = Number(txtNumber.value)                             //so that if your "guess" is divisble by
                                                                    //7, the function will return true. If the
    if(guess % 7 == 0){                                             //input is not divisble by 7, it will  
        return true                                                 //return false
    }else if(guess % 7 != 0){
        return false
    }
}