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
    if (playerSelection == computerSelection) {
        playerResult.innerText = playerResult.innerText.slice(0, -1) + (++playerScore);
        computerResult.innerText = computerResult.innerText.slice(0, -1) + (++computerScore);
        winReport.innerText = `${playerSelection} and ${computerSelection}`;

    }
    else if(playerSelection == "Rock" && computerSelection == "Paper" || 
            playerSelection == "Paper" && computerSelection == "Scissors" ||
            playerSelection == "Scissors" && computerSelection == "Rock") {
                computerResult.innerText = computerResult.innerText.slice(0, -1) + (++computerScore);
                winReport.innerText = `Computer wins. ${computerSelection} beats ${playerSelection}`;
            }
    else {
        playerResult.innerText = playerResult.innerText.slice(0, -1) + (++playerScore);
        winReport.innerText = `You win! ${playerSelection} beats ${computerSelection}`;
    }
    if (playerScore >= 5 || computerScore >= 5) restartGame();
}

function restartGame() {
    winReport.innerText = (playerScore > computerScore ? "Congratulations! You win the game :)" : "Computer beats you :(" 
                           + "\nSelect your next choice to begin a new game");
    playerScore = 0, computerScore = 0;
    playerResult.innerText = playerResult.innerText.slice(0, -1) + playerScore;
    computerResult.innerText = computerResult.innerText.slice(0, -1) + computerScore;
}

let playerScore = 0;
let computerScore = 0;

const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach((button) => {
    button.addEventListener('click', () => playRound(button.innerText));
});

const winReport = document.querySelector(".win");
const playerResult = document.querySelector(".score > .player");
const computerResult = document.querySelector(".score > .computer");