let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Create a generateTarget() function. 
// This function will be called at the start of each new round in order to generate the new secret target number.
const generateTarget = () => {
    return Math.floor(Math.random() * 10)
};