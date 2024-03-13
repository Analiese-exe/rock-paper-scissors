// Get elements
const player1RockBtn = document.getElementById("player1-rock");
const player1PaperBtn = document.getElementById("player1-paper");
const player1ScissorsBtn = document.getElementById("player1-scissors");
const player2RockBtn = document.getElementById("player2-rock");
const player2PaperBtn = document.getElementById("player2-paper");
const player2ScissorsBtn = document.getElementById("player2-scissors");
const player1ScoreSpan = document.querySelector(".score1");
const player2ScoreSpan = document.querySelector(".score2");
const resetBtn = document.getElementById("reset-btn");

// Game variables
let playerScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];

// Event listeners for player's choices
player1RockBtn.addEventListener("click", () => playRound("rock", updateScores));
player1PaperBtn.addEventListener("click", () => playRound("paper", updateScores));
player1ScissorsBtn.addEventListener("click", () => playRound("scissors", updateScores));

// Event listener for reset button
resetBtn.addEventListener("click", resetGame);

// Function to get computer's choice
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to play a round
function playRound(playerChoice, callback) {
    const computerChoice = getComputerChoice();

    // Reset player 2 button styles
    player2RockBtn.style.backgroundColor = "burlywood";
    player2PaperBtn.style.backgroundColor = "burlywood";
    player2ScissorsBtn.style.backgroundColor = "burlywood";

    // Determine the winner
    if (playerChoice === computerChoice) {
        // Tie
        if (computerChoice === "rock") {
            player2RockBtn.style.backgroundColor = "gray";
        } else if (computerChoice === "paper") {
            player2PaperBtn.style.backgroundColor = "gray";
        } else {
            player2ScissorsBtn.style.backgroundColor = "gray";
        }
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        // Player wins
        if (computerChoice === "rock") {
            player2RockBtn.style.backgroundColor = "green";
        } else if (computerChoice === "paper") {
            player2PaperBtn.style.backgroundColor = "green";
        } else {
            player2ScissorsBtn.style.backgroundColor = "green";
        }
    } else {
        // Computer wins
        if (playerChoice === "rock") {
            player2PaperBtn.style.backgroundColor = "red";
        } else if (playerChoice === "paper") {
            player2ScissorsBtn.style.backgroundColor = "red";
        } else {
            player2RockBtn.style.backgroundColor = "red";
        }
    }

    // Call the callback function to update scores
    callback(playerChoice, computerChoice);
}

// Function to update scores
function updateScores(playerChoice, computerChoice) {
    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        // Player wins
        playerScore++;
        player1ScoreSpan.textContent = playerScore;
    } else if (
        (computerChoice === "rock" && playerChoice === "scissors") ||
        (computerChoice === "paper" && playerChoice === "rock") ||
        (computerChoice === "scissors" && playerChoice === "paper")
    ) {
        // Computer wins
        computerScore++;
        player2ScoreSpan.textContent = computerScore;
    }

    // Check if game is over
    if (playerScore === 5 || computerScore === 5) {
        declareWinner();
    }
}

// Function to declare the winner
function declareWinner() {
    let winner;
    if (playerScore === 5) {
        winner = "Player 1";
    } else {
        winner = "Player 2";
    }
    alert(`${winner} wins the game!`);
}

// Function to reset the game
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    player1ScoreSpan.textContent = "0";
    player2ScoreSpan.textContent = "0";
    player2RockBtn.style.backgroundColor = "burlywood";
    player2PaperBtn.style.backgroundColor = "burlywood";
    player2ScissorsBtn.style.backgroundColor = "burlywood";
}