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
