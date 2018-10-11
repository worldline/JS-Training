export function parseUserData(data) {
  // TODO: retourner un nouvel objet avec les propriétés de l'objet data
  // et ces valeurs par défaut pour les propriétés manquantes :
  const defaults = { name: "Anonymous", isAdmin: false };

  // solution 1 : en utilisant Object.assign
  return Object.assign({}, defaults, data);

  // solution 2 : en utilisant l'opérateur spread sur les properties
  return { ...defaults, ...data }
}

// solution 3 : en utilisant le destructuring et les paramètres par défaut pour parseUserData
export function parseUserData2({ name = "Anonymous", isAdmin = false, ...rest }) {
  return { name, isAdmin, ...rest }
}