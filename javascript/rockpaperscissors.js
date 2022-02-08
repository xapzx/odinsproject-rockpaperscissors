function computerPlay(){
    const moves = ["Rock", "Paper", "Scissors"];
    let randomInt = Math.floor(Math.random() * 3);

    return moves[randomInt];
}

function playRound(playerSelection, computerSelection){
    let playerSelectionCase = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    if(playerSelectionCase === "Rock"){
        if(computerSelection === "Rock"){
            return "You Drew!";
        } else if(computerSelection === "Paper"){
            return "You Lose! Paper beats Rock";
        } else {
            return "You Win! Rock beats Scissors";
        }
    } else if(playerSelectionCase === "Paper"){
        if(computerSelection === "Rock"){
            return "You Win! Paper beats Rock";
        } else if(computerSelection === "Paper"){
            return "You Drew!";
        } else {
            return "You Lose! Scissors beats Paper";
        }
    } else if(playerSelectionCase === "Scissors"){
        if(computerSelection === "Rock"){
            return "You Lose! Rock beats Scissors";
        } else if(computerSelection === "Paper"){
            return "You Win! Scissors beats Paper";
        } else {
            return "You Drew!";
        }
    } else {
        return "Invalid Input!";
    }
}

function game(){
    let playerWins = 0;
    let computerWins = 0;
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("Enter your move: ");
        let computerSelection = computerPlay();

        let result = playRound(playerSelection,computerSelection);
        console.log(result);

        if(result.charAt(4) === 'W'){
            playerWins++;
        } else if(result.charAt(4) === 'L'){
            computerWins++;
        }
    }

    if(playerWins > computerWins){
        console.log("You Win!");
    } else if(playerWins < computerWins){
        console.log("You Lose!");
    } else{
        console.log("You Drew!");
    }

    console.log("Score:\n" + "Player = " + playerWins + "\n" + "Computer = " + computerWins + "\n");
}