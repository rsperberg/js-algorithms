function fromListToObject(array) {
  var resultObject = {};
  for (item of array) {
    resultObject[item[0]] = item[1];
    //  console.log(resultObject);
  }
  return resultObject
}

// Amanda Loftus
function fromListToObject(array) {
  var obj = {};
  array.forEach(function(item) {
    obj[item[0]] = item[1];
  });
  return obj;
}

// Bethany Shao
function fromListToObject(array) {
  return array.reduce(function(obj, elem){
    obj[elem[0]] = elem[1];
    return obj;
  }, {});
}
