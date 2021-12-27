
const answers = ["rock", "paper", "scissor"];

function computerPlay() {
  return answers[Math.floor(Math.random() * answers.length)];
}

function playerPlay() {
  return answers[Math.floor(Math.random() * answers.length)];
}

function playRound() {
  const computerSelection = computerPlay();
  let playerSelection = prompt("What do you choose? Rock, Paper or Scissors?");

  //PLAYER ROCK
  if (playerSelection == "rock" && computerSelection == "paper")
    alert("You lost. Paper beats Rock!");
  else if (playerSelection == "rock" && computerSelection == "rock")
    alert("You tied!");
  else if (playerSelection == "rock" && computerSelection == "scissor")
    alert("You won. Rock beats scissors!");

  //PLAYER PAPER
  else if (playerSelection == "paper" && computerSelection == "paper")
    alert("You tied!");
  else if (playerSelection == "paper" && computerSelection == "rock")
    alert("You won. Paper beats rock!");
  else if (playerSelection == "paper" && computerSelection == "scissor")
    alert("You lost. Scissor beats Paper!");
    
  //PLAYER SCISSOR
  else if (playerSelection == "scissor" && computerSelection == "paper")
    alert("You won. Scissor beats Paper!");
  else if (playerSelection == "scissor" && computerSelection == "rock")
    alert("You lost. Rock beats Scissor!");
  else if (playerSelection == "scissor" && computerSelection == "scissor")
    alert("You tied!");
}

function game() {
  return playRound(), playRound(), playRound(), playRound(), playRound()
  
}


