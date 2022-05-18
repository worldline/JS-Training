export function spyOnProperty(obj, prop, onRead, onWrite) {
  // changer le descripteur de la propriété prop de l'objet obj:
  // - appeler onRead() lorsque la propriété prop est accédée
  // - appeler onWrite(newValue) lorsque la propriété prop est modifiée
  // ces fonctions sont juste des observateurs, elles n'ont pas de valeur de retour
  // or il doit toujours être possible d'écrire et de lire une valeur pour la propriété prop
}

export function setPrivatesAndConstants(obj) {
  // changer le descripteur de chaque propriété de l'objet:
  // les propriétés dont la clé commence par un _ doivent être non énumérables
  // les propriétés dont la clé commence par une majuscule doivent être non modifiables et non configurables
}
