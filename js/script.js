const buttonContainer = document.querySelector('.button-container');
const resultsDiv = document.querySelector('.results');
const scoreboard = document.querySelector('.scoreboard');
let playerScore = 0;
let computerScore = 0;

buttonContainer.addEventListener('click', handlePlayerSelection);

function getRandomNumber() {
  return Math.floor(Math.random() * 3);
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[getRandomNumber()];
}

function handlePlayerSelection(event) {
  const target = event.target;
  if (target.tagName === 'BUTTON') {
    const playerSelection = target.classList.value;
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    updateDisplay(`It's a tie! You both picked ${playerChoice}.`);
  }
  else if (playerChoice === 'rock' && computerChoice === 'scissors' ||
    playerChoice === 'paper' && computerChoice === 'rock' ||
    playerChoice === 'scissors' && computerChoice === 'paper') {
    updateScore('player');
    updateDisplay(`You win! ${capitalize(playerChoice)} beats ${computerChoice}.`);
  }
  else {
    updateScore('computer');
    updateDisplay(`You lose! ${capitalize(computerChoice)} beats ${playerChoice}.`);
  }
}

function updateScore(winner) {
  if (winner === 'player') {
    playerScore++;
  }
  if (winner === 'computer') {
    computerScore++;
  }
}

function updateDisplay(message) {
  resultsDiv.textContent = message;
  scoreboard.textContent = `Player: ${playerScore} || Computer: ${computerScore}`;
}

function declareWinner(playerScore, computerScore) {
  if (playerScore > computerScore) {
    console.log('You won the game!');
  } else if (playerScore < computerScore) {
    console.log('You lost the game.');
  } else {
    console.log('It\'s a tie. Would you like a rematch?');
  }
}