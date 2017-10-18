/*
Given an array of integers, find the pair of adjacent elements that has the
largest product and return that product.

Example
For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray); //  => 21.

7 and 3 produce the largest product.

Input/Output
[time limit] 4000ms (js)
[input] array.integer inputArray
An array of integers containing at least two elements

Guaranteed constraints:
2 ≤ inputArray.length ≤ 10
-1000 ≤ inputArray[i] ≤ 1000

[output] integer
The largest product of adjacent elements
*/

function adjacentElementsProduct(inputArray) {
// loop through array, calculating product of element and neighbor
// since lowest value is -1000, lowest product is -1000000
  // set value for last element to be -1000000 so it will never be the largest by accident
// store in a separate array
// find largest number and return it
    let numbers = inputArray.map(function(elem, idx) {
        if (idx == inputArray.length - 1) {
            return -1000000;
        } else {
        return elem * inputArray[idx + 1];
        }
    });
    return Math.max(...numbers);
}

// this doesn't run in Chrome: Unexpected token .
// the ...arr.slice(1) makes new array that map operates on, so current value is
// always multiplying previous element (eg, arr[i] * arr[i - 1], starting at index 1)
// myjinxin2015
function adjacentElementsProduct(arr) {
  return Math.max(...arr.slice(1).map(x, i) => [x * arr[i]]);
}

// compare after every multiplication and store higher value
// starts with i = 1 since initial multiplication occurs in setting prod
// must get NaN on last pass — why not just go to inputArray.length - 1?
// haynar
function adjacentElementsProduct(inputArray) {
  var prod = inputArray[0] * inputArray[1];
  for (var i = 1; i < inputArray.length; i++) {
    prod = Math.max(prod, inputArray[i] * inputArray[i + 1]);
  }
  return prod;
}
