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
