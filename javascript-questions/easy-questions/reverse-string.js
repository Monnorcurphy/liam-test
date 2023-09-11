//Implement a function to reverse a string without using the built-in reverse() method.

function reverseString(word) {
    let newWord = ''
    word.split('').forEach(element => {
        newWord = `${element}${newWord}`
    });
    return newWord
}
console.log(reverseString('hello'))
console.log(reverseString(''))
console.log(reverseString('Abbbbaaaabbbbaaaaa'))
console.log(reverseString('aba'))

