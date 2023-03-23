let a = 1; 
let b = 2; 
let c = 3;
let d = 4;
let e = 5;

console.log(sum(a, b, d, e));

function sum(y, z, ...numbers){
    let total = 0;
    for(let num of numbers){
        total += num
    }
    return total
}

// function sum(a,b){
//     return a+b;
// }