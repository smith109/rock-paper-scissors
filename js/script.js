let humanScore = 0;
let computerScore = 0;

function getRandomNumber() {
  return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
  const randomNumber = getRandomNumber();

  if (randomNumber === 0) {
    return 'rock';
  } 
  
  if (randomNumber === 1) {
    return 'paper';
  }

  if (randomNumber === 2) {
    return 'scissors';
  }
}

function getHumanChoice() {
  const humanChoice = prompt('Rock, Paper or Scissors?');
  return humanChoice;
}

function updateScore(winner) {
  if (winner === 'human') {
    humanScore += 1;
  }

  if (winner === 'computer') {
    computerScore += 1;
  }
}
