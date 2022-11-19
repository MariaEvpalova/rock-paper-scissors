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
        resultDiv.innerText = `No winnner! ${playerSelection} and ${computerSelection}`;
    else if(playerSelection == "Rock" && computerSelection == "Paper" || 
            playerSelection == "Paper" && computerSelection == "Scissors" ||
            playerSelection == "Scissors" && computerSelection == "Rock") {
                computerScore++;
                resultDiv.innerText = `You lose! ${computerSelection} beats ${playerSelection}`;
            }
    else {
        playerScore++;
        resultDiv.innerText = `You win! ${playerSelection} beats ${computerSelection}`;
    }
    roundCount++;
    if (roundCount >= 5) restartGame();
}

function restartGame() {
    if (playerScore > computerScore) resultDiv.innerText = "You win!\nCongratulations!";
    else if (computerScore > playerScore) resultDiv.innerText = "Computer wins!";
    else {
        while (playerScore == computerScore) resultDiv.innerText = round();
        resultDiv.innerText = playerScore > computerScore ? "You win!\nCongratulations!" : "Computer wins!";
    }
    resultDiv.innerText += "\n\nPress a button to begin a new game";
    //console.log("\nNew game");
    playerScore = 0, computerScore = 0, roundCount = 0;
}

let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach((button) => {
    button.addEventListener('click', () => playRound(button.innerText));
});

const resultDiv = document.querySelector(".result");