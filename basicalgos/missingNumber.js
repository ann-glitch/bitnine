/* 
Let's say we have an array of first 45 numbers with one missing number.
Need to find a missing integer from the list
(JavaScript)
*/

function findMissingNumber(arr) {
  arr.sort((a, b) => a - b); // Sort the array in ascending order

  for (let i = 0; i < arr.length; i++) {
    if (i + 1 !== arr[i]) {
      return i + 1; // Return the missing number
    }
  }

  // If no missing number found, return the next number after the last element
  return arr.length + 1;
}

// Example usage
const numbersArray = [1, 2, 3, 4, /* ... */ 44, 45]; // Array with one missing number
const missingNumber = findMissingNumber(numbersArray);
console.log("Missing Number:", missingNumber);
