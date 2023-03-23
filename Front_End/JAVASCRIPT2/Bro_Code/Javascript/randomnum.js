// x= Math.floor(Math.random()*6);
// y= Math.floor(Math.random()*6);
// z= Math.floor(Math.random()*6);

// console.log(x);
// console.log(y);
// console.log(z);

let x;
let y;
let z;

document.getElementById("do it").onclick = function(){

    x= Math.floor(Math.random()*6);
    y= Math.floor(Math.random()*6);
    z= Math.floor(Math.random()*6);
    document.getElementById("xramdom").innerHTML = x;
    document.getElementById("yramdom").innerHTML = y;
    document.getElementById("zramdom").innerHTML = z;
}