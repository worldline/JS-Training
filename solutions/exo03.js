// retourne un objet où les valeurs des propriétés sont devenues les clés et les clés les valeurs
// { a: "b" } => { b: "a" }

export function invertKeysAndValues(obj) {

  // solution 1
  var newObj = {};
  Object.entries(obj).forEach(function (entry) {
    var clé = entry[0];
    var valeur = entry[1];
    newObj[valeur] = clé;
  })
  return newObj;

  // solution 2 avec reduce et Object.assign
  return Object.entries(obj).reduce(
    function (newObj, entry) {
      var clé = entry[0];
      var valeur = entry[1];
      return Object.assign(newObj, { [valeur]: clé })
    },
    {}
  )

  // solution ES2018, pour information
  return { ...Object.entries(obj).map(([clé, valeur]) => ({ [valeur]: clé })) }
}
