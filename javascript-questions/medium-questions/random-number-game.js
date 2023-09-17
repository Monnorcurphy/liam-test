// write a function or series of functions, that takes user input and creates a number guessing game

const prompt = require('prompt-sync')({ sigint: true });
let topNumber = prompt('Pick a number!');
topNumber = Number(topNumber);

let numberOfGuesses = prompt("How many guesses would you like?")
numberOfGuesses = Number(numberOfGuesses);

function guessNum() {
    let randomNum = Math.floor((Math.random() * topNumber) + 1);;
    let userGuess = prompt('Guess a number!')
    userGuess = Number(userGuess)
    let num = 0;
    while (userGuess !== randomNum && num < numberOfGuesses) {
        console.log('Guess again!')
        console.log(`The number is ${userGuess > randomNum ? 'lower' : 'higer'} than your last guess`)

        userGuess = Number(userGuess)
        num += 1;
        if (num < numberOfGuesses) {
            userGuess = prompt('Guess a number!')
        }
    }
    if (userGuess === randomNum) {
        console.log('You got it!')
        return true
    }

    console.log(`The number was ${randomNum}`)
    console.log('Sucks to suck')
    return false;
}


guessNum()



