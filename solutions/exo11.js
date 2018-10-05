export function parseUserData(data) {
  // data est un objet
  // ajouter ces valeurs par défaut pour les propriétés :
  const defaults = { name: "Anonymous", isAdmin: false };

  // 1 - en utilisant Object.assign
  return Object.assign({}, defaults, data);

  // 2 - en utilisant l'opérateur spread sur les properties
  return { ...defaults, ...data }
}

// 3 - en utilisant le destructuring et les valeurs de paramètres par défaut
export function parseUserData2({ name = "Anonymous", isAdmin = false, ...rest }) {
  return { name, isAdmin, ...rest }
}