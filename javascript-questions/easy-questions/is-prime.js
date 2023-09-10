// Write a function that determines if a given number is prime or not.

function isPrime(number) {
    let counter = 2;
    let prime = true;
    while (counter < number / 2) {
        if (number % counter === 0) {
            prime = false;
        }
        counter += 1
    }
    return prime;
}
console.log(isPrime(1))
console.log(isPrime(3))
console.log(isPrime(7))
console.log(isPrime(10))
console.log(isPrime(13))