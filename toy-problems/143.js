function isEvenWithoutModulo(num) {
  num = num - Math.trunc(num / 2) * 2;
  return num === 0 ? true : false;
}

// Yusaku Kasahara
function isEvenWithoutModulo(num) {
  return num - 2 * Math.trunc(num / 2) === 0;
}

// Amanda Loftus
function isEvenWithoutModulo(num) {
  return Number.isInteger(num/2);
}

// & is bitwise AND
// This operator expects two numbers and retuns a number. In case they are not numbers, they are cast to numbers.
// How does it work? Wikipedia has an answer: https://en.wikipedia.org/wiki/Bitwise_operation#AND
// Note: In Javascript, the usage of this operator is discouraged, since there's no integer data type, just floating point. Thus floats are converted to integers prior to every operation, making it slow. Also, it has no real use in typical web applications and produces unreadable code.
// General rule: Avoid. Don't use it. It rarely has place in a maintainable and readable JS code.
// Clayton Smart
function isEvenWithoutModulo(num) {
  if (num & 1) {return false}
  return true;
}

// Michael Diodoro
function isEvenWithoutModulo(num) {
  return (Math.floor(num / 2) * 2) === num;
}

// Kanak Lata
function isEvenWithoutModulo(num) {
  return parseInt(num / 2) * 2 === num ? true: false;
}

// Samir Habbu
function isEvenWithoutModulo(num) {
  return (Math.round(num/2) === (num/2));
}

// Sukhpaul Nijjar
function isEvenWithoutModulo(num) {
  return (num/2).toString().indexOf('.') === -1;
}
