// Write a function that finds the smallest number in an array.

function smallestInArray(numArray) {
    let smallest;

    numArray.forEach(element => {
        if (!smallest) {
            smallest = element
        }

        if (smallest > element) {
            smallest = element
        }
    });
    return smallest

}

console.log(smallestInArray([1, 5, -100, 4]))
console.log(smallestInArray([1, 1, 1, 1]))
console.log(smallestInArray([1]))


function smallestMin(numArray) {
    return Math.min(numArray)
}
console.log(smallestInArray([1, 5, -100, 4]))
console.log(smallestInArray([1, 1, 1, 1]))
console.log(smallestInArray([1]))


