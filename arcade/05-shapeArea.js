/*
Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.

image at https://codefightsuserpics.s3.amazonaws.com/tasks/shapeArea/img/area.png?_tm=1491302317375

Example

For n = 2, the output should be
shapeArea(2);  // => 5
For n = 3, the output should be
shapeArea(3);  // => 13

Input/Output
[time limit] 4000ms (js)
[input] integer n

Guaranteed constraints:
1 ≤ n < 104.

[output] integer
The area of the n-interesting polygon

*/

function shapeArea(n) {
 return (n * n) + (n - 1) * (n - 1);
}

// bobziroll
function shapeArea(n) {
  return Math.pow(n,2) + Math.pow(n-1,2);
}

// phpyuz
shapeArea = n => {
  return n * (n - 1) * 2 + 1;
}

// santiago_m7
function shapeArea(n) {
  if (n === 1) return 1;
  return shapeArea(n - 1) + 4 * (n - 1);
}

// nick_lehmann
function shapeArea(n) {
  return Math.ceil(Math.pow(n + (n - 1), 2) / 2);
}

// Aram
function shapeArea(n) {
  return (2 * n * n) - (2 * n) + 1;
}
