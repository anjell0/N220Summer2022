//Angelo Allen
//May 26, 2022
//N220-11088

for(var i = 0; i < 100; i++){                               //Lines 5-18 loop through the div stylings
    var boxes = document.createElement('div');              //to create 100 div boxes of random colors
    var r = Math.floor(Math.random()*255);
    var g = Math.floor(Math.random()*255);
    var b = Math.floor(Math.random()*255);

    boxes.style.backgroundColor = "rgb("+r+","+g+","+b+")";
    boxes.style.height = "20px";
    boxes.style.width = "20px";
    boxes.style.float = "left";
    boxes.style.margin = "4.3px";

    document.getElementById('boxes').appendChild(boxes);
}