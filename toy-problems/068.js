function isEitherEvenAndLessThan9(num1, num2) {
  if (num1 > 8 || num2 > 8 ) {
    return false;
  } else if (num1 % 2 !== 0 && num2 % 2 !== 0) {
    return false;
  } else {
    return true;
  }
}

// Yusaku Kasahara
function isEitherEvenAndLessThan9(num1, num2) {
  return (isEven(num1) || isEven(num2)) && num1 < 9 && num2 < 9;
}

function isEven(num) {
  return num % 2 === 0;
}

// Edward Kim
function isEitherEvenAndLessThan9(num1, num2) {
  return (num1 % 2 === 0 || num2 % 2 === 0) && num1 < 9 && num2 < 9;
}

// Alexander Mire
function isEitherEvenAndLessThan9(num1, num2) {
  return (num1 % 2 === 0 || num2 % 2 === 0) && (num1 < 9 && num2 < 9)
}
