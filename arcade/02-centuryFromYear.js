/*
Given a year, return the century it is in. The first century spans from the year 1 up to and
including the year 100, the second — from the year 101 up to and including the year 200, etc.

Example
For year = 1905, the output should be
centuryFromYear(year);  // -> 20
For year = 1700, the output should be
centuryFromYear(year);  // -> 17

Input/Output
[time limit] 4000ms (js)

[input] integer year
A positive integer, designating the year.

Guaranteed constraints:
1 ≤ year ≤ 2005

[output] integer
The number of the century the year is in.
*/

function centuryFromYear(year) {
  if (year % 100 === 0) {
    return year/100;
  } else {
    let centuryStr = Math.floor(year/100);
    let century = Number.parseInt(centuryStr) + 1;
    return century;
  }
}

// haynar
function centuryFromYear(year) {
  return Math.ceil(year / 100);
}

// eyeslikeflame
const centuryFromYear = year => Math.ceil(year / 100);

// john_s152
function centuryFromYear(year) {
  return Math.floor((year + 99) / 100);
}

// phpyuz
function centuryFromYear(y) {
  d = y/100 | 0;
  return y%100 == 0 ? d : d+1;
}
/*
See: https://stackoverflow.com/questions/6194950/what-does-the-single-pipe-do-in-javascript

A single pipe is a bit-wise OR.
Performs the OR operation on each pair of bits. a OR b yields 1 if either a or b is 1.
JavaScript truncates any non-integer numbers in bitwise operations, so console.log(0.5 | 0) is computed as 0|0, which is 0.
Yahel
https://stackoverflow.com/a/6194959/324984

Since bitwise operations only make sense on integers, 0.5 is truncated.
0 | x is x, for any x
SLaks
https://stackoverflow.com/a/6194960/324984

Works for Boolean as well. JS interprets true as 1, false as 0; so
  alert(true | false) // yields 1;
  alert(true | true) // yields 1;
  alert(false | true) // yields 1;
  alert(false | false) // yields 0
gordon
https://stackoverflow.com/a/6195019/324984
*/
