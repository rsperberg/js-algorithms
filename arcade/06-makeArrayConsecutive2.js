/*
Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

Example

For statues = [6, 2, 3, 8], the output should be
makeArrayConsecutive2(statues); // => 3.

Ratiorg needs statues of sizes 4, 5 and 7.

Input/Output
[time limit] 4000ms (js)
[input] array.integer statues
An array of distinct non-negative integers.

Guaranteed constraints:
1 ≤ statues.length ≤ 10
0 ≤ statues[i] ≤ 20

[output] integer
The minimal number of statues that need to be added to existing statues such that it contains every integer size from an interval [L, R] (for some L, R) and no other sizes.
*/

function makeArrayConsecutive2(statues) {
// sort the array
// subtract each element from its successor (except the last one)
// log those values and sum them
// subtract one for each calculation (eg., one less than the array length) to get the right value
    const limit = statues.length - 1;
    let resultsArray = statues.sort().map(function(elem, idx) {
        if (idx === limit) { return 0; }
        return statues[idx + 1] - elem;
    })
    let intermediate = resultsArray.reduce(function(sum, elem) {
        return  sum + elem;
    });
    return intermediate - limit;
}

// given the starting and ending values, it doesn't really matter what the intermediate values are, the total needed is the same for the same size arrays
// use Math.max and Math.min to find the range
// myjinxin2015
function makeArrayConsecutive2(sequence) {
  return Math.max(...sequence) - Math.min(...sequence) + 1 - sequence.length;
}

// sort first so you know the min and max that way
// Negative_Kelvin
function makeArrayConsecutive2(statues) {
  statues.sort(function(a, b) { return a - b; });
  return statues[statues.length - 1] - statues[0] + 1 - statues.length;
}
