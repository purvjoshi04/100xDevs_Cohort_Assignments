/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}

module.exports = isPalindrome;
