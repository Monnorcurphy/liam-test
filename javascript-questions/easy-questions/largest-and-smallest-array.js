// Given an array of numbers, write a function to find the largest and smallest numbers in the array.

function largestAndSmallest(numArray) {
    let largest, smallest;
    numArray.forEach(element => {
        if (!largest || element > largest) {
            largest = element
        }
        if (!smallest || element < smallest) {
            smallest = element
        }
    });

    return `The smallest number is ${smallest}, and the largest number is ${largest}!`
}

console.log(largestAndSmallest([0, 15, 6, -100, 10000, 6, 18]))
console.log(largestAndSmallest([0, 0, 0, 0, 0, 0, 0]))
console.log(largestAndSmallest([1]))

