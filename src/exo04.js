export function watchProperty(obj, prop, onRead, onWrite) {
  // changer le descripteur de la propriété prop de l'objet obj pour appeler les fonctions:
  // - onRead() lorsque la propriété prop est accédée
  // - onWrite(newValue) lorsque la propriété prop est modifiée
  // ces fonctions sont juste des observateurs et n'ont pas de valeur de retour
  // or il doit toujours être possible d'écrire et de lire une valeur pour la propriété prop
  var maValeurStockee = obj[prop];
  Object.defineProperty(obj, prop, {
    get: function () {
      onRead();
      return maValeurStockee;
    },
    set: function (newValue) {
      onWrite();
      maValeurStockee = newValue;
    }
  });
}
/*
var obj = { hello: "world", value: "autrechose" };
watchProperty(
  obj,
  "hello",
  function () {
    console.log("accès en lecture");
  },
  function () {
    console.log("accès en écriture");
  }
);
//obj.hello = "autrechose";
obj.hello;*/

export function setPrivatesAndConstants(obj) {
  // changer le descripteur de chaque propriété de l'objet:
  // énumérable si la clé ne commence pas par par un _
  // mutable et configurable si la clé ne commence pas par une majuscule (regex: /[A-Z]/)
  for (let clé in obj) {
    Object.defineProperty(obj, clé, {
      enumerable: !clé.startsWith("_"),
      writable: clé[0] !== clé[0].toUpperCase(),
      configurable: clé[0] !== clé[0].toUpperCase()
    });
  }
}
