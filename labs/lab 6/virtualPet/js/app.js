// Angelo Allen
// May 28, 2022
// N220-11088

let pet = {                                                 //Lines 5-10 create an object "pet" with values
    name: "Jimbo",                                          //for "name", "energy", "happiness", and "age"
    energy: 20,
    happiness: 50,
    age: 1
}

let name = document.getElementById("name");                 //Lines 12-15 create div elements for "name",
let age = document.getElementById("age")                    //"age", "hunger", and "mood"
let hunger = document.getElementById("hunger");
let mood = document.getElementById("mood");

name.innerHTML = pet.name                                   //Lines 17-34 create divs to display the words
name.style.fontSize = "50px"                                //"Jimbo", "Energy:" including the current
name.style.margin = "40px"                                  //energy, "Happiness:" including the current
name.style.float = "left"                                   //happiness, and "Age:" including the current 
                                                            //age
hunger.innerHTML = "Energy: " + pet.energy;
hunger.style.fontSize = "50px"
hunger.style.margin = "40px"
hunger.style.float = "left"

mood.innerHTML = "Happiness: " + pet.happiness;
mood.style.fontSize = "50px"
mood.style.margin = "40px"
mood.style.float = "left"

age.innerHTML = "Age: " +pet.age
age.style.fontSize = "50px"
age.style.margin = "40px"

function feed(){                                            //Lines 36-44 create a function "feed()" that
    let newEnergy = pet.energy + 40;                        //creates variables to display updated stats
    let newHappiness = pet.happiness - 15;                  //after running the "statusUpdate()" function.
                                                            //This function is run when the "feed" button
    pet.energy = newEnergy                                  //is clicked
    pet.happiness = newHappiness                                                        
    
    statusUpdate()
}

function play(){                                            //Lines 46-54 create a function "play()" that
    let newHappiness = pet.happiness + 20;                  //creates variables to display updated stats
    let newEnergy = pet.energy - 10;                        //after running the "statusUpdate()" function.
                                                            //This function is run when the "play" button
    pet.energy = newEnergy                                  //is clicked
    pet.happiness = newHappiness                                                        

    statusUpdate()
}

function statusUpdate() {                                   //Lines 56-88 define a function,
                                                            //"statusUpdate", that, when run in the
    if(pet.energy <= 0 || pet.happiness <= 0){              //"feed()" or "play()" functions, will update
        let petUpdate = document.createElement('div')       //the displayed stats of the "pet" with the new
                                                            //and related stats (increased energy and 
        petUpdate.innerHTML = "Jimbo has died :("           //decreased happiness when fed or increased
        petUpdate.style.fontSize = "40px"                   //happiness and decreased energy when played
        petUpdate.style.margin = "40px"                     //with). This function will also display a 
                                                            //message: "Jimbo has died :(" if either stat
        document.body.appendChild(petUpdate)                //reaches 0 or below OR "Jimbo is very happy :)"
                                                            //if both stats are over 100. The pet's age will
    }else if(pet.energy >= 100 && pet.happiness >= 100){    //also increase by 1 when both stats exceed 100
        let petUpdate = document.createElement('div')
        let newAge = pet.age + 1

        petUpdate.innerHTML = "Jimbo is very happy :)"
        petUpdate.style.fontSize = "40px"
        petUpdate.style.margin = "40px"
        pet.age = newAge

        document.body.appendChild(petUpdate)
    }

    hunger.innerHTML = "Energy: " + pet.energy;
    hunger.style.fontSize = "50px"
    hunger.style.margin = "40px"
    
    mood.innerHTML = "Happiness: " + pet.happiness;
    mood.style.fontSize = "50px"
    mood.style.margin = "40px"

    age.innerHTML = "Age: " + pet.age
}