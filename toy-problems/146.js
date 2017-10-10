function transformFirstAndLast(array) {
  var length = array.length;
  var first = array[0];
  var last = array[length-1];
  var arrayToObject = { };
  arrayToObject[first] = last;
  return arrayToObject;
}

// Yusaku Kasahara
function transformFirstAndLast(array) {
  var output = {};
  output[array[0]] = array[array.length-1];
  return output;
}
