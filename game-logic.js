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
    let choice_flag = 0;

    while(choice_flag == 0){
        let answer = prompt("Choose between ROCK, PAPER or SCISSORS: ", "Default")
        answer = answer.toLowerCase();
        if(answer == "rock" || answer == "paper" || answer == "scissors"){
            choice_flag = 1;
            return answer;
        }
    }
}

playRound = (humanChoice, computerChoice) => {
    const choiceA = humanChoice;
    const choiceB = computerChoice;
    let winner;

    if((choiceA == 'rock' && choiceB == 'scissors') || (choiceA == 'paper' && choiceB == 'rock') || (choiceA == 'scissors' && choiceB == 'paper')){
        winner = "1";
        humanScore++;
    } else if (choiceA == choiceB){
        winner = "3";
        console.log("Draw.")
    } else {
        winner = "2";
        console.log("Computer won this round.");
        computerScore++;
    }
    
    if(winner == "1"){
        console.group();
        console.log("Human won this round.");
        console.log(`Human: ${choiceA}`);
        console.log(`Computer: ${choiceB}`);
        console.groupEnd();
    } else if (winner == "2"){
        console.group();
        console.log("Computer won this round.");
        console.log(`Human: ${choiceA}`);
        console.log(`Computer: ${choiceB}`);
        console.groupEnd();
    } else {
        console.group();
        console.log("Draw Round");
        console.log(`Human: ${choiceA}`);
        console.log(`Computer: ${choiceB}`);
        console.groupEnd();
    }

    round++;
}

playGame = () => {

    while(humanScore != 5 || computerScore !=5){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.info(`Round ${round} - Human: ${humanScore} vs Computer: ${computerScore}`);

        if(humanScore == 5){
            break;
        } else if (computerScore == 5) {
            break;
        }
    }

    if(humanScore == 5){
        console.log(`Congratulations! You won.`)
    } else if (computerScore ==  5){
        console.log(`You lost. Try again.`)
    }
}

playGame();