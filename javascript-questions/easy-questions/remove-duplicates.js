// Implement a function to remove duplicates from an array.

function removeDuplicates(arrayOfElements) {
    let unqiues = {};
    return arrayOfElements.filter(element => {
        if (unqiues[element]) {
            return false
        } else {
            unqiues[element] = true
            return true
        }
    });
}
console.log(removeDuplicates([1, 2, 1]))
console.log(removeDuplicates(['a', 'b', 'aba', 'a', 'c']))
console.log(removeDuplicates([1, 2, 3]))

