export function deduplicateArray0(arr) {
  // TODO: retirer les valeurs en double dans l'array et retourner l'array filtrée
  // 1 - avec les méthodes filter et indexOf
  // 2 - avec un Set et l'opérateur spread
  return Array.from(new Set(arr));
}

export function deduplicateArray1(arr) {
  // TODO: retirer les valeurs en double dans l'array et retourner l'array filtrée
  // 1 - avec les méthodes filter et indexOf
  return arr.filter((e, index) => arr.indexOf(e) === index);
}

export function deduplicateArray(arr) {
  // TODO: retirer les valeurs en double dans l'array et retourner l'array filtrée
  // 2 - avec un Set et l'opérateur spread
  return [...new Set(arr)];
}

export function getPropertyFromValue(obj, val) {
  // TODO: retourner la clé de la propriété de obj ayant comme valeur val
  // 1 - avec les méthodes find et Object.keys

  return null;
}

export function getPropertyFromValue2(obj, val) {
  // TODO: retourner la clé de la propriété de obj ayant comme valeur val

  // 2 - avec une Map et Object.entries
  return null;
}
