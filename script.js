let check = 2;


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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
    if(playerSelection.toLowerCase() == "rock") {
        if(computerSelection.toLowerCase() == "rock") {
            check = 2;
            return "Its a tie! rock ties with rock";

        }
        else if(computerSelection.toLowerCase() == "scissors") {
            check = 1;
            return "You Won! rock beats scissors";

        }
        else {
            check = 0;
            return "You lost! paper beats rock";

        }
    }
    if(playerSelection.toLowerCase() == "paper") {
        if(computerSelection.toLowerCase() == "rock") {
            check = 1;

            return "You Won! paper beats rock";
        }
        else if(computerSelection.toLowerCase() == "scissors") {
            check = 0;
            return "You lost! scissors beats paper";

        }
        else {
            check = 2;
            return "Its a tie! paper ties with paper";

        }
    }
    if(playerSelection.toLowerCase() == "scissors") {
        if(computerSelection.toLowerCase() == "rock") {
            check = 0;
            return "You lost rock beats scissors";

        }
        else if(computerSelection.toLowerCase() == "scissors") {
            check = 2;
            return "Its a tie! scissors ties with scissors";

        }
        else {
            check = 1;
            return "You won! scissors beats paper";

        }
    }

}

/*
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
*/
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