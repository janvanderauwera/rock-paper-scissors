let playermove = "";
let computermove = "";
let result = "";
let resultText = document.querySelector(".result");
let movesText = document.querySelector(".moves");
let scoreText = document.querySelector(".score");
let score = JSON.parse(localStorage.getItem("savedScore"));
let isAutoPlaying = false;
let autoPlayBtn = document.querySelector(".autoPlay-button");

if (score === null){
 score = {
  wins: 0,
  losses: 0,
  draws:0
 }
}

scoreText.innerHTML=(`wins:${score.wins}, losses:${score.losses}, ties:${score.draws}`);



function computerChoice() {
  let computer = Math.random(); 

  if (computer <= 0.33) {
    computermove = "rock";
  } else if (computer > 0.33 && computer <=0.66) {
    computermove = "paper";
  } else {
    computermove = "scissors";
  }
}

function playerChoice(choice){
  playermove = choice;
}


function myGame(){

  if (playermove === "rock"){
    if (computermove === "rock") {
      result = "it's a tie!";
      score.draws = score.draws + 1;
    } else if(computermove === "paper"){
      result = "you loose!";
      score.losses = score.losses + 1;
    } else if (computermove === "scissors") {
      result = "you win!";
      score.wins = score.wins + 1;
    }
  } else

  if (playermove === "paper"){
    if (computermove === "rock") {
      result = "You win!";
      score.wins = score.wins + 1;
    } else if(computermove === "paper"){
      result = "It's a tie!";
      score.draws = score.draws + 1;
    } else if (computermove === "scissors") {
      result = "you loose!";
      score.losses = score.losses + 1;
    }
  } else

  if (playermove === "scissors"){
    if (computermove === "rock") {
      result = "you loose!";
      score.losses = score.losses + 1;
    } else if(computermove === "paper"){
      result = "you win!";
      score.wins = score.wins + 1;
    } else if (computermove === "scissors") {
      result = "It's a tie";
      score.draws = score.draws + 1;
    }
  }

localStorage.setItem("savedScore",JSON.stringify(score));

}

function myFunction() {

 
computerChoice();
myGame();
console.log(playermove);
console.log(computermove);
console.log(JSON.stringify(score));
resultText.innerHTML=(`${result}`);
movesText.innerHTML=(`you chose:<img src="./images/${playermove}-emoji.png"</img class="result-emoticon">, computer chose:<img src="./images/${computermove}-emoji.png"</img class="result-emoticon">`);
scoreText.innerHTML=(`wins:${score.wins}, losses:${score.losses}, ties:${score.draws}`);

/*
  alert(`you chose ${playermove}, computer chose ${computermove}, ${result}`);
*/
}


function resetScore(){
  score.wins = 0;
  score.losses = 0;
  score.draws = 0;
  scoreText.innerHTML=(`wins:${score.wins}, losses:${score.losses}, ties:${score.draws}`);
  resultText.innerHTML = "";
  movesText.innerHTML="";
  localStorage.removeItem("savedScore");
}

function autoplay() {

if (isAutoPlaying == false){
  isAutoPlaying = true;
  autoPlayBtn.innerHTML = "Stop Autoplay";
  myInterval = setInterval(function() {  
    computerChoice();
    playermove = computermove;
    myFunction();}, 2000);    
    

  }  else {

    clearInterval(myInterval);
    autoPlayBtn.innerHTML = "Start Autoplay";
    isAutoPlaying = false;

  }



}

