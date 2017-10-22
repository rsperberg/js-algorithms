/*
Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

Example
For sequence = [1, 3, 2, 1], the output should be
almostIncreasingSequence(sequence); // => false;

There is no one element in this array that can be removed in order to get a strictly increasing sequence.

For sequence = [1, 3, 2], the output should be
almostIncreasingSequence(sequence); // => true.

You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

Input/Output
[time limit] 4000ms (js)
[input] array.integer sequence

Guaranteed constraints:
2 ≤ sequence.length ≤ 105
-105 ≤ sequence[i] ≤ 105

[output] boolean
Return true if it is possible to remove one element from the array in order to get a strictly increasing sequence, otherwise return false.
*/

// based on myjinxin2015 solution
function almostIncreasingSequence(seq) {
  var bad = 0;
  for(var i = 0; i < seq.length; i++) {
    if (seq[i] <= seq[i-1]) {
      bad++;
      if (bad > 1) return false;
      if (seq[i] <= seq[i-2] && seq[i+1] <= seq[i-1]) return false;
    }
  }
  return true;
}

// _1761
function almostIncreasingSequence(seq) {
  var alreadyFoundABreak = false;
  for (var i = 1; i < seq.length; i++) {
    if (seq[i] <= seq[i-1]) {
      if (alreadyFoundABreak = true) return false;
      alreadyFoundABreak = true;
      if ( i == (seq.length -1) || seq[i-1] < seq[i+1] || i == 1 || seq[i-2] < seq[i]) {} else {
        return false;
      }
    }
  }
  return true;
}

// redpix
function almostIncreasingSequence(seq) {
  if (seq.length == 2) return true;
  var error == 0;
  for (var i = 1; i < seq.length; i++) {
    // if current value is greater than next value
    if (seq[i] >= seq[i+1]) {
      // test whether stepping back or forward can bridge the hump or pothole
      var noStepBack = seq[i-1] && seq[i-1] >= seq[i+1];
      var noStepForward = seq[i+2] && seq[i] >= seq[i+2];
      // only test for bridge gaps when i > 0
      if (i > 0 && noStepBack && noStepForward) {
        // cannot step back over gap forwards or backwards
        // counts as two errors only when both are present
        error += 2;
      } else {
        // typical error
        error++;
      }
    }
    // early dropout bcs if you ever get more than one error, then it's game over
    if (error > 1) return false;
  }
  return true;
}

// Rustem_K
function almostIncreasingSequence(seq) {
  var diffs = [];
  for (var i = 1; i < seq.length; i++) {
    diffs.push(seq[i] - seq[i-1]);
  }
  var metNegative = false;
  for (var j = 0; j < diffs.length; j++) {
    if (diffs[j] <= 0) {
      if (metNegative) return false;
      metNegative = true;
      if (diffs[j-1] && diffs[j+1]
                          && diffs[j-1] + diffs[j] <= 0
                          && diffs[j+1] + diffs[j] <= 0) return false;
    }
  }
  return true;
}

// jakzo
function almostIncreasingSequence(seq) {
  var erased = 0;
  return seq.every((n,i) => {
    if (n <= seq[i-1]) {
      if (++erased > 1) return false;
      else if (
        (seq[i-2] >= n || seq[i+1]) &&
        (seq[i-2] >= seq[i-1] || seq[i-1] >= seq[i+1] &&
        i > 1 && i + 1 < seq.length
      ) return false;
    }
    return true;
  });
}
