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

function playRound(playerSelection, computerSelection) {
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
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("What's your choice? ");
        let computerChoice = getComputerChoice();
        let roundResult = playRound(playerChoice, computerChoice);
        roundResult.includes("You win!") ? playerScore++ : computerScore++;
        console.log(roundResult);
    }
    if (playerScore > computerScore) console.log("You win!\nCongratulations!");
    else if (computerScore > playerScore) console.log("Computer wins!");
    else {
        while (playerScore == computerScore) {
            let playerChoice = prompt("What's your choice? ");
            let computerChoice = getComputerChoice();
            let roundResult = playRound(playerChoice, computerChoice);
            roundResult.includes("You Win!") ? playerScore++ : computerScore++;
            console.log(roundResult);
        }
        if (playerScore > computerScore) console.log("You win!\nCongratulations!");
        else if (computerScore > playerScore) console.log("Computer wins!");
    }
}

game();