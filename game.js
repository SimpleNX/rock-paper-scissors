

function getComputerChoice(){
    const arr = ["rock", "paper", "scissors"];
    const idx = Math.floor(Math.random()*100)%3;
    return arr[idx];
}

function getHumanChoice(){
    const choice = prompt("Rock, Paper or Scissors!~");
    return choice.toLowerCase();
}

function playGame(){
    let whoWon = function (humanChoice, computerChoice){
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
    };
    let playRound = function (humanChoice, computerChoice){
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
            message += "You won!";
            other =1;
        }
        else
            message += "You lose!";
        console.log(message + " " + `${choices[result]} beats ${choices[other]}`); 
    };
    let humanScore = 0;
    let computerScore = 0;
    for(i = 0; i<5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    let finalMessage = "";
    if(humanScore > computerScore)
        finalMessage += "You win!";
    else if(humanScore === computerScore)
        finalMessage += "It's a tie";
    else
        finalMessage += "You lose!";
    console.log(finalMessage + " " + `Score : ${humanScore} : ${computerScore}`);
}

playGame();


