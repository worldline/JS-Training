// retourne un objet où les valeurs des propriétés sont devenues les clés et les clés les valeurs
// { a: "b" } => { b: "a" }

export function invertKeysAndValues1(obj) {
  let result = {};
  for (let entry of Object.entries(obj)) {
    let clé = entry[0];
    let valeur = entry[1];
    //Object.assign(result, valeur, clé)
    result[valeur] = clé;
  }
  return result;
}

export function invertKeysAndValues2(obj) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [value, key])
  );
}

export function invertKeysAndValues(obj) {
  return Object.fromEntries(Object.entries(obj).map((a) => a.reverse()));
}
