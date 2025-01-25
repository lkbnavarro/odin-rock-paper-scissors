
const body = document.body;
const result = document.createElement("div");

const btnContainer = document.createElement("div");
btnContainer.setAttribute("id", "btn-container");

const logsContainer = document.createElement("div");
logsContainer.setAttribute("id", "logs-container")

const scoreboardContainer = document.createElement("div");
scoreboardContainer.setAttribute("id", "score-container")

const rockbtn = document.createElement("button");
rockbtn.textContent = "Rock";
rockbtn.setAttribute("id", "rock-btn")
rockbtn.setAttribute("value", "rock")

const paperbtn = document.createElement("button");
paperbtn.textContent = "Paper";
paperbtn.setAttribute("id", "paper-btn")
paperbtn.setAttribute("value", "paper")

const scissorsbtn = document.createElement("button");
scissorsbtn.textContent = "Scissors";
scissorsbtn.setAttribute("id", "scissors-btn")
scissorsbtn.setAttribute("value", "scissors")

const humanScoreBoard = document.createElement("div")
humanScoreBoard.textContent = "Human: 0"
humanScoreBoard.id = "humanSB"

const compScoreBoard = document.createElement("div")
compScoreBoard.textContent = "Computer: 0"
compScoreBoard.id = "compSB"

const winnerScoreBoard = document.createElement("div")
winnerScoreBoard.id = "winnerSB"


result.textContent = "Click a button to start!";



body.append(btnContainer);
btnContainer.append(rockbtn);
btnContainer.append(paperbtn);
btnContainer.append(scissorsbtn);
scoreboardContainer.append(humanScoreBoard);
scoreboardContainer.append(compScoreBoard);
scoreboardContainer.append(winnerScoreBoard);

body.append(logsContainer);
body.append(scoreboardContainer);
logsContainer.append(result);



const buttons = document.querySelectorAll('button');
let humanScore = 0, computerScore = 0;

function getComputerSelection(){
    let randomNumber = Math.random();
    if(randomNumber < 0.33){
        return 'rock';
    } else if(randomNumber < 0.66){
        return 'paper';
    } else{
        return 'scissors';
    }
}

playRound = (human, computer) => {
    if(human === computer){
        return "Draw."
    }else if((human === 'rock' || computer === 'scissors') || (human === 'paper' && computer === 'rock') || (human === 'scissors' && computer === 'paper')){
        humanScore++;
        return 'You won this round.'
    } else {
        computerScore++;
        return "You lost this round";
    }
}


function displayResult(choiceH, choiceC, humanCurrentScore, compCurrentScore, currentRound){
    result.innerText = `
        Round: ${currentRound} \n 
        Human: ${choiceH} \n Computer: ${choiceC} \n`
    humanScoreBoard.innerText = `Human: ${humanCurrentScore}`;
    compScoreBoard.innerText = `Computer: ${compCurrentScore}`;
}

function determineWinner(){
    if(humanScore > computerScore){
        return "You won the game!"
    } else if(humanScore < computerScore){
        return "You lost the game."
    } else{
        return "The game ended in a draw."
    }
}

playGame = () => {
    let round = 0;
    if(round != 5){
        buttons.forEach(button => {
            button.addEventListener("click", () => {
                if (round >= 5) {
                    
                    buttons.forEach(btn => btn.disabled = true);
                    return;
                }
                round++;
                const humanChoice = button.value;
                const computerChoice = getComputerSelection();
                winnerScoreBoard.innerText = playRound(humanChoice, computerChoice);
                displayResult(humanChoice, computerChoice, humanScore, computerScore, round);
                if (round == 5) {
                    buttons.forEach(btn => btn.disabled = true);
                    const gameResult = document.createElement("div");
                    gameResult.id = "game-result";
                    gameResult.innerText = determineWinner();
                    body.append(gameResult);
                }
            })
        })
    }




}

playGame();