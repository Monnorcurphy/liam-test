// Write a program to find the maximum number in an array.

function maxInArray(numArray) {
    return Math.max(numArray);
}

function maxInArrayForEach(numArray) {
    let largest;
    numArray.forEach((element) => {
        if (!largest || largest < element) {
            largest = element
        }
    })
    return largest
}
