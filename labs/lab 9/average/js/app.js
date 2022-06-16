//Angelo Allen
//June 14, 2022
//N220-11088

let txtAverage = document.getElementById('txtAverage')                  //Line 5 gets the element from the HTML

function averageNumbers() {                                             //Lines 7-29 define a function "averageNumbers"
    let numbersInput = txtAverage.value;                                //that will, when the button is clicked, take a
                                                                        //string of numbers input by the user, remove the
    let numbersAveraged = numbersInput.split(",")                       //commas, turn them from strings to numbers, and
                                                                        //will calculate the sum of the numbers and their
    let sum = 0                                                         //average. This will then display a message telling
    let average = 0                                                     //the user the sum and average of their numbers. The
                                                                        //input field is cleared after each button click
    for(let i = 0; i < numbersAveraged.length; i++) {
        sum += Number(numbersAveraged[i])
        average += Number(numbersAveraged[i]/numbersAveraged.length)
    }

    let answer = document.createElement('div')

    answer.innerHTML = "The sum of your numbers is " + sum + 
                        " and the average is " + average + "."
    answer.style.fontSize = "30px"

    document.body.appendChild(answer)

    txtAverage.value = ""
}