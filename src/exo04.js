export function addWatcher(obj, prop, getter, setter) {
  // change le descripteur pour appeler les fonctions:
  // - getter lorsque la propriété prop est accédée
  // - setter lorsque la propriété prop est modifiée
}

export function setPrivatesAndConstants(obj) {
  // changer le descripteur des propriétés:
  // - commençant par un _ : non énumérables
  // - commençant par une majuscule : non mutables et non configurables
}
