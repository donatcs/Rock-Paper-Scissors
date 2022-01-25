
let playerScore = 0
let computerScore = 0


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


///



///




function computerPlay() {
  return answers[Math.floor(Math.random() * answers.length)];
}
let result = ""




function playRound() {
  const computerSelection = computerPlay();
  let playerSelection = "rock";
  



  //PLAYER ROCK
  if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore += 1
    result = ('You lost!' + "<br><br>Player Score:" + playerScore + "<br>Computer Score:" + computerScore)
    document.getElementById('result').innerHTML = result
    
  }
  
  else if (playerSelection == "rock" && computerSelection == "rock") {
  computerScore += 0
  playerScore += 0
  result = ('Thats a tie!' + "<br><br>Player Score:" + playerScore + "<br>Computer Score:" + computerScore)
  document.getElementById('result').innerHTML = result
  
}

  else if (playerSelection == "rock" && computerSelection == "scissor")  {
  playerScore += 1
    result = ('You win!' + "<br><br>Player Score:" + playerScore + "<br>Computer Score:" + computerScore)
    document.getElementById('result').innerHTML = result
    return
  
  }
    

}



// PAPER FUNCTION PLAY ROUND

function playRound2() {
  const computerSelection = computerPlay();
  let playerSelection = "paper";
  




  //PLAYER PAPER
      if (playerSelection == "paper" && computerSelection == "paper") {
    computerScore += 0
    playerScore += 0
    result = ('Thats a tie!' + "<br><br>Player Score:" + playerScore + "<br>Computer Score:" + computerScore)
    document.getElementById('result').innerHTML = result
      
  }
    else if (playerSelection == "paper" && computerSelection == "rock") {
  playerScore += 1
  result = ('You win!' + "<br><br>Player Score:" + playerScore + "<br>Computer Score:" + computerScore)
  document.getElementById('result').innerHTML = result
  }
    else if (playerSelection == "paper" && computerSelection == "scissor"){
  computerScore += 1
     result = ('You lost!' + "<br><br>Player Score:" + playerScore + "<br>Computer Score:" + computerScore)
     document.getElementById('result').innerHTML = result
     return
     }
    
}

function game() {
  return playRound2();
}


// SCISSOR FUNCTION PLAY ROUND

function playRound3() {
  const computerSelection = computerPlay();
  let playerSelection = "scissor";

  //PLAYER SCISSOR
    if (playerSelection == "scissor" && computerSelection == "paper"){
  playerScore += 1
  result = ('You win!' + "<br><br>Player Score:" + playerScore + "<br>Computer Score:" + computerScore)
  document.getElementById('result').innerHTML = result
  }
    else if (playerSelection == "scissor" && computerSelection == "rock"){
    computerScore += 1
    result = ('You lost!' + "<br><br>Player Score:" + playerScore + "<br>Computer Score:" + computerScore)
    document.getElementById('result').innerHTML = result
    }

    else if (playerSelection == "scissor" && computerSelection == "scissor"){
  computerScore += 0
    playerScore += 0
    result = ('Thats a tie!' + "<br><br>Player Score:" + playerScore + "<br>Computer Score:" + computerScore)
    document.getElementById('result').innerHTML = result
      return
  }

}

function game() {
  return playRound3();
}

