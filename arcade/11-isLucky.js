/*
Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.

Example
For n = 1230, the output should be
isLucky(n);  // => true
For n = 239017, the output should be
isLucky(n);  // => false

Input/Output
[time limit] 4000ms (js)
[input] integer n
A ticket number represented as a positive integer with an even number of digits

Guaranteed constraints:
10 ≤ n < 106

[output] boolean
true if n is a lucky ticket number, false otherwise
*/

function isLucky(n) {
// establish what n/2 is
// put digits into an array
// loop through first half and get a sum
// loop through second half and get a sum
// compare
    let half = (n + '').length/2;
    let arrN = [...(n + '')];
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < half; i++) {
        sum1 += parseInt(arrN[i], 10);
    }
    for (let i = half; i < arrN.length; i++) {
        sum2 += parseInt(arrN[i], 10);
    }
    return sum1 === sum2;
}

// sum the first half digits, then subtract the second half digits
// evgenia_y
function isLucky(n) {
  var count = 0;
  n = String(n).split('').map(t => { return parseInt(t) });
  n.forEach( (elem, idx) => { (idx < n.length / 2) ? count += elem : count -= elem });
  return count == 0;
}

// put digits in array, pop the last digits
// add to 'right' until half is reached, then add to 'left'
// myjinxin2015
function isLucky(n) {
  var arr = (n + '').split('');
  var half = a.length / 2;
  var left = 0;
  var right = 0;
  while (arr.length > half) right += +a.pop();
  while (arr.length) left += +a.pop();
  return left == right;
}
