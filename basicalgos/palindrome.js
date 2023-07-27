/* 
▪ Write a function that will take input from the user and check if it is palindrome,
  if the word is not palindrome then return it in the reverse order.
  For example "hello" is not a palindrome, it should return "olleh“ in js
*/

function checkPalindrome(word) {
  const reversedWord = word.split("").reverse().join("");

  if (word === reversedWord) {
    return word + " is a palindrome.";
  } else {
    return reversedWord;
  }
}

const userInput = prompt("Please enter a word: ");
console.log(checkPalindrome(userInput));
