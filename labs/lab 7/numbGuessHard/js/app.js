//Angelo Allen
//June 8, 2022
//N220-11088

let txtGuess = document.getElementById('txtGuess')                      //Lines 5-6 get element "txtGuess" from
let answer = 4                                                          //the HTML and create a variable "answer"

function guess() {                                                      //Lines 8-41 create a function "guess"
    let yourGuess = Number(txtGuess.value)                              //for the "Make Guess" button that will
                                                                        //display an appropriate message if
    if(yourGuess < answer) {                                            //your guess is too high, too low, or
        let low = document.createElement('div')                         //correct. If the guess is correct, a
                                                                        //new number will be randomly generated
        low.innerHTML = "Too low!"                                      //prompting the user to play again
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

        answer = newAnswer
        txtGuess.value = ""
    }
}