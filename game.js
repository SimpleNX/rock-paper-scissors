let humanScore = 0;
let computerScore = 0;
const arr = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const idx = Math.floor(Math.random()*7)%3;
    return arr[idx];
}

function updateScoreBoard(){
    let hScore = document.querySelector(".h-score");
    let cScore = document.querySelector(".c-score");
    hScore.textContent = humanScore;
    cScore.textContent = computerScore;
}

function updateMessage(result, humanChoice, computerChoice){
    let message = document.querySelector("#round-message");
    let choicePlayed = document.querySelector("#choice-play");
    choicePlayed.textContent = `You played ${humanChoice} and computer
    played ${computerChoice}`;
}

function whoWon(humanChoice, computerChoice){
    let result = -1;
    if(humanChoice === computerChoice)
        return -1;
    else if(humanChoice === "rock" && computerChoice === "paper" || 
        humanChoice === "paper" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "rock"){
        result = 1;
        computerScore++;
    }
    else if(computerChoice === "rock" && humanChoice === "paper" || 
        computerChoice === "paper" && humanChoice === "scissors" ||
        computerChoice === "scissors" && humanChoice === "rock"){
        result = 0;
        humanScore++;
    }
    return result;
}

function playRound(humanChoice, computerChoice){
   let result = whoWon(humanChoice, computerChoice);
   console.log(humanChoice, computerChoice);
   updateScoreBoard();
   updateMessage(result, humanChoice, computerChoice);
}


let buttons = document.querySelector(".choices");
buttons.addEventListener("click", (event)=>{
    let humanChoice = event.target.id;
    if(arr.includes(humanChoice))
        playRound(humanChoice, getComputerChoice());
});



