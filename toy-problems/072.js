function removeStringValuesLongerThan(num, obj) {
  for (var prop in obj) {
    if ( typeof obj[prop] === "string" && obj[prop].length > num) {
      delete obj[prop];
    }
  }
}
