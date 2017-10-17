function removeNumbersLargerThan(num, obj) {
  for (var prop in obj) {
    if ( typeof obj[prop] === "number" && obj[prop] > num) {
      delete obj[prop];
    }
  }
}

// Alexander Mire
function removeNumbersLargerThan(num, obj) {
  for(var x in obj){
    obj[x] > num ? delete obj[x] : obj[x]
  }
}

// Yusaku Kasahara
function removeNumbersLargerThan(num, obj) {
  for (var key in obj) {
    obj[key] > num ? delete obj[key] : obj;
  }
}

// ashley addison
function removeNumbersLargerThan(num, obj) {
  return delete obj.d;
}

// Bowen Li
function removeNumbersLargerThan(num, obj) {
  Object.keys(obj).forEach(function(key) {
    if (obj[key] > num) {
      delete obj[key];
    }
  })
}

// Eric Chi
function removeNumbersLargerThan(num, obj) {
  var objArray = Object.getOwnPropertyNames(obj);
  objArray.forEach(function(elem) {
    if (obj[elem] > num) {
      delete obj[elem];
    }
  })
}
