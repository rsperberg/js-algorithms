function getAllKeys(obj) {
  let keyList = [];
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      keyList.push(prop);
    }
  }
  return keyList;
}

// Alexander Mire
function getAllKeys(obj) {
  var output = [];
  for(var x in obj){output.push(x)}
  return output
}

// Amanda Loftus
function getAllKeys(obj) {
  return Object.getOwnPropertyNames(obj);
}
