export function addWatcher(obj, prop, getter, setter) {
  // change le descripteur de la propriété prop de l'objet obj pour appeler les fonctions:
  // - getter lorsque la propriété prop est accédée
  // - setter lorsque la propriété prop est modifiée
  // il doit toujours être possible d'écrire et de lire une valeur pour la propriété prop
  let value = obj[prop];
  Object.defineProperty(obj, prop, {
    get() {
      getter(value);
      return value
    },
    set(newValue) {
      setter(newValue)
      value = newValue;
    }
  })
}

export function setPrivatesAndConstants(obj) {
  // changer le descripteur de chaque propriété de l'objet:
  // énumérable si la clé ne commence pas par par un _
  // mutable et configurable si la clé ne commence pas par une majuscule (A-Z)
  for (let prop in obj) {
    Object.defineProperty(obj, prop, {
      enumerable: !prop.startsWith("_"),
      writable: !/A-Z/.test(prop[0]),
      configurable: !/A-Z/.test(prop[0])
    })
  }
}
