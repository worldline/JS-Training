// retourne un objet où les valeurs des propriétés sont devenues les clés et les clés les valeurs
// { a: "b" } => { b: "a" }

export function invertKeysAndValues(obj) {
  return Object.entries(obj)
    .reduce((obj, [clé, valeur]) => {
      obj[valeur] = clé
      return obj
    }, {})


  return { ...Object.entries(obj).map(([clé, valeur]) => ({ valeur: clé })) }
}
