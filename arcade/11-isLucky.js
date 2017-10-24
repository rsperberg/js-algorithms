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
