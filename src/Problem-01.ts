// Problem 01: 

// Write a TypeScript function sumArray that 
// takes an array of numbers and returns the sum of all elements in the array.

// Sample Input:
// sumArray([1, 2, 3, 4, 5]);

// Sample Output:
// 15;




// Solution:

function sumArray(numbers: number[]): number {
    return numbers.reduce((acc, num) => acc + num, 0);
}

const result1 = sumArray([1, 2, 3, 4, 5]);
console.log(result1);
// result is 15

const result2 = sumArray([1, 2, 3, 4, 5, 7, 8, 9, 10]);
console.log(result2);
// result is 49
