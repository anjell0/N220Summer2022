//Angelo Allen
//June 14, 2022
//N220-11088

let objects = [                                         //Lines 5-9 create an array of objects,
    {color: "#FF0000", height: 100, width: 300},        //"objects" that store color, height,
    {color: "#FFFF00", height: 200, width: 200},        //and width for 3 different objects
    {color: "#ff0000", height: 300, width: 100},
]

for(let i = 0; i < objects.length; i++) {               //Lines 11-20 create a loop that will
    let newDiv = document.createElement('div')          //create a new div for each object in
                                                        //the array "objects" with stylings
    newDiv.style.backgroundColor = objects[i].color;    //relative to the current iterand's
    newDiv.style.height = objects[i].height + "px";     //object values
    newDiv.style.width = objects[i].width + "px";
    newDiv.style.float = "left"

    document.body.appendChild(newDiv)
}