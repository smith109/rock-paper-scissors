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

function playGame() {
  const btnContainer = document.querySelector('.btn-container');
  let humanScore = 0;
  let computerScore = 0;

  btnContainer.addEventListener('click', handleBtnClick);

  function updateScoreBoard() {
    const scoreBoard = document.querySelector('.score-board');
    scoreBoard.textContent = 
      `Human: ${humanScore} | Computer: ${computerScore}`;
  }

  function updateScore(winner) {
    if (winner === 'human') {
      humanScore += 1;
    }

    if (winner === 'computer') {
      computerScore += 1;
    }

    updateScoreBoard();
  }

  function displayRoundResults(message) {
    const roundResults = document.querySelector('.round-results');
    roundResults.textContent = message;
  }

  function displayWinningMessage(message) {  
    const winningMessage = document.querySelector('.winning-message');
    winningMessage.textContent = message;
  }

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      displayRoundResults(`It's a tie! You both picked ${humanChoice}`);
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
      updateScore('human');
      displayRoundResults('You win! Rock beats scissors');
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
      updateScore('human');
      displayRoundResults('You win! Paper beats rock');
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
      updateScore('human');
      displayRoundResults('You win! Scissors beats paper');
    } else {
      updateScore('computer');
      displayRoundResults(`You lose! ${capitalize(computerChoice)} beats ${humanChoice}`);
    }

    checkGameOver();
  }

  function checkGameOver() {
    if (humanScore === 5) {
      displayWinningMessage('You won the game! Great job!');
      disableChoiceBtns();
    } 

    if (computerScore === 5) {
      displayWinningMessage('You Lost. Better luck next time.');
      disableChoiceBtns();
    }
  }

  function handleBtnClick(e) {
    const target = e.target;
    if (target.tagName !== 'BUTTON') return;

    const humanChoice = target.dataset.choice;
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  function disableChoiceBtns() {
    const choiceBtns = document.querySelectorAll('.choice-btn');
    choiceBtns.forEach((button) => button.disabled = true);
  }
}

playGame();
