// retourne true si l'objet a une propriété ayant comme clé key
export function hasProperty(obj, key) {
  return obj && key in obj;
}

// retourne true si l'objet a une propriété ayant comme valeur value
export function hasPropertyValue(obj, value) {
  if (!obj) return false;
  for (let key in obj) {
    if (obj[key] === value) return true;
  }
  return false;
}

// retourne le nombre de propriétés d'un objet (note: sans compter les propriétés déléguées)
export function getNumberOfProperties(obj) {
  return obj && Object.keys(obj).length;
}
