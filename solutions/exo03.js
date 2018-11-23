// retourne un objet où les valeurs des propriétés sont devenues les clés et les clés les valeurs
// { a: "b" } => { b: "a" }

// solution 1
export function invertKeysAndValues(obj) {
  var newObj = {};
  Object.entries(obj).forEach(function (entry) {
    var clé = entry[0];
    var valeur = entry[1];
    newObj[valeur] = clé;
  })
  return newObj;
}

// solution 2 avec reduce et Object.assign
export function invertKeysAndValues2(obj) {
  return Object.entries(obj).reduce(
    function (newObj, entry) {
      var clé = entry[0];
      var valeur = entry[1];
      return Object.assign(newObj, { [valeur]: clé })
    },
    {}
  )
}

// solution ES2015, pour information
export function invertKeysAndValues3(obj) {
  return Object.assign({}, ...Object.entries(obj).map(([clé, valeur]) => ({ [valeur]: clé })))
}
