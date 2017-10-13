function removeOddValues(obj) {
  for (var prop in obj) {
    if ( typeof obj[prop] === "number" && obj[prop] % 2 !== 0 ) {
      delete obj[prop];
    }
  }
}
