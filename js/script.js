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

function getPlayerChoice() {
  let playerChoice = prompt('Please make a selection: rock, paper or scissors');

  if (!playerChoice) {
    return getPlayerChoice();
  }

  playerChoice = playerChoice.toLowerCase().trim();

  if (playerChoice === 'rock' ||
    playerChoice === 'paper' ||
    playerChoice === 'scissors') {
    return playerChoice;
  } else {
    return getPlayerChoice();
  }
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;

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

  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    console.log(`Player: ${playerScore} || Computer ${computerScore}`);
  }
}

playGame();