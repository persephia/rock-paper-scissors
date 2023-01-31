// Definitions
let userScore = 0;
let computerScore = 0;

const computerChoice = getRandomChoice();

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
//    //Testing ...
//    // console.log(getRandomChoice());

// User Makes Choice