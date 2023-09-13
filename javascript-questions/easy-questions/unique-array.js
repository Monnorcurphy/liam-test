// Write a function that takes an array of integers as input and returns a new array with only the unique elements.

function onlyUnqiueArray(duplicateArray) {
    let values = {};
    let uniques = []
    duplicateArray.forEach(element => {
        if (values[element]) {
            values[element] += 1
        } else {
            values[element] = 1
        }
    });
    Object.keys(values).forEach((key) => {
        if (values[key] === 1) {
            uniques.push(key)
        }
    })
    return uniques;
}

console.log(onlyUnqiueArray([1, 1, 1, 2, 4, 5]))
console.log(onlyUnqiueArray([1, 11, 111, 11111, 4, 5, 6, 7, 10, -11]))
console.log(onlyUnqiueArray([1, 'a', 11, 'aa', '11', 5, 6, 7, 10, -11]))