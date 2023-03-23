class player{
    score = 0;
     pause(){
        console.log("you paused the game");
     }
     exit(){
        console.log("you exited the game");
    
     }
}

const Player1 = new player();

Player1.score += 1;
console.log(Player1.score);
Player1.pause();