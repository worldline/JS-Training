// return an object with values and keys inverted
// we assume all values to be strings
// { a: "b" } => { b: "a" }

// solution 1
export function invertKeysAndValues(obj) {
  const newObj = {};
  for (let key in obj) {
    const value = obj[key]
    newObj[value] = key
  }
  return newObj;
}

// solution 2 with reduce
export function invertKeysAndValues2(obj) {
  return Object.entries(obj).reduce(
    function (newObj, keyValuePair) {
      const key = keyValuePair[0];
      const value = keyValuePair[1];
      newObj[value] = key
      return newObj
    },
    {}
  )
}

// solution ES2019
export function invertKeysAndValues3(obj) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [value, key])
  );
}
