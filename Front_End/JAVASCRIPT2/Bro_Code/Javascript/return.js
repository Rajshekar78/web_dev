let area;
let width;
let height;

width = window.prompt("Enter Width:");
height = window.prompt("Enter Height:");

area = getArea(width, height);

console.log("The area is", area);

function getArea(width, height){
    return width * height;   
}
