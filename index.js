function isPalindrome(word) {
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      return false;
    }
  }

  return true;
}

/* 
  - iterate from the beginning of the string to the middle of the string
  - compare the letter we're iterating over to the corresponding letter at the end of the string
    - if the letters don't match, return false

  - if we reach the middle, and all the letters match, return true
*/

/*
  You need to create an isPalindrome function that, when given a string as input, 
  determines whether the string reads the same forwards and backwards. 
  In other words, if the first letter is identical to the last letter, 
  the second letter is identical to the second-to-last letter, and 
  so on (until reaching the middle of the word), the function should return true. 
  For instance, in the case of the word "racecar," where the first and last 
  letters are "r," the second and second-to-last letters are "a," the third and 
  third-to-last letters are "c," and the middle letter is "e," the function should return true. 
  On the other hand, for the word "robot," where the first letter is "r" and the last 
  letter is "t," the function should return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
