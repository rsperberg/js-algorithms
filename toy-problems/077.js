function removeNumberValues(obj) {
  for (var prop in obj) {
    if ( typeof obj[prop] === "number" ) {
      delete obj[prop];
    }
  }
}

// Yusaku Kasahara
function removeNumberValues(obj) {
  for (var key in obj) {
    typeof obj[key] === 'number' ? delete obj[key] : obj;
  }
}

// Alexander Mire
function removeNumberValues(obj) {
  for(var x in obj){
    isNaN(obj[x]) ? obj[x] : delete obj[x]
  }
}

// Alex Balliet
function removeNumberValues(obj) {
  for (var prop in obj) {
    if (!isNaN(obj[prop])) {
      delete obj[prop];
    }
  }
}

// Jen Diamond
function removeNumberValues(obj) {
  var keys = Object.keys(obj);
  keys.forEach(function(key){
    if ( typeof obj[key] === 'number' ){
      delete obj[key];
    }
  });
  return obj;
}

// Steve Huy Cao
function removeNumberValues(obj) {
  for (var key in obj) {
    typeof obj[key] === 'number' && delete obj[key];
  }
}
