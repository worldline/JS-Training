// retourne un objet où les valeurs des propriétés sont devenues les clés et les clés les valeurs
// { a: "b" } => { b: "a" }

export function invertKeysAndValues(obj) {
  //
  /* solution1
  let x = Object.keys(obj);
  let y = Object.values(obj);
  let obj2 = {};
  for (let i = 0; i < Object.values(obj).length; i++) {
    obj2[y[i]] = x[i];
  }
  return obj2;
*/
  //solution2
  const newObj = {};
  return Object.entries(obj).reduce(function (newObj, entry) {
    var key = entry[0],
      valeur = entry[1];
    newObj[valeur] = key;
    return Object.assign(newObj, { [valeur]: key });
  }, newObj);
}
