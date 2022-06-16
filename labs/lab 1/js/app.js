//    Angelo Allen
//    May 09, 2022
//    N220-11088

var l = 200                                         //Lines 5-20 store all variables for the future code;
var m = 400                                         //"l", "m", "r", "t", "c", "b" meaning "left", "middle",
var r = 600                                         //"right", "top", "center", and "bottom", respectively.
var t = 150                                         //"gr", "ye", "re", "br", "or", "dgr", "dye", "dre", "dbr",
var c = 300                                         //and "dor" meaning "green", "yellow", "red", "brown",
var b = 450                                         //"orange", "dark green", "dark yellow", "dark red",
var gr = "#B5D672"                                  //"dark brown", and "dark orange", respectively.
var ye = "#EFE585"
var re = "#D5767D"
var br = "#AA806E"
var or = "#EB985D"
var dgr = "#8AB65A"
var dye = "#C2AF5A"
var dre = "#A43F54"
var dbr = "#4C222C"
var dor = "#B76542"
var x = 50

function setup() {                                  //Lines 22-25 create a setup function which creates a
    createCanvas(800, 600)                          //canvas 800 pixels wide and 600 pixels tall and sets
    background(dgr)                                 //the background color to "dark green"
}

function draw() {                                   //Lines 27-79 draw several shapes and change them to 
    //Main Body/Hat                                 //different colors to complete a composition of an
    strokeWeight(2)                                 //image
    fill(dye)
    ellipse(m, b, 1200, 800)
    noStroke()
    fill(ye)
    ellipse(m, b+75, 1200, 800)

    //Face
    fill(gr)
    triangle(m-192, t+25, m-60, t-95, m, c+100)
    triangle(m-60, t-30, m, c+100, m+60, t-30)
    triangle(m+192, t+25, m, c+100, m+60, t-90)
    fill(dgr)
    triangle(m-150, t-13, m-60, t-95, m, t-25)
    triangle(m-60, t-95, m, t-25, m+60, t-95)
    triangle(m, t-25, m+60, t-95, m+150, t-13)

    //Stripes
    fill(br)
    quad(0, c, 0, c+100, 50, b, 50, c+50)
    quad(50, b, 50, c+50, l+25, c-15, l+50, c+50)
    quad(800, c, 800, c+100, 750, b, 750, c+50)
    quad(750, b, 750, c+50, r-25, c-15, r-50, c+50)

    //Mouth
    stroke(0)
    strokeWeight(2)
    fill(or)
    arc(m, c, 400, 75, -PI, 0, CHORD)
    arc(m, c-35, 75, 100, -PI, 0, OPEN)
    arc(m, c, 350, 500, 2*PI, PI, CHORD)
    fill(dbr)
    arc(m, c, 300, 450, 2*PI, PI, CHORD)
    fill(dre)
    noStroke()
    arc(m, b+18, 200, 200, -PI, 0, CHORD)
    ellipse(m, b, 195, 150)
    fill(re)
    arc(m, b+18, 150, 150, -PI, 0, CHORD)
    ellipse(m, b+12, 150, 127)

    //Eyes
    stroke(0)
    strokeWeight(2)
    fill(255, 255, 255)
    ellipse(m-75, t+25, 60, 115)
    ellipse(m+75, t+25, 60, 115)
    fill(0, 0, 0)
    ellipse(m-75, t+25, 60/2, 115/2)
    ellipse(m+75, t+25, 60/2, 115/2)
    
    magicCircle("#FF0000", 50, 50, 50)
    
}

    function magicCircle(color, y, size){
    
    fill(color)
    
    ellipse(x, y, size)
    
    x++
    }