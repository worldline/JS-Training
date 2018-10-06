// retourne un objet où les valeurs des propriétés sont devenues les clés et les clés les valeurs
// { a: "b" } => { b: "a" }

export function invertKeysAndValues(obj) {

  // solution 1
  return Object.entries(obj).reduce((obj, [clé, valeur]) => Object.assign(obj, { [valeur]: clé }), {})

  // solution 2
  return Object.assign({}, ...Object.entries(obj).map(([clé, valeur]) => ({ [valeur]: clé })))

  // solution 3
  return { ...Object.entries(obj).map(([clé, valeur]) => ({ [valeur]: clé })) }
}
