function removeArrayValues(obj) {
  for (var prop in obj) {
    if ( Array.isArray(obj[prop]) ) {
      delete obj[prop];
    }
  }
}
