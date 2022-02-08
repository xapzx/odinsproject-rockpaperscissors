function computerPlay(){
    const moves = ["Rock", "Paper", "Scissors"];
    let randomInt = Math.floor(Math.random() * 3);
    
    return moves[randomInt];
}