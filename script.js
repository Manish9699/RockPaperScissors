function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  if (random === 0) {
    const cInput = "ROCK";
    return cInput;
  } else if (random === 1) {
    const cInput = "PAPER";
    return cInput;
  } else if (random === 2) {
    const cInput = "SCISSORS";
    return cInput;
  }
}

function getUserChoice() {
  let input = prompt("Enter what you want to choose");
  return input.toUpperCase();
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "ROCK" && computerSelection === "PAPER") {
    return "Computer wins";
  } else if (computerSelection === "ROCK" && playerSelection === "PAPER") {
    return "Player wins";
  } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
    return "Computer wins";
  } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
    return "Computer wins";
  } else if (computerSelection === "PAPER" && playerSelection === "SCISSORS") {
    return "Player wins";
  } else if (computerSelection === "SCISSORS" && playerSelection === "ROCK") {
    return "Player wins";
  } else {
    return "It's a tie";
  }
}

const playerSelection = getUserChoice();
const computerSelection = getComputerChoice();

console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
