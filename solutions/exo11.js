export function deduplicateArray(arr) {
  // TODO: remove duplicate values in the array and return the filtered array
  // solution 1 - with filter and indexOf methods
  return arr.filter((elm, index, arr) => arr.indexOf(elm) === index);
}

export function deduplicateArray2(arr) {
  // solution 2 - with a Set and spread operator
  return [...new Set(arr)]
}

export function getPropertyFromValue(obj, val) {
  // TODO: return the name of the first property of `obj` with value `val`, or null if not found
  // solution 1 - with find and Object.keys methods
  return Object.keys(obj).find(key => obj[key] === val)
}

export function getPropertyFromValue2(obj, val) {
  // solution 2 - with a Map and Object.entries
  return new Map(
    Object.entries(obj).map(entry => entry.reverse())
  ).get(val)
}
