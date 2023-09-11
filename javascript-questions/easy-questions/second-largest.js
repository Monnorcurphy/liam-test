//Write a function that finds the second largest number in an array.

function secondLargest(numArray) {
    let largest, secondLargest;
    numArray.forEach(element => {
        if (!largest) {
            largest = element
        }
        if (!secondLargest && largest > element) {
            secondLargest = element
        }
        if (largest < element) {
            secondLargest = largest
            largest = element
        }
        if (secondLargest < element && largest > element) {
            secondLargest = element
        }
    });
    return secondLargest
}

console.log(secondLargest([1, 1, 1, 1, 1, 1, 1]))
console.log(secondLargest([1, 2, 3, 4, 5, 6, 7]))
console.log(secondLargest([100, 9, 99, 88, 17]))
console.log(secondLargest([1]))