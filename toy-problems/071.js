function removeNumbersLessThan(num, obj) {
  for (var prop in obj) {
    if ( typeof obj[prop] === "number" && obj[prop] < num ) {
      delete obj[prop];
    }
  }
}

// Edward Kim
function removeNumbersLessThan(num, obj) {
  for (var key in obj) {
    obj[key] < num && delete(obj[key]);
  }
}

// Yusaku Kasahara
function removeNumbersLessThan(num, obj) {
  for (var key in obj) {
    obj[key] < num ? delete obj[key] : obj;
  }
}

// Alexander Mire
function removeNumbersLessThan(num, obj) {
  for(var x in obj){
    obj[x] < num ? delete obj[x] : obj[x]
  }
}

// Hakjin Kim
function removeNumbersLessThan(num, obj) {
  for(var key in obj){
    if(obj[key]<num){
      delete obj[key];
    }
  }
  return obj;
}
