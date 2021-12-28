
const answers = ["rock", "paper", "scissor"];

const rock = document.querySelector('#rock');
rock.addEventListener("click", function() {
  playRound();
});

const paper = document.querySelector('#paper');
paper.addEventListener("click", function() {
  playRound2();
});

const scissor = document.querySelector('#scissor');
scissor.addEventListener("click", function() {
  playRound3();
});


function computerPlay() {
  return answers[Math.floor(Math.random() * answers.length)];
}

function playerPlay() {
  return answers[Math.floor(Math.random() * answers.length)];
}

function playRound() {
  const computerSelection = computerPlay();
  let playerSelection = "rock";
  


   

  //PLAYER ROCK
  if (playerSelection == "rock" && computerSelection == "paper")
    console.log("You lost. Paper beats Rock!");
  else if (playerSelection == "rock" && computerSelection == "rock")
  console.log("You tied!");
  else if (playerSelection == "rock" && computerSelection == "scissor")
  console.log("You won. Rock beats scissors!");

  //PLAYER PAPER
  else if (playerSelection == "paper" && computerSelection == "paper")
  console.log("You tied!");
  else if (playerSelection == "paper" && computerSelection == "rock")
  console.log("You won. Paper beats rock!");
  else if (playerSelection == "paper" && computerSelection == "scissor")
  console.log("You lost. Scissor beats Paper!");
    
  //PLAYER SCISSOR
  else if (playerSelection == "scissor" && computerSelection == "paper")
  console.log("You won. Scissor beats Paper!");
  else if (playerSelection == "scissor" && computerSelection == "rock")
  console.log("You lost. Rock beats Scissor!");
  else if (playerSelection == "scissor" && computerSelection == "scissor")
  console.log("You tied!");
}


function game() {
  return playRound();
}



// PAPER FUNCTION PLAY ROUND

function playRound2() {
  const computerSelection = computerPlay();
  let playerSelection = "paper";
  


   

  //PLAYER ROCK
  if (playerSelection == "rock" && computerSelection == "paper")
    console.log("You lost. Paper beats Rock!");
  else if (playerSelection == "rock" && computerSelection == "rock")
  console.log("You tied!");
  else if (playerSelection == "rock" && computerSelection == "scissor")
  console.log("You won. Rock beats scissors!");

  //PLAYER PAPER
  else if (playerSelection == "paper" && computerSelection == "paper")
  console.log("You tied!");
  else if (playerSelection == "paper" && computerSelection == "rock")
  console.log("You won. Paper beats rock!");
  else if (playerSelection == "paper" && computerSelection == "scissor")
  console.log("You lost. Scissor beats Paper!");
    
  //PLAYER SCISSOR
  else if (playerSelection == "scissor" && computerSelection == "paper")
  console.log("You won. Scissor beats Paper!");
  else if (playerSelection == "scissor" && computerSelection == "rock")
  console.log("You lost. Rock beats Scissor!");
  else if (playerSelection == "scissor" && computerSelection == "scissor")
  console.log("You tied!");
}

function game() {
  return playRound2();
}


// SCISSOR FUNCTION PLAY ROUND

function playRound3() {
  const computerSelection = computerPlay();
  let playerSelection = "scissor";
  


   

  //PLAYER ROCK
  if (playerSelection == "rock" && computerSelection == "paper")
    console.log("You lost. Paper beats Rock!");
  else if (playerSelection == "rock" && computerSelection == "rock")
  console.log("You tied!");
  else if (playerSelection == "rock" && computerSelection == "scissor")
  console.log("You won. Rock beats scissors!");

  //PLAYER PAPER
  else if (playerSelection == "paper" && computerSelection == "paper")
  console.log("You tied!");
  else if (playerSelection == "paper" && computerSelection == "rock")
  console.log("You won. Paper beats rock!");
  else if (playerSelection == "paper" && computerSelection == "scissor")
  console.log("You lost. Scissor beats Paper!");
    
  //PLAYER SCISSOR
  else if (playerSelection == "scissor" && computerSelection == "paper")
  console.log("You won. Scissor beats Paper!");
  else if (playerSelection == "scissor" && computerSelection == "rock")
  console.log("You lost. Rock beats Scissor!");
  else if (playerSelection == "scissor" && computerSelection == "scissor")
  console.log("You tied!");
}

function game() {
  return playRound3();
}


