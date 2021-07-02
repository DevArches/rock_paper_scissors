let playerScore = 0;
let computerScore = 0;

const choices = ['rock', 'paper', 'scissors'];

function playRound() {
  let playerChoice = prompt(
    "Type: 'Rock', 'Paper' or 'Scissors'"
  ).toLowerCase();
  console.log('You chose', playerChoice);
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  console.log('The computer chose', computerChoice);
  if (
    (playerChoice == 'rock' && computerChoice == 'scissors') ||
    (playerChoice == 'paper' && computerChoice == 'rock') ||
    (playerChoice == 'scissors' && computerChoice == 'paper')
  ) {
    playerScore++;
    result = 'You win';
  } else if (playerChoice == computerChoice) {
    result = 'You draw';
  } else {
    computerScore++;
    result = 'You lose';
  }
  return result;
}

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(i));
    console.log(playerScore);
  }
}
console.log(game());
