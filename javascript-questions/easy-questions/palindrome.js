// Write a function to check if a given string is a palindrome.

function isPalindrome(word) {
    let wordArray = word.split('');
    let start = 0;
    let end = wordArray.length - 1;
    let palindrome = true;
    while (start !== end && start < end) {
        if (wordArray[start] !== wordArray[end]) {
            palindrome = false
        }
        start += 1;
        end -= 1;
    }
    return palindrome;
}

console.log(isPalindrome('abba'))
console.log(isPalindrome('snake'))
console.log(isPalindrome('parap'))
