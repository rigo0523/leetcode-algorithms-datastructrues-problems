//Given a string s, find the longest palindromic substring in s
// --- Example
// longestPalindrome("cbbd") --> "bb"
// longestPalindrome("abba") --> "abba"
// longestPalindrome("a") --> "a"
// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

function longestPalindrome(s) {
  let startIndex = 0; // grab longest
  let maxLength = 1; // longest palindrome has to be at least 1
  //expand around the center of string
  function expandAroundMiddle(left, right) {
    console.log(s[left]);
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      //only runs if it's valid
      const currentPalindromeLength = right - left + 1;
      if (currentPalindromeLength > maxLength) {
        maxLength = currentPalindromeLength;
        startIndex = left;
      }
      left -= 1;
      right += 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    console.log(i);
    expandAroundMiddle(i - 1, i + 1);
    expandAroundMiddle(i, i + 1);
  }
  return s.slice(startIndex, startIndex + maxLength);
}

console.log(longestPalindrome("onelol")); //anna

module.exports = longestPalindrome;