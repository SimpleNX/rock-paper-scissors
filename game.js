
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const arr = ["rock", "paper", "scissors"];
    const idx = Math.floor(Math.random()*2);
    console.log(idx);
    return arr[idx];
}

function getHumanChoice(){
    const choice = prompt("Enter your choice for the round");
    return choice.toLowerCase();
}

function whoWon(humanChoice, computerChoice){
    let result = -1;
    if(humanChoice === computerChoice)
        return -1;
    else if(humanChoice === "rock" && computerChoice === "paper" || 
        humanChoice === "paper" && computerChoice === "scissors" ||
        humanChoice === "scissor" && computerChoice === "rock"){
        result = 1;
        computerScore++;
    }
    else if(computerChoice === "rock" && humanChoice === "paper" || 
        computerChoice === "paper" && humanChoice === "scissors" ||
        computerChoice === "scissor" && humanChoice === "rock"){
        result = 0;
        humanScore++;
    }
    return result;
}

function playRound(humanChoice, computerChoice){
    const choices = [humanChoice, computerChoice];
    console.log(choices);
    let result = whoWon(humanChoice, computerChoice);
    if(result === -1){
        console.log("It's a tie!");
        return;
    }
    let message = "";
    let other = 0;
    if(result == 0){
        message.concat("You won!");
        other =1;
    }
    else
        message.concat("You lose!");
    console.log(message + " " + `${choices[result]} beats ${choices[other]}`); 
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);

