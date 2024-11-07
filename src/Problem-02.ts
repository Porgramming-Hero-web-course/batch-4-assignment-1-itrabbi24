// Problem 02

// Create a TypeScript function removeDuplicates that accepts an array of numbers 
// and returns a new array with duplicates removed. Preserve the original order of elements.

// Sample Input:
// removeDuplicates([1, 2, 2, 3, 4, 4, 5])

// Sample Output:
// [1, 2, 3, 4, 5]


const array1 = [1, 2, 2, 3, 4, 4, 5];
const array2 = [1, 2, 2, 3, 4, 3, 5, 4, 6, 5];
 
const removeDuplicates = (array: number[]): number[] => {
    return array.filter((item, index) => array.indexOf(item) === index);
}

console.log(removeDuplicates(array1));
//output - [ 1, 2, 3, 4, 5 ]

console.log(removeDuplicates(array2));
//output - [ 1, 2, 3, 4, 5, 6 ]
