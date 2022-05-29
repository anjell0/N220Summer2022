// Angelo Allen
// May 28, 2022
// N220-11088

let pet = {
    name: "Jimbo",
    energy: 20,
    happiness: 50,
    age: 1
}
let name = document.getElementById("name");
let age = document.getElementById("age")
let hunger = document.getElementById("hunger");
let mood = document.getElementById("mood");

name.innerHTML = pet.name
name.style.fontSize = "50px"
name.style.margin = "40px"
name.style.float = "left"

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

function feed(){
    let newEnergy = pet.energy + 5;
    let newHappiness = pet.happiness - 5;
    let newAge = pet.age + 1;

    pet.energy = newEnergy
    pet.happiness = newHappiness

    statusUpdate()
}

function play(){
    let newHappiness = pet.happiness + 5;
    let newEnergy = pet.energy - 5;
    let newAge = pet.age + 1;

    pet.energy = newEnergy
    pet.happiness = newHappiness

    statusUpdate()
}

function statusUpdate() {

    if(pet.energy <= 0 || pet.happiness <= 0){
        let petUpdate = document.createElement('div')

        petUpdate.innerHTML = "Jimbo has died :("
        petUpdate.style.fontSize = "40px"
        petUpdate.style.margin = "40px"

        document.body.appendChild(petUpdate)
        console.log("Jimbo has died :(")
    }else if(pet.energy >= 100 && pet.happiness >= 100){
        let petUpdate = document.createElement('div')

        petUpdate.innerHTML = "Jimbo is very happy :)"
        petUpdate.style.fontSize = "40px"
        petUpdate.style.margin = "40px"
        pet.age = newAge

        document.body.appendChild(petUpdate)
        console.log("Jimbo is very happy :)")
    }

    hunger.innerHTML = "Energy: " + pet.energy;
    hunger.style.fontSize = "50px"
    hunger.style.margin = "40px"
    
    mood.innerHTML = "Happiness: " + pet.happiness;
    mood.style.fontSize = "50px"
    mood.style.margin = "40px"

    age.innerHTML = "Age: " + pet.age

    console.log("Energy: " + pet.energy)
    console.log("Happiness: " + pet.happiness)
}