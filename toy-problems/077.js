function removeNumberValues(obj) {
  for (var prop in obj) {
    if ( typeof obj[prop] === "number" ) {
      delete obj[prop];
    }
  }
}
