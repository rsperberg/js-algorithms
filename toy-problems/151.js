function convertObjectToList(obj) {
  let result = [];
  for (let key in obj) {
    let keyValuePair = [];
    keyValuePair.push(key, obj[key]);
    result.push(keyValuePair);
  }
  return result;
}

// Arianna Kellogg
function convertObjectToList(obj) {
  return Object.entries(obj);
}

// Angela Huang
function convertObjectToList(obj) {
  var arr = [];
  for (var key in obj) {
    arr.push([key, obj[key]]);
  }
  return arr;
}

// Alex Balliet
function convertObjectToList(obj) {
  return Object.keys(obj).map(function (key) {
    var val = obj[key];
    return [key, val];
  });
}

// austin chin long wong
function convertObjectToList(x) {
  var a = [];
  for(var key in x) {
    a.push([key, x[key]]);
  }
  return a;
}

// Selena Makrides
function convertObjectToList(object) {
  return Object.keys(object).map(e => [e, object[e]]);
}
