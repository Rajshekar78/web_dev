const answer = Math.floor(Math.random()*11+1);
let guesses = 0;

document.getElementById("submitbutton").onclick = function(){

    let guess = document.getElementById("guessField").value;
    guesses+=1;
    
    if (guess== answer){
        alert(`${answer} is the number. It took you${guesses} guesses`);
    }
    else if(guess < answer){
        alert("number is too small");
    }
    else{
        alert("Too Large");
    }
}

