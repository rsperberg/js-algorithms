/*
Given two strings, find the number of common characters between them.

Example
For s1 = "aabcc" and s2 = "adcaa", the output should be
commonCharacterCount(s1, s2);  // => 3

Strings have 3 common characters - 2 "a"s and 1 "c"

Input/Output
[time limit] 4000ms (js)
[input] string s1

A string consisting of lowercase latin letters a-z

Guaranteed constraints:
1 ≤ s1.length ≤ 15

[input] string s2
A string consisting of lowercase latin letters a-z

Guaranteed constraints:
1 ≤ s2.length ≤ 15

[output] integer
*/

function commonCharacterCount(s1, s2) {
// identify and count characters in each string, storing as object
// compare properties (e.g., characters)
//   whenever there is a common property, take the lesser count
//   push that value to an array
//   add up the values stored in that array
  let s1Counts = countChars(s1);
  let s2Counts = countChars(s2);
  let sharedArray = [];
  for (let prop in s1Counts) {
    if (prop in s2Counts) {
      (s1Counts[prop] <= s2Counts[prop]) ? sharedArray.push(s1Counts[prop]) : sharedArray.push(s2Counts[prop])
    }
  }
  if (sharedArray.length === 0) {
    return 0;
  } else {
  return sharedArray.reduce((sum, elem) => sum + elem);
  }
}

// utility function to count occurrences of each character in a string
function countChars(str) {
  return str.split('').reduce(function(counts, char) {
    counts[char] = (counts[char] || 0) + 1;
    return counts;
  }, {});
}

// loop through characters in s1
// in s2, replace a match with a !
// replace all non-matches with empty character
// return length of s2
// lifeofnations
function commonCharacterCount(s1, s2) {
  for (var i = 0; i < s1.length; i++) {
    s2 = s2.replace(s1[i], '!');
  }
  return s2.replace(/[^!]/g, '').length;
}

// make array of chars from s1
// loop through array, removing each character
// if character in s2, replace first instance with empty string and increment count
// myjinxin2015
function commonCharacterCount(s1, s2) {
  var chars = s1.split('');
  var count = 0;
  while (chars.length) {
    var ch = chars.pop();
    if (s2.includes(ch)) {
      count++;
      s2 = s2.replace(ch, '');
    }
  }
  return countChars;
}

// make array of characters in s1 without duplicates
// look in s1 and s2 for matches and capture how many
// compare those values and add the lesser to count
// phpyuz
function commonCharacterCount(s1, s2) {
  let u = s1.split``.filter(function(elem, idx, arr) {
    console.log(elem, idx, arr);
    return arr.indexOf(elem) === idx;
  });
  console.log(u);
  count = 0;
  for (var i in u)
    {
      let m1 = (s1.match(new RegExp(u[i], 'g')) || []).length;
      let m2 = (s2.match(new RegExp(u[i], 'g')) || []).length;
      count += Math.min(m1, m2);
    }
  return count;
}
