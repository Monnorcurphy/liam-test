// Write a function that returns the sum of all numbers in an array.

function sumArray(numArray) {
    let value = 0;
    numArray.map((num) => {
        value += num
    })
    return value
}

console.log(sumArray([]))
console.log(sumArray([0, 0, 0, 0, 0, 0, 0, 0]))
console.log(sumArray([10, -100, 90000, -170, -800, 4, 6, 9]))
console.log(sumArray([1]))
console.log(sumArray(['a', 'bab', '1', 1]))

function sumArrayRecursive(numArray) {
    if (numArray.length === 0) {
        return 0;
    } else if (numArray.length === 1) {
        return numArray[0]
    } else {
        const first = numArray.shift(0)
        return first + sumArrayRecursive(numArray)
    }
}

console.log(sumArrayRecursive([]))
console.log(sumArrayRecursive([0, 0, 0, 0, 0, 0, 0, 0]))
console.log(sumArrayRecursive([10, -100, 90000, -170, -800, 4, 6, 9]))
console.log(sumArrayRecursive([1]))
console.log(sumArrayRecursive(['a', 'bab', '1', 1]))

function sumArrayReduce(numArray) {
    const initialValue = 0;
    numArray.reduce((accumulator, currentvalue) => { return accumulator + currentvalue }, initialValue)
}

console.log(sumArrayRecursive([]))
console.log(sumArrayRecursive([0, 0, 0, 0, 0, 0, 0, 0]))
console.log(sumArrayRecursive([10, -100, 90000, -170, -800, 4, 6, 9]))
console.log(sumArrayRecursive([1]))
console.log(sumArrayRecursive(['a', 'bab', '1', 1]))
