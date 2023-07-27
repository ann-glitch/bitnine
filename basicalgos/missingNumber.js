// function findMissingNumber(arr) {
//   const n = 45; // Total number of elements in the original array (including the missing number)
//   const expectedSum = (n * (n + 1)) / 2; // Sum of all numbers from 1 to n (inclusive)

//   // Calculate the sum of elements in the given array
//   const actualSum = arr.reduce((sum, num) => sum + num, 0);

//   // Find the missing number
//   const missingNumber = expectedSum - actualSum;
//   return missingNumber;
// }

// // Example usage
// const numbersArray = [1, 2, 3, 4, /* ... */ 44, 45]; // Array with one missing number
// const missingNumber = findMissingNumber(numbersArray);
// console.log("Missing Number:", missingNumber);

function findMissingNumber(arr) {
  const n = arr.length + 1;
  const sumWithMissing = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((acc, num) => acc + num, 0);
  return sumWithMissing - actualSum;
}

// Example usage:
const numbers = [1, 2, 3 /* ... */, , 45];
console.log(findMissingNumber(numbers)); // Output: The missing number from the list
