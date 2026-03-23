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
