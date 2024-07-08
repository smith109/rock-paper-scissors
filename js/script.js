const buttonContainer = document.querySelector('.button-container');
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
    console.log(`Player: ${playerScore} || Computer ${computerScore}`);
  }
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    console.log(`It's a tie! You both picked ${playerChoice}.`);
  }
  else if (playerChoice === 'rock' && computerChoice === 'scissors' ||
    playerChoice === 'paper' && computerChoice === 'rock' ||
    playerChoice === 'scissors' && computerChoice === 'paper') {
    playerScore++;
    console.log(`You win! ${capitalize(playerChoice)} beats ${computerChoice}.`);
  }
  else {
    computerScore++;
    console.log(`You lose! ${capitalize(computerChoice)} beats ${playerChoice}.`);
  }
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