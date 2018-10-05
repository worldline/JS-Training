export function deduplicateArray(arr) {
  // TODO: retirer les valeurs en double dans l'array et retourner l'array filtrée
  // 1 - avec Array.prototype.filter
  return arr.filter((elm, index, arr) => arr.indexOf(elm) === index);

  // 2 - avec un Set et l'opérateur spread
  return [...new Set(arr)]

}

export function getPropertyFromValue(obj, val) {
  // TODO: retourner la clé de la propriété de obj ayant comme valeur val
  // 1 - avec Object.keys et Array.prototype.find
  return Object.keys(obj).find(key => obj[key] === val)

  // 2 - avec une Map et Object.entries
  return new Map(
    Object.entries(obj).map(([clé, val]) => ([val, clé]))
  ).get(val)
}