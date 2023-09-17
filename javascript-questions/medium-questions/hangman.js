const axios = require('axios');
const prompt = require('prompt-sync')({ sigint: true });

function getUserLetter() {
    return prompt('Guess a letter!').toLowerCase();
}

function isLetterInWord(word, letter) {
    return word.includes(letter)
}

function letterWasPreviouslyGuessed(guessedLetters, letter) {
    return guessedLetters[letter]
}

function fillInGuessedLetter(word, userLetter, filledInWord) {
    word.split('').forEach((letter, idx) => {
        if (letter === userLetter) {
            filledInWord[idx] = userLetter
        }
    })
    return filledInWord
}

async function getWord() {
    return await axios({ method: 'get', url: 'https://random-word-api.herokuapp.com/word' }).then((res) => res.data[0])
}

function validUserInput(letterInput, guessedLetters) {
    console.log(letterInput)
    if (letterInput === 'list') {
        console.log(Object.keys(guessedLetters));
        return;
    }
    console.log('Invalid input! Just one letter, type out list if you want to see your guessed letters')
}

async function hangman() {
    let ourWord = await getWord();
    let num = 7;
    let guessedLetters = {};
    let outputWord = ourWord.split('').map(() => { return '_' })

    console.log('The word is -> ', outputWord.join(' '));
    console.log(' ');
    let userLetter = prompt('Guess a letter!', 'Type list to see what letters have been guessed').toLowerCase();

    while (num > 0 && outputWord.includes('_')) {
        if (letterWasPreviouslyGuessed(guessedLetters, userLetter)) {
            console.log(`You already guessed that letter - ${userLetter}`)
            userLetter = getUserLetter();
        }

        if (userLetter.length > 0 && userLetter.length !== 1) {
            validUserInput(userLetter, guessedLetters)
        } else if (isLetterInWord(ourWord, userLetter)) {
            console.log('Got one!');
            outputWord = fillInGuessedLetter(ourWord, userLetter, outputWord)
            console.log(outputWord.join(' '))
            guessedLetters[userLetter] = true
        } else if (!letterWasPreviouslyGuessed(guessedLetters, userLetter)) {
            num -= 1;
            console.log(`${userLetter} not included! You have ${num} guesses left`)
            console.log(outputWord.join(' '))
            guessedLetters[userLetter] = true
        }


        if (outputWord.includes('_') && num > 0) {
            userLetter = getUserLetter();
        }
    }
    if (num > 0) {
        console.log('Congrats! You did it')
        console.log(`The word is ${outputWord.join('')}`)
    } else {
        console.log('Sorry, better luck next time')
        console.log(`The word was ${ourWord}`)
    }
}

hangman()