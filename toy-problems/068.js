function isEitherEvenAndLessThan9(num1, num2) {
  if (num1 > 8 || num2 > 8 ) {
    return false;
  } else if (num1 % 2 !== 0 && num2 % 2 !== 0) {
    return false;
  } else {
    return true;
  }
}
