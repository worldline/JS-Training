export function watchProperty(obj, prop, onRead, onWrite) {
  // changer le descripteur de la propriété prop de l'objet obj pour appeler les fonctions:
  // - onRead() lorsque la propriété prop est accédée
  // - onWrite(newValue) lorsque la propriété prop est modifiée
  // ces fonctions sont juste des observateurs et n'ont pas de valeur de retour
  // or il doit toujours être possible d'écrire et de lire une valeur pour la propriété prop
  let temp = obj[prop];
  Object.defineProperty(obj, prop, {
    get: function isRead() {
      onRead();
      return temp;
    },
    set: function isWrite(newValue) {
      onWrite();
      temp = newValue;
    }
  });
}

export function setPrivatesAndConstants(obj) {
  // changer le descripteur de chaque propriété de l'objet:
  // énumérable si la clé ne commence pas par par un _
  // mutable et configurable si la clé ne commence pas par une majuscule (regex: /[A-Z]/)
  //let regEx = "/^[A-Z]/";
  let regEx = /[A-Z]/; // /!\ regEx ^^
  for (let cle in obj) {
    if (cle.startsWith("_")) {
      Object.defineProperty(obj, cle, {
        enumerable: false
      });
    }
    //if (cle.match(regEx)) {
    if (regEx.test(cle[0])) {
      Object.defineProperty(obj, cle, {
        writable: false,
        configurable: false
      });
    }
  }
}
