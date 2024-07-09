const buttonContainer = document.querySelector('.button-container');
const resultsDiv = document.querySelector('.results');
const scoreboard = document.querySelector('.scoreboard');
const winnerDiv = document.querySelector('.winner');
const resetBtn = document.querySelector('.reset');
let playerScore = 0;
let computerScore = 0;

buttonContainer.addEventListener('click', handlePlayerSelection);
resetBtn.addEventListener('click', resetGame);

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
  checkGameOver();
}

function updateDisplay(message) {
  resultsDiv.textContent = message;
  scoreboard.textContent = `Player: ${playerScore} || Computer: ${computerScore}`;
}

function checkGameOver() {
  if (playerScore === 5) {
    winnerDiv.textContent = 'You won the game!';
    disableButtons();
  } else if (computerScore === 5) {
    winnerDiv.textContent = 'You lost the game.';
    disableButtons();
  }
}

function disableButtons() {
  document.querySelectorAll('button').forEach(
    button => {
      if (button.classList.value !== 'reset') {
        button.disabled = true;
      }
    }
  );
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  updateDisplay('Please make a selection.');
}