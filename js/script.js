function getRandomNumber() {
  return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[getRandomNumber()];
}