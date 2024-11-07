// Problem -3 

// Create a TypeScript function called countWordOccurrences that accepts a sentence (string) 
// and a word (string). The function should return the number of times the word appears in the 
// sentence, ignoring case. Use the simple sentence without punctuation as input.

// Example:

// Input: "I love typescript", "typescript"
// Output: 1
// Sample Input:
// countWordOccurrences("I love typescript", "typescript");

// Sample Output:
// 1;




// Solution - 

function countWordOccurrences(sentence: string, word: string) {
    const lowerCaseSentence = sentence.toLowerCase();
    // console.log(lowerCaseSentence);

    const lowerCaseWord = word.toLowerCase()
    // console.log(lowerCaseWord);

    const count = lowerCaseSentence.split(lowerCaseWord).length - 1;
    // console.log(count);

    return count;
}


const result = countWordOccurrences("I love typescript", "typescript");

console.log(result);
// result: 1

const findName = countWordOccurrences("My Name Is Rabbi", "rabbi");

console.log(findName);
// result is also : 1
