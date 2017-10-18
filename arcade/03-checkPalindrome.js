/*
Given a string, check if it is a palindrome.

Example
For inputString = "aabaa", the output should be
checkPalindrome(inputString);  // -> true;
For inputString = "abac", the output should be
checkPalindrome(inputString);  // -> false;
For inputString = "a", the output should be
checkPalindrome(inputString); // -> true

Input/Output
[time limit] 4000ms (js)
[input] string inputString
A nonempty string consisting of lowercase characters

Guaranteed constraints:
1 ≤ inputString.length ≤ 105.

[output] boolean
true if inputString is a palindrome, false otherwise
*/

function checkPalindrome(inputString) {
  // cut the string into 2 pieces
    // remove middle character if length is odd
  // reverse the second half
  // compare the two
  if (inputString.length === 1) { return true; }
  let half = Math.floor(inputString.length/2);
  let half1 = inputString.slice(0,half);
  let half2 = inputString.slice(-half);
  let half2Rev = half2.split('').reverse().join('');
  return Object.is(half1, half2Rev);
}
