// executes the certain callback function for every array function and acreates new array

// let number = [1, 2, 3, 4, 5];
// let squares = number.map(square);
// squares.forEach(print);

// function square(element){
//     return Math.pow(element, 2)
// }

// function print(element){
//     console.log(element);
// }

let number = [1,2,3,4,5,6]
let squares = number.map(square);

squares.forEach(print);

function square(ele){
return Math.pow(ele, 2)

}
function print(ele){
console.log(ele);
}

