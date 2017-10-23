/*
Given an array of strings, return another array containing all of its longest strings.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

Input/Output
[time limit] 4000ms (js)
[input] array.string inputArray

A non-empty array.

Guaranteed constraints:
1 ≤ inputArray.length ≤ 10
1 ≤ inputArray[i].length ≤ 10

[output] array.string

Array of the longest strings, stored in the same order as in the inputArray.
*/
function allLongestStrings(inputArray) {
// generate an array containing the lengths of all the strings in the array
// use Math.max to find the longest string length
// loop through this array
    // if this string matches max length, use index to grab the string from inputArray
    // push these strings to new array and return it
    // short-circuit if array contains only one string
    let resultsArray = [];
    if (inputArray.length === 1) return inputArray.slice();
    let lengths = inputArray.map(elem => elem.length);
    let longest = Math.max(...lengths);
    lengths.forEach((elem, idx) => {
        if (elem === longest) {
            resultsArray.push(inputArray[idx]);
        }
    });
    return resultsArray;
}

// combine the mapping and finding max into one step
// filter out all the shorter-than elements (modifies original array)
// xyrn
function allLongestStrings(inputArray) {
  let maxSize = Math.max(...inputArray.map(x => x.length));
  return inputArray.filter(x => x.length === maxSize);
}
