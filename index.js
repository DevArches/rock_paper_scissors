let playerSelection = prompt(
  "Type: 'Rock', 'Paper' or 'Scissors'"
).toLowerCase();

// function returnComputerPlay() {
//   let random = Math.floor(Math.random() * 3);
//   return random;
// }

function playRound(playerSelection) {
  // let computerSelection = returnComputerPlay();
  const options = ['rock', 'paper', 'scissors'];
  const computerSelection = options[Math.floor(Math.random() * options.length)];
  console.log(computerSelection);
  if (
    (playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'rock')
  ) {
    return 'You win';
  } else if (playerSelection == computerSelection) {
    return 'You draw';
  } else {
    return 'You lose';
  }
}
//rock 0, paper 1, scissors, 2

console.log(playerSelection);
console.log(playRound());
