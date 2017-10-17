function extend(obj1, obj2) {
  let keys2 = Object.keys(obj2);
  for (let i = 0; i < keys2.length; i++) {
    if (obj1.hasOwnProperty(keys2[i])) {
      continue;
    }
//    Object.defineProperty(obj1, keys2[i], { value: obj2[keys2[i]] });
	obj1[keys2[i]] = obj2[keys2[i]]
  }
}

//  Eric Chi
function extend(obj1, obj2) {
  var obj2Array = Object.getOwnPropertyNames(obj2);
  obj2Array.forEach(function (elem) {
    if (!obj1[elem]) {
      obj1[elem] = obj2[elem];
    }
  })
}

// John Jacob
function extend(obj1, obj2) {
  for (var key in obj2) {
    if (obj1[key] === undefined) {
      obj1[key] = obj2[key];
    }
  }
}

// Michael Diodoro
function extend(obj1, obj2) {
  for (var key in obj2) {
    if (!obj1[key]) {
      obj1[key] = obj2[key];
    }
  }
}

// Vu Chau
function extend(obj1, obj2) {
  // Loop through all keys in obj2
  for(var i in obj2) {
    // If key isn't found in obj1, add it
    if(!(i in obj1)) {
      obj1[i] = obj2[i];
    }
  }
}

// Yusaku Kasahara
function extend(obj1, obj2) {
  for (var key in obj2) {
    obj1[key] ? obj1 : obj1[key] = obj2[key];
  }
}
