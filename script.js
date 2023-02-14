// Definitions
let userScore = 0;
let computerScore = 0;
let result = "";

const playerInput = document.querySelector("#playerText");
const getPlayerChoiceButton = document.querySelector("#get-choice");

if (getPlayerChoiceButton) {
    getPlayerChoiceButton.addEventListener("click", fetchChoice);
}

function fetchChoice() {
    let playerChoice = playerInput.value;
    let userChoice = playerChoice.toLowerCase();
    console.log(userChoice);
}


// Computer Makes Choice
function getRandomChoice() {
    let randomChoiceNum = Math.floor(Math.random() * 3);
    switch (randomChoiceNum) {
        case 0:
            return 'fire'
        case 1:
            return 'water'
        case 2:
            return 'grass'
    }
}
//    Testing ...
//    console.log(computerChoice);

// Play the Game
var fireBtn = document.getElementById('fireBtn');
if (fireBtn) {
    fireBtn.addEventListener('click', () => getUserChoice('fire'));
}

var waterBtn = document.getElementById('waterBtn');
if (waterBtn) {
    waterBtn.addEventListener('click', () => getUserChoice('water'));
}

var grassBtn = document.getElementById('grassBtn');
if (grassBtn) {
    grassBtn.addEventListener('click', () => getUserChoice('grass'));
}


function getUserChoice(userChoice) {
    const computerChoice = getRandomChoice();
    playGame(userChoice, computerChoice);
    // Testing...
    // console.log("click");
}

function playGame(userChoice, computerChoice) {
    if (userChoice == computerChoice) {
        result = ("You both selected " + userChoice + ", so it's a tie.")
    } else if ((userChoice == 'fire' && computerChoice == 'grass') || (userChoice == 'grass' && computerChoice == 'water' || (userChoice == 'water' && computerChoice == 'fire'))) {
        userScore += 1;
        result = ("Aha! " + userChoice + " defeats " + computerChoice + ".  Well done!")
    } else {
        computerScore += 1;
        result = ("Alas, " + computerChoice + " defeats " + userChoice + ".  Better luck next time...")
    }
    document.getElementById('result').innerHTML = result;
    document.getElementById('userScore').innerHTML = userScore;
    document.getElementById('computerScore').innerHTML = computerScore;

    winnerCheck();
}

function winnerCheck() {
    if (computerScore === 5) {
        userScore=0;
        computerScore=0;
        result = "Computer wins the game - try again!"
    } else if (userScore === 5) {
        result = "You win the game!  Nice work."
        userScore=0;
        computerScore=0;
    }

    document.getElementById('result').innerHTML = result;
    document.getElementById('userScore').innerHTML = userScore;
    document.getElementById('computerScore').innerHTML = computerScore;
}





