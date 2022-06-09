//Angelo Allen
//June 8, 2022
//N220-11088

let txtGuess = document.getElementById('txtGuess')      //Line 5 gets the element "txtGuess" from the HTML

function guess() {                                      //Lines 7-40 create the function "guess" which, when
    let answer = 4                                      //a value is typed into the input box and the "Make
    let yourGuess = Number(txtGuess.value)              //Guess!" button is clicked, you will see a line of
                                                        //text that will tell you if your guess is "Too high",
    if(yourGuess < answer) {                            //"Too low", or "Correct". The fields will be emptied
        let low = document.createElement('div')         //with each click of the button

        low.innerHTML = "Too low!"
        low.style.fontSize = "30px"

        document.body.appendChild(low)

        txtGuess.value = ""
    }else if(yourGuess > answer) {
        let high = document.createElement('div')

        high.innerHTML = "Too high!"
        high.style.fontSize = "30px"

        document.body.appendChild(high)

        txtGuess.value = ""
    }else if(yourGuess == answer) {
        let newAnswer = 1 + Math.floor(Math.random() * 20)
        let correct = document.createElement('div')

        correct.innerHTML = "Correct! Try to guess the new number!"
        correct.style.fontSize = "30px"

        document.body.appendChild(correct)

        answer = 8
        txtGuess.value = ""
    }

}