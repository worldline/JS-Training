export function addWatcher(obj, prop, getter, setter) {
  // change le descripteur pour appeler les fonctions:
  // - getter lorsque la propriété prop est accédée
  // - setter lorsque la propriété prop est modifiée
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
  // changer le descripteur des propriétés:
  // - commençant par un _ : non énumérables
  // - commençant par une majuscule : non mutables et non configurables
  for (let prop in obj) {
    Object.defineProperty(obj, prop, {
      enumerable: !prop.startsWith("_"),
      writable: prop[0].toUpperCase() !== prop[0],
      configurable: prop[0].toUpperCase() !== prop[0]
    })
  }
}
