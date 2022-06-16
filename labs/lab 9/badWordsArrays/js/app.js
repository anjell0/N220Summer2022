//Angelo Allen
//June 14, 2022
//N220-11088

let txtBad = document.getElementById('txtBad')                          //Lines 5-6 get elements from the HTML
let badTxt = document.getElementById('badTxt')  

function search() {                                                     //Lines 8-26 define a funciton "search"
    let badWordCount = 0                                                //that will, when the button is clicked,
    let inputText = txtBad.value;                                       //take a text input from the user and
    let searchedText = inputText.split(" ")                             //split every word into an array of 
    let wordSearch = searchedText.filter(function(currentElement) {     //strings. Then, "wordSearch" will filter
        return currentElement === "clear" ||                            //out every iteration of "clear", "water",
            currentElement === "water" || currentElement === "tires"    //and "tires" and make a separate array of
    })                                                                  //them. Then, for each item in the new
                                                                        //array, "badwordCount" will increase by
    for(let i = 0; i < wordSearch.length; i++) {                        //1 and then a message will display,
        badWordCount++                                                  //alerting the user how many "bad words"
    }                                                                   //were found in their text. The text field
                                                                        //is cleared after every button click
    badTxt.innerHTML = "There were " + badWordCount + 
            " bad words in your text!"
    badTxt.style.fontSize = "30px"

    txtBad.value = ""
}