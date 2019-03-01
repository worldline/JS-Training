// retourne un objet où les valeurs des propriétés sont devenues les clés et les clés les valeurs
// { a: "b" } => { b: "a" }

// solution 1
export function invertKeysAndValues(obj) {
  var newObj = {};
  for(var clé in obj){
    var valeur = obj[clé]
    newObj[valeur] = clé
  }
  return newObj;
}

// solution 2 avec reduce
export function invertKeysAndValues2(obj) {
  return Object.entries(obj).reduce(
    function (newObj, paireCléValeur) {
      var clé = paireCléValeur[0];
      var valeur = paireCléValeur[1];
      newObj[valeur] = clé
      return newObj
    },
    {}
  )
}

// solution ES2018, pour information
export function invertKeysAndValues3(obj) {
  return Object.entries(obj).reduce((newObj, [clé,valeur]) => ({ ...newObj, [valeur]: clé }), {})
}
