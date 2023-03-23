let fruits = ["apple", "mango", "grapes"];
let vegetables = ["tomato", "onion", "potato"];
let meat = ["chicken", "fish", "goat"];

let Grocerylist = [fruits, vegetables, meat];

for(let list of Grocerylist){
    for(let food of list){
        console.log(list);
    }
}

