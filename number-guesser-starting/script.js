let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Create a generateTarget() function. 
// This function will be called at the start of each new round in order to generate the new secret target number.
const generateTarget = () => {
    return Math.floor(Math.random() * 10)
};

// Create a compareGuesses() function. 
// This function will be called each round to determine which guess is closest to the target number.


const compareGuesses = (human, computer, target) => {
    const humanDifference = Math.abs(target - human);
    const computerDifference = Math.abs(target - computer);
    return humanDifference <= computerDifference;
}