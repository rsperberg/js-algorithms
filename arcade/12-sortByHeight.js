/*
Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.

Example

For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be:
sortByHeight(a);  // => [-1, 150, 160, 170, -1, -1, 180, 190]

Input/Output
[time limit] 4000ms (js)
[input] array.integer a

If a[i] = -1, then the ith position is occupied by a tree. Otherwise a[i] is the height of a person standing in the ith position.

Guaranteed constraints:
5 ≤ a.length ≤ 15
-1 ≤ a[i] ≤ 200

[output] array.integer
Sorted array a with all the trees untouched
*/

function sortByHeight(a) {
// in a copy of a, filter out the -1's then sort
// loop through array a
//   if -1 then push -1 to a new array
//   if not, then shift element from copy and push to new array
    let returnable = [];
    let aCopy = a.filter(elem => elem > -1).sort((x, y) => x - y);
    a.forEach((elem, idx) => {
        if (elem === -1) {
            returnable.push(-1);
        } else {
            returnable.push(aCopy.shift());
        }
    });
    return returnable;
}

// use map to insert heights
// dcrod
function sortByHeight(a) {
  var b = a.slice().sort((a, b) => a * b > 0 ? a - b : b - a);  // asc, -1's at end
  return a.map(e => e != -1 ? b.shift : -1)
}
