function multiply(num1, num2) {
  let total = 0;
  let neg = (num1 < 0) ? (num2 < 0 ? false : true ) : (num2 < 0 ? true : false );
  num1 = Math.abs(num1);
  num2 = Math.abs(num2);
  for (let i = 0; i < num2; i++) {
    total += num1;
  }
  if (neg === true) {
    return 0 - total;
  } else {
    return total;
  }
}

// increment/decrement based on num2 > 0
// Amanda Loftus
function multiply(num1, num2) {
  var result = 0;
  if (num2 > 0) {
    for (var x = 0; x < num2; x++) {
      result += num1;
    }
  } else {
    for (var y = 0; y > num2; y--) {
      result -= num1;
    }
  }
  return result;
}

// recursion
// Jacqueline Leung
function multiply(num1, num2) {
  if(num1 === 0) {
    return 0;
  }
  return num2 + multiply(num1 - 1, num2);
}

// divide and inverse
// Selena Makrides
function multiply(num1, num2) {
    return num1 / (1 / num2);
}

// Establish which number is larger and which smaller to perform fewer additions
// Michael Diodoro
function multiply(num1, num2) {
  var greater = Math.abs(num1) > Math.abs(num2) ? num1 : num2;
  var lesser = Math.abs(num1) < Math.abs(num2) ? num1 : num2;
  var sign = Math.sign(num1) + Math.sign(num2);
  var product = 0;
  for (var i = 0; i < lesser; i++) {
    product += Math.abs(greater);
  }
  return sign ? product : -product;
}

// short-circuit if either number is 1
// make array containing a num2 amount of num1 (e.g., 4 x 3 => [4, 4, 4])
// use reduce instead of for loop
// Jen Diamond
function multiply(num1, num2){
  if (num1 === 1) { return num2 };
  if (num2 === 1) { return num1 };
  if (num1 < 0 && num2 < 0){
    var arr = Array(Math.abs(num1)).fill(Math.abs(num2));
    return arr.reduce((memo, num) => memo + num, 0);
  }
  var arr = Array(num1).fill(num2);
  return arr.reduce((memo, num) => memo + num, 0);
}

// use while loop
// add if positive, subtract if negative; increment/decrement likewise
// Edward Kim
function multiply(num1, num2) {
  var result = 0;

  while (num2) {
    result += (num2 > 0 ? num1 : -num1);
    num2 > 0 ? num2-- : num2++;
  }

  return result;
}

// MDN: Math.imul() allows for 32-bit integer multiplication with C-like semantics. This feature is useful for projects like Emscripten. Because imul() is a static method of Math, you always use it as Math.imul(), rather than as a method of a Math object you created (Math is not a constructor). If you use normal javascript floating point numbers in imul, you will experience a degrade in performance. This is because of the costly conversion from a floating point to an integer for multiplication, and then converting the multiplied integer back into a floating point. The reason imul exists is because it is faster in only one (so far) circumstance: AsmJS. AsmJS allows for JIST-optimizers to more easily implement internal integers in JavaScript. Multiplying two numbers stored internally as integers (which is only possible with AsmJS) with imul is the only potential circumstance where Math.imul may prove performant in current browsers.
// Alex Balliet
function multiply(num1, num2) {
  return Math.imul(num1, num2);
}

// Juan Carlos Collins
function multiply(num1, num2) {
  let arr = [];
  for (let i = 0; i < Math.abs(num2); i++) {
    arr.push(num1);
  }
  let product = arr.reduce((a, b) => a + b, 0);
  if(num1 < 0 && num2 < 0 || num2 < 0){
    return product / -1;
  } else {
    return product;
  }
}

// Justin Yip
function multiply(num1, num2) {
  return num1/(1/num2)
}
