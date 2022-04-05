// retourne true si l'objet a une propriété ayant comme clé key
export function hasProperty(obj, key) {
  return key in obj;
}

// retourne true si l'objet a une propriété ayant comme valeur value
export function hasPropertyValue(obj, value) {
  return Object.values(obj).includes(value);
}

// retourne le nombre de propriétés d'un objet (note: sans compter les propriétés déléguées)
export function getNumberOfProperties(obj) {
  return Object.entries(obj).length;
}
