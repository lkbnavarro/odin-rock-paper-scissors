//console.log("Hello!"); 

let humanScore = 0, computerScore = 0, round = 0;

getComputerChoice = () => {
    let random_num = Math.random();
    //console.log(random_num);
    return random_num < 0.33
    ? "rock"
    : random_num < 0.66
    ? "paper"
    : "scissors";
}

getHumanChoice = () => {
    let answer = prompt("Choose between ROCK, PAPER or SCISSORS: ", "Default")
    answer = answer.toLowerCase();
    
    if(answer == "rock" || answer == "paper" || answer == "scissors"){
        return answer;
    } else{
        return "Invalid answer."
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound = (humanChoice, computerChoice) => {
    const choiceA = humanChoice;
    const choiceB = computerChoice;

    if((choiceA == 'rock' && choiceB == 'scissors') || (choiceA == 'paper' && choiceB == 'rock') || (choiceA == 'scissors' && choiceB == 'paper')){
        console.log("Human won this round.");
        humanScore++;
    } else if (choiceA == choiceB){
        console.log("Draw.")
    } else {
        console.log("Computer won this round.");
        computerScore++;
    }

    console.log(`Human: ${choiceA}`);
    console.log(`Computer: ${choiceB}`);
    round++;
}

playGame = () => {
    do{
        playRound(humanSelection, computerSelection);
        console.log(`Scoreboard - Human: ${humanScore} vs Computer: ${computerScore}`);
    }
    while(humanScore != 5 || computerScore !=5);
}

//playGame();