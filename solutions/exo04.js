export function spyOnProperty(obj, prop, onRead, onWrite) {
  // changer le descripteur de la propriété prop de l'objet obj:
  // - appeler onRead() lorsque la propriété prop est accédée
  // - appeler onWrite(newValue) lorsque la propriété prop est modifiée
  // ces fonctions sont juste des observateurs, elles n'ont pas de valeur de retour
  // or il doit toujours être possible d'écrire et de lire une valeur pour la propriété prop
  let value = obj[prop];
  Object.defineProperty(obj, prop, {
    get() {
      onRead(value);
      return value
    },
    set(newValue) {
      onWrite(newValue)
      value = newValue;
    }
  })
}

export function setPrivatesAndConstants(obj) {
  // changer le descripteur de chaque propriété de l'objet:
  // les propriétés dont la clé commence par un _ doivent être non énumérables
  // les propriétés dont la clé commence par une majuscule doivent être non modifiables et non configurables
  for (let prop in obj) {
    Object.defineProperty(obj, prop, {
      enumerable: !prop.startsWith("_"),
      writable: prop[0].toUpperCase() !== prop[0],
      configurable: !/[A-Z]/.test(prop[0]) // alternative pour tester la majuscule
    })
  }


  // SOLUTION 2 avec Object.defineProperties
  /*Object.defineProperties(obj, Object.fromEntries(Object.keys(obj).map(clé => {
    return [clé, {
      enumerable: !clé.startsWith("_"),
      writable: !/[A-Z]/.test(clé[0]),
      configurable: !/[A-Z]/.test(clé[0])
    }]
  })))*/

  
}
