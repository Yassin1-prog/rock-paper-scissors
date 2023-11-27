let bot = 0;
let human = 0;
const you = document.querySelector('#you');
const enemy = document.querySelector('#enemy');
const result = document.querySelector('#result');
const round = document.querySelector('#round');
let finished = false;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function declareWInner() {
    if(human == 5) {
        result.textContent = 'You Won the Game!!';
        finished = true;
    }
    else if(bot == 5) {
        result.textContent= 'You Lost the Game!!';
        finished = true;
    }
}


function getComputerChoice() {
    let randomNumber = getRandomInt(0,100);
    if(randomNumber % 3 == 0) {
        return "Rock";
    }
    else if(randomNumber % 3 == 1) {
        return "Paper";
    }
    else {
        return "scissors";
    }

}

function playRound(playerSelection, computerSelection) {
    if(finished) {
        return;
    }
    if(playerSelection.toLowerCase() == "rock") {
        if(computerSelection.toLowerCase() == "rock") {
            
            round.textContent = "Its a tie! rock ties with rock";

        }
        else if(computerSelection.toLowerCase() == "scissors") {
            human++;
            you.textContent = 'You: ' + human;
            declareWInner();
            round.textContent = "You Won! rock beats scissors";

        }
        else {
            bot++;
            enemy.textContent = 'Computer: ' + bot;
            declareWInner();
            round.textContent = "You lost! paper beats rock";

        }
    }
    if(playerSelection.toLowerCase() == "paper") {
        if(computerSelection.toLowerCase() == "rock") {
            human++;
            you.textContent = 'You: ' + human;
            declareWInner();
            round.textContent = "You Won! paper beats rock";
        }
        else if(computerSelection.toLowerCase() == "scissors") {
            bot++;
            enemy.textContent = 'Computer: ' + bot;
            declareWInner();
            round.textContent = "You lost! scissors beats paper";

        }
        else {
            
            round.textContent = "Its a tie! paper ties with paper";

        }
    }
    if(playerSelection.toLowerCase() == "scissors") {
        if(computerSelection.toLowerCase() == "rock") {
            bot++;
            enemy.textContent = 'Computer: ' + bot;
            declareWInner();
            round.textContent = "You lost rock beats scissors";

        }
        else if(computerSelection.toLowerCase() == "scissors") {
           
            round.textContent = "Its a tie! scissors ties with scissors";

        }
        else {
            human++;
            you.textContent = 'You: ' + human;
            declareWInner();
            round.textContent = "You won! scissors beats paper";

        }
    }

}

const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');


btn1.addEventListener('click', function() {
    let opponet = getComputerChoice();
    playRound('rock', opponet);
});


btn2.addEventListener('click', function() {
    let opponet = getComputerChoice();
    playRound('paper', opponet);
});


btn3.addEventListener('click', function() {
    let opponet = getComputerChoice();
    playRound('scissors', opponet);
});




/*
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
*/
/*
let bot = 0;
let human = 0;
function game() {

    for(var i = 0; i < 5; i++) {
        let playerSelection = prompt("PLAY");
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if(check == 1) {
            human++;
        }
        else if (check == 0) {
            bot++;
        }
    }

    if(bot > human) {
        console.log("You lost the game");
    }
    else if(human > bot) {
        console.log("You won the game");
    }
    else {
        console.log("Its a tied game");
    }
}

game();
*/