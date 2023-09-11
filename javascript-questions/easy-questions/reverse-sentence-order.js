// Write a function that reverses the order of words in a sentence without using the built-in reverse() method.

function reverseSentenceOrder(sentence) {
    let newSentence = [];
    sentence = sentence.split(' ');
    sentence.forEach((word) => {
        newSentence = [`${word}`].concat(newSentence);
    })
    return newSentence.join(' ');
}

console.log(reverseSentenceOrder('This is an example setence.'))
console.log(reverseSentenceOrder('test'))
console.log(reverseSentenceOrder(''))
console.log(reverseSentenceOrder('Here is here.'))