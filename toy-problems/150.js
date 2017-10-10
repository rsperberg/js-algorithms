function listAllValues(obj) {
  return Object.values(obj);
}

// Michael Diodoro
function listAllValues(obj) {
  var values = [];
  for (var key in obj) {
    values.push(obj[key]);
  }
  return values;
}

// Alex Balliet
function listAllValues(obj) {
  return Object.keys(obj).map(function (key) {
    return obj[key];
  })
}
