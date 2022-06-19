//Angelo Allen
//June 15, 2022
//N220-11088

function answer(event) {                                        //Lines 5-13 define the function "answer"
    let theAnswer = document.createElement('div')               //so that when a button is clicked, the
    let element = event.target.getAttribute('data-answers')     //data attribute for "answers" in each
                                                                //button will display on the screen as an
    theAnswer.innerHTML = element;                              //"answer" to the button's "question"
    theAnswer.style.fontSize = "30px"

    document.body.appendChild(theAnswer)
}