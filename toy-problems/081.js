function addToFrontOfNew(arr, element) {
  var arr2 = arr.slice();
  arr2.unshift(element);
  return arr2;
}

// Yusaku Kasahara
function addToFrontOfNew(arr, element) {
  return [element].concat(arr);
}

// Samir Habbu
function addToFrontOfNew(arr, element) {
 var newArray = [];
  return newArray.concat(element, arr);
}
