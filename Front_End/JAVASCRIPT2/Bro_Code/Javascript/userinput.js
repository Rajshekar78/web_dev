// USER Input 

// Easy way

// let username = window.prompt("Whats is your name");
// console.log(username);

// DIFFICULT WAY HTML textbox

let username;

document.getElementById("myButton").onclick = function(){

    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = username;
}