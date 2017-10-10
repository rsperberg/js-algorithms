function computeSumBetween(num1, num2) {
  if (num1 >= num2) { return 0; }
  let sum = 0;
  for (let i = num1; i < num2; i++) {
    sum += i;
  }
  return sum;
}

// Yusaku Kasahara
function computeSumBetween(num1, num2) {
  var sum = num1 >= num2 ? 0 : num1;
  for (var i = num1 + 1; i < num2; i++) {
    sum += i;
  }
  return sum;
}

// Amanda Loftus
function computeSumBetween(num1, num2) {
  var total = 0;
  if (num1 < num2) {
    for (var x = num1; x < num2; x++) {
      total += x;
    }
  }
  return total;
}

// Jacob Seo
function computeSumBetween(num1, num2) {
  if(num1 > num2 || num1 === num2){
    return 0;
  }
  if(num1 === num2 - 1){
    return num1;
  }
  return num1 + computeSumBetween(num1 + 1, num2);
}

// Jeffrey Ng
function computeSumBetween(num1, num2) {
  if(num2 <= num1){
    return 0;
  } else if(num1 === num2 - 1){
    return num1;
  } else {
    return num1 + computeSumBetween(num1 + 1, num2)
  }
}

// MDN: The Array.from() method creates a new Array instance from an array-like or iterable object.
// Syntax: Array.from(arrayLike[, mapFn[, thisArg]])
// Array.from() has an optional parameter mapFn, which allows you to execute a map function on each element of the array (or subclass object) that is being created.
// Jen Diamond
function computeSumBetween(num1, num2) {
  if ((num1 > num2) || (num1 === num2)) {return 0;}

  var range = Array.from(new Array(num2-num1), (x,i) => i + num1);

  return range.reduce(function(a, b){
    return a + b
  });
}
