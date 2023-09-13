// Implement a function that takes two sorted arrays and merges them into a single sorted array without using any built-in sorting functions.


function combineSortedArrays(firstArray, secondArray) {
    let first = 0, second = 0;
    let combinedArray = [];
    while ((first <= firstArray.length - 1) && (second <= secondArray.length - 1)) {
        if (firstArray[first] < secondArray[second]) {
            combinedArray.push(firstArray[first])
            first += 1;
        } else {
            combinedArray.push(secondArray[second])
            second += 1;
        }
    }


    if (first < firstArray.length) {
        first === 0 ? null : firstArray.shift(first);
        combinedArray = combinedArray.concat(firstArray)
    } else {
        second === 0 ? null : secondArray.shift(second);
        combinedArray = combinedArray.concat(secondArray)
    }
    return combinedArray;
}

console.log(combineSortedArrays([0, 0, 0, 0, 0], [1, 1, 1, 1, 1]))
console.log(combineSortedArrays([0, 1, 3, 5, 7], [2, 4, 6, 8, 10]))
console.log(combineSortedArrays([0], [2]))
console.log(combineSortedArrays([2], [0]))