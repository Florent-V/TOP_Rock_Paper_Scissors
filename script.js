let choice = ["rock", "paper", "scissors"];
let computerSelection = getComputerChoice();
let playerSelection = prompt('Quel est votre choix ?', "Rock, Paper or Scissors ?");

function getComputerChoice() {
  return choice[Math.floor(Math.random()*3)]
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase()
  console.log(`You choose ${playerSelection}`)
  console.log(`Computer choose ${computerSelection}`)
  if (playerSelection === "rock") {
    switch (computerSelection) {
      case "rock":
        return "Battle !"
        break;
      case "paper":
        return "You Lose! Paper beats Rock !"
        break
      case "scissors":
        return "You Win! Rock beats Scissors !"
        break;
    }
  } else if (playerSelection === "paper") {
    switch (computerSelection) {
      case "rock":
        return "You Win! Paper beats Rocks !"
        break;
      case "paper":
        return "Battle !"
        break
      case "scissors":
        return "You Lose! Scissors beats Paper !"
        break;
    }
  } else if (playerSelection === "scissors") {
    switch (computerSelection) {
      case "rock":
        return "You Lose! Rock beats Scissors !"
        break;
      case "paper":
        return "You Win! Scissors beats Paper !"
        break
      case "scissors":
        return "Battle !"
    }
  }
}



console.log(playRound(playerSelection, computerSelection));

/*
function game() {
    for (let i = 0; i <= 5; i++) {
        
        
    }
    

}
*/