function getComputerChoice() {
    let num = Math.floor(Math.random()*3);
    switch (num) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        default:
            return "Scissors";
            break;
    }
}

function getRoundResult(playerSelection, computerSelection) {
    let proccess = (str) => (str.toLowerCase().charAt(0).toUpperCase() + str.toLowerCase().slice(1));
    playerSelection = proccess(playerSelection);
    computerSelection = proccess(computerSelection);
    if (playerSelection == computerSelection)
        return (`No winnner! ${playerSelection} and ${computerSelection}`);
    else if (playerSelection == "Rock" && computerSelection == "Paper" || 
             playerSelection == "Paper" && computerSelection == "Scissors" ||
             playerSelection == "Scissors" && computerSelection == "Rock")
            return `You lose! ${computerSelection} beats ${playerSelection}`;
    else return `You win! ${playerSelection} beats ${computerSelection}`;
}

function game() {
    playerScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++) {
        console.log(round());
    }
    if (playerScore > computerScore) console.log("You win!\nCongratulations!");
    else if (computerScore > playerScore) console.log("Computer wins!");
    else {
        while (playerScore == computerScore) console.log(round());
        console.log(playerScore > computerScore ? "You win!\nCongratulations!" : "Computer wins!");
    }
}

function round() {
    let roundResult = getRoundResult(prompt("What's your choice? "), getComputerChoice());
    roundResult.includes("You win!") ? playerScore++ : computerScore++;
    return roundResult;
}

let playerScore;
let computerScore;

game();