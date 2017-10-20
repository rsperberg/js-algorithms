function isEitherEvenOrAreBoth7(num1, num2) {
  if (num1 === 7 && num1 === num2) {
    return true;
  } else if (num1 % 2 === 0) {
    return true;
  } else if (num2 % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// Amanda Loftus
function isEitherEvenOrAreBoth7(num1, num2) {
  return (num1 % 2 === 0) || (num2 % 2 === 0) || (num1 ===7 && num2 === 7);
}
