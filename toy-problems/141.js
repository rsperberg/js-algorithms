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
