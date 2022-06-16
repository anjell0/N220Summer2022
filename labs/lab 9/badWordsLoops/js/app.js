//Angelo Allen
//June 14, 2022
//N220-11088

let txtBad = document.getElementById('txtBad')                                  //Lines 5-6 get elements from the HTML
let badTxt = document.getElementById('badTxt')

function search() {                                                             //Lines 8-29 define a function that, when the
    let inputText = txtBad.value;                                               //button is pressed, will turn the input into
    let searchedText = inputText.split(" ")                                     //an array of strings, then, each time the 
    let badWordCount = 0                                                        //words "clear", "water", or "tires" are
                                                                                //matched, the "badWordCount" will increase by
    for(i = 0; i < searchedText.length; i++) {                                  //one. Then, a message will display telling
        let clear = "clear"                                                     //the user how many bad words were found in
        let water = "water"                                                     //the text. If none are found, a message 
        let tires = "tires"                                                     //displays saying no bad words were found.
                                                                                //The text field is cleared after each button
        if((searchedText[i].toUpperCase() == clear.toUpperCase()) ||            //press
            (searchedText[i].toUpperCase() == water.toUpperCase()) || 
            (searchedText[i].toUpperCase() == tires.toUpperCase())) {

            badWordCount++
            
            badTxt.innerHTML = "We found " + badWordCount + " bad words in your text!"
            badTxt.style.fontSize = "30px"
    
            txtBad.value = ""
        }else {
            badTxt.innerHTML = "We found no bad words in your text!"
            badTxt.style.fontSize = "30px"
        
            txtBad.value = ""
        }
        
    }
}