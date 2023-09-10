// Implement a function to find the factorial of a given number.

//iteratitive
function calculateFactorial(number) {
    if (number <= 0) {
        return number
    }

    let result = 1;
    let counter = number;
    while (counter > 0) {
        result *= counter
        counter -= 1
    }
    return result
}

console.log(calculateFactorial(1))
console.log(calculateFactorial(4))
console.log(calculateFactorial(20))
console.log(calculateFactorial(-1))
console.log(calculateFactorial(0))

//recursive
function calculateFactorialRecursive(number) {
    if (number <= 1) {
        return number
    }
    return number * calculateFactorialRecursive(number - 1)
}

console.log(calculateFactorialRecursive(1))
console.log(calculateFactorialRecursive(4))
console.log(calculateFactorialRecursive(20))
console.log(calculateFactorialRecursive(-1))
console.log(calculateFactorialRecursive(0))

//recursive with caching
const calcualtedValues = {};
function calculateFactorialRecursiveCache(number) {
    let value;
    if (number <= 1) {
        return number
    }
    if (calcualtedValues[number]) {
        return calcualtedValues[number]
    }
    value = number * calculateFactorialRecursive(number - 1)
    calcualtedValues[number] = value
    return calcualtedValues[number]
}

console.log(calculateFactorialRecursiveCache(1))
console.log(calculateFactorialRecursiveCache(4))
console.log(calculateFactorialRecursiveCache(20))
console.log(calculateFactorialRecursiveCache(-1))
console.log(calculateFactorialRecursiveCache(0))