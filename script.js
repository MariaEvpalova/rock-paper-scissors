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

function proccessString(str) {
    return str.toLowerCase().charAt(0).toUpperCase() + str.toLowerCase().slice(1);
}

function playRound(playerSelection) {
    playerSelection = proccessString(playerSelection);
    let computerSelection = proccessString(getComputerChoice());
    if (playerSelection == computerSelection)
        console.log(`No winnner! ${playerSelection} and ${computerSelection}`);
    else if (playerSelection == "Rock" && computerSelection == "Paper" || 
            playerSelection == "Paper" && computerSelection == "Scissors" ||
            playerSelection == "Scissors" && computerSelection == "Rock") {
                computerScore++;
                console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
            }
    else {
        playerScore++;
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    }
    roundCount++;
    if (roundCount >= 5) restartGame();
}

function restartGame() {
    if (playerScore > computerScore) console.log("You win!\nCongratulations!");
    else if (computerScore > playerScore) console.log("Computer wins!");
    else {
        while (playerScore == computerScore) console.log(round());
        console.log(playerScore > computerScore ? "You win!\nCongratulations!" : "Computer wins!");
    }
    console.log("\nNew game");
    playerScore = 0, computerScore = 0, roundCount = 0;
}

let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach((button) => {
    button.addEventListener('click', () => playRound(button.innerText));
});