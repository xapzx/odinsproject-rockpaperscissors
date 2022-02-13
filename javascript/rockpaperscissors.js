let playerWins = 0;
let computerWins = 0;

function computerPlay(){
    const moves = ["Rock", "Paper", "Scissors"];
    let randomInt = Math.floor(Math.random() * 3);

    return moves[randomInt];
}

function playRound(playerSelection, computerSelection){
    let playerSelectionCase = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    const resultDisplay = document.querySelector('.result');
    const pElement = document.createElement('p');
    if(playerSelectionCase === "Rock"){
        if(computerSelection === "Rock"){
            resultDisplay.textContent = "You Drew!";
            // return "You Drew!";
        } else if(computerSelection === "Paper"){
            resultDisplay.textContent = "You Lose! Paper beats Rock";
            computerWins++;
            // return "You Lose! Paper beats Rock";
        } else {
            resultDisplay.textContent = "You Win! Rock beats Scissors";
            playerWins++;
            // return "You Win! Rock beats Scissors";
        }
    } else if(playerSelectionCase === "Paper"){
        if(computerSelection === "Rock"){
            resultDisplay.textContent = "You Win! Paper beats Rock";
            // return "You Win! Paper beats Rock";
            playerWins++;
        } else if(computerSelection === "Paper"){
            return "You Drew!";
        } else {
            resultDisplay.textContent = "You Lose! Scissors beats Paper";
            // return "You Lose! Scissors beats Paper";
            computerWins++;
        }
    } else if(playerSelectionCase === "Scissors"){
        if(computerSelection === "Rock"){
            resultDisplay.textContent = "You Lose! Rock beats Scissors";
            // return "You Lose! Rock beats Scissors";
            computerWins++;
        } else if(computerSelection === "Paper"){
            resultDisplay.textContent = "You Win! Scissors beats Paper";
            playerWins++;
            // return "You Win! Scissors beats Paper";
        } else {
            return "You Drew!";
        }
    } else {
        return "Invalid Input!";
    }
    const currentScore = document.querySelector('.currentScore');
    currentScore.textContent = "Player Score: " + playerWins + "   |   " + "Computer Score: " + computerWins;

    if(playerWins === 5 || computerWins === 5){
        announceWinner();
    }
}

function announceWinner(){
    const displayWinner = document.querySelector(".announcement");
    if(playerWins > computerWins){
        displayWinner.textContent = "You Win!";
        // console.log("You Win!");
    } else if(playerWins < computerWins){
        displayWinner.textContent = "You Lose!";
        // console.log("You Lose!");
    }
    hideMainGame();
}

function clearScore(){
    playerWins = 0;
    computerWins = 0;
}

function hideMainGame(){
    document.querySelector(".main").style.display = "none";
    document.querySelector(".completedGame").style.display = "flex";
}

function showMainGame(){
    document.querySelector(".main").style.display = "block";
    document.querySelector(".completedGame").style.display = "none";
}

// function game(){
//     let playerWins = 0;
//     let computerWins = 0;
//     // for(let i = 0; i < 5; i++){
//         let playerSelection = prompt("Enter your move: ");
//         let computerSelection = computerPlay();

//         let result = playRound(playerSelection,computerSelection);
//         console.log(result);

//         // if(result === "Invalid Input!"){
//         //     continue;
//         // } else 
//         if(result.charAt(4) === 'W'){
//             playerWins++;
//         } else if(result.charAt(4) === 'L'){
//             computerWins++;
//         }
//     // }

//     if(playerWins > computerWins){
//         console.log("You Win!");
//     } else if(playerWins < computerWins){
//         console.log("You Lose!");
//     } else{
//         console.log("You Drew!");
//     }

//     console.log("Score:\n" + "Player = " + playerWins + "\n" + "Computer = " + computerWins + "\n");
// }

const rockSelection = document.querySelector('.rock');
rockSelection.addEventListener('click', function(){
    const result = playRound('rock',computerPlay());
    console.log(result);
});

const paperSelection = document.querySelector('.paper');
paperSelection.addEventListener('click', function(){
    const result = playRound('paper',computerPlay());
    console.log(result);
});

const scissorsSelection = document.querySelector('.scissors');
scissorsSelection.addEventListener('click', function(){
    const result = playRound('scissors',computerPlay());
    console.log(result);
});

const playAgain = document.querySelector(".playAgain");
playAgain.addEventListener('click', function(){
    clearScore();
    showMainGame();
})