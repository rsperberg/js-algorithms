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

// Yusaku Kasahara
function isEitherEvenOrAreBoth7(num1, num2) {
  return num1 + num2 === 14 ? true : isEven(num1) ? true : isEven(num2) ? true : false;
}

function isEven(num) {
  return num % 2 === 0;
}
