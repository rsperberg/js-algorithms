function addToFrontOfNew(arr, element) {
  var arr2 = arr.slice();
  arr2.unshift(element);
  return arr2;
}
