function getRandomNumber() {
  return Math.floor(Math.random() * 3);
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