// Template Literals = `;

let Name = "Raj";
let money  = 500;
let balance = 600;

// console.log("hello", Name);
// console.log("Money credited is", money);
// console.log("Updated Bal is", balance);

let text = `Hello ${Name},<br>
Money credited is ${money},<br>
Updated Bal is ${balance}.`

// console.log(text);
document.getElementById("myRect").innerHTML = text;



