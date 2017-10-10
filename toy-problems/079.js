function convertDoubleSpaceToSingle(str) {
  var regex = /  /g;
  return str.replace(regex, ' ');
  // return str.split('  ').join(' ');
}

// Max Tam
function convertDoubleSpaceToSingle(str) {
  return str.replace(/  /g," ");
}

// Mohamed Bouyagui Gassama
function convertDoubleSpaceToSingle(str) {
  var single = str.replace(/\s+/g, ' ')
  return single;
}

// Tauk Chang
function convertDoubleSpaceToSingle(str) {
  str = str.replace(/\s{2,}/g,' ');
  return str;
}
