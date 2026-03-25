function capitalize(string) {
  return string.at(0).toUpperCase() + string.slice(1);
}

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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function updateScore(winner) {
    if (winner === 'human') {
      humanScore += 1;
    }

    if (winner === 'computer') {
      computerScore += 1;
    }
  }

  function displayResult(message) {
    console.log(`Human: ${humanScore} || Computer: ${computerScore}`);
    console.log(message);
  }

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      displayResult(`It's a tie! You both picked ${humanChoice}`);
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
      updateScore('human');
      displayResult('You win! Rock beats scissors');
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
      updateScore('human');
      displayResult('You win! Paper beats rock');
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
      updateScore('human');
      displayResult('You win! Scissors beats paper');
    } else {
      updateScore('computer');
      displayResult(`You lose! ${capitalize(computerChoice)} beats ${humanChoice}`);
    }
  }

  function getWinningMessage() {
    if (humanScore === computerScore) {
      return 'It\'s a tie. Let\'s play again.';
    } 
    
    if (humanScore > computerScore) {
      return 'You won the game! Great job!';
    } 

    if (computerScore > humanScore) {
      return 'You Lost. Better luck next time.';
    }
  }

  function checkGameOver() {
    const winningMessage = getWinningMessage();
    displayResult(winningMessage);
  }

  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());    
  playRound(getHumanChoice(), getComputerChoice());  
  playRound(getHumanChoice(), getComputerChoice());  
  playRound(getHumanChoice(), getComputerChoice());  
  checkGameOver();
}

playGame();
