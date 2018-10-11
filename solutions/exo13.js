export function deduplicateArray(arr) {
  // TODO: retirer les valeurs en double dans l'array et retourner l'array filtrée
  // solution 1 : avec les méthodes filter et indexOf
  return arr.filter((elm, index, arr) => arr.indexOf(elm) === index);
}

export function deduplicateArray2(arr) {
  // solution 2 : avec un Set et l'opérateur spread
  return [...new Set(arr)]
}

export function getPropertyFromValue(obj, val) {
  // TODO: retourner la clé de la propriété de obj ayant comme valeur val
  // solution 1 : avec les méthodes find et Object.keys
  return Object.keys(obj).find(key => obj[key] === val)
}

export function getPropertyFromValue2(obj, val) {
  // solution 2 : avec une Map et Object.entries
  return new Map(
    Object.entries(obj).map(entry => entry.reverse())
  ).get(val)
}
