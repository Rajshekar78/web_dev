// let age = 21;

// if(age >=22){
//     console.log("Adult");
// }
// else {
// console.log("Teen");
// } 
let rows = window.prompt("Enter # of rows");
let columns = window.prompt("Enter # of Columns");

for (let i = 1; i<=rows; i+=1){
    for(let j =1; j<=columns; j+=1){
        console.log(columns)
        document.getElementById("myRect").innerHTML += j; 
    }
document.getElementById("myRect").innerHTML += "<br>";
}
