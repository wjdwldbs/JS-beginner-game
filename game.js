var player1 = document.querySelector("#p1");
var player2 = document.querySelector("#p2");
var score1 = document.querySelector("#score1");
var score2 = document.querySelector("#score2");
var numInput = document.querySelector("input");
var newPlay = document.querySelector("#newPlay");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;
var resetBut = document.querySelector("#reset");

player1.addEventListener("click", function(){
    if(!gameOver){
    p1Score ++;
    if (p1Score === winningScore){
        display1.classList.add("winner");
        gameOver = true;
    }
    display1.textContent = p1Score;
    }       
})

player2.addEventListener("click", function(){
    if(!gameOver){
        p2Score ++;
        if (p2Score === winningScore){
            display2.classList.add("winner");
            gameOver = true;
        }
        display2.textContent = p2Score;
    }
})


function reset(){
    p1Score = 0;
    display1.textContent = p1Score;
    display1.classList.remove("winner");
    p2Score = 0;
    display2.textContent = p2Score;
    display2.classList.remove("winner");
    gameOver = false;
}

resetBut.addEventListener("click", function(){
    reset();
});

numInput.addEventListener("change", function(){
    newPlay.textContent = this.value;
    winningScore = Number(this.value);
    reset();
   
})
