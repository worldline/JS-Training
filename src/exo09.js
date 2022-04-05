export function parseUserData1(data) {
  // TODO: retourner un nouvel objet avec les propriétés de l'objet data
  // et ces valeurs par défaut pour les propriétés manquantes :

  // 1 - en utilisant Object.assign
  const defaults = { name: "Anonymous", isAdmin: false };
  return Object.assign({}, defaults, data);
}

export function parseUserData2(data) {
  const defaults = { name: "Anonymous", isAdmin: false };
  // 2 - en utilisant l'opérateur spread sur les properties
  return { ...defaults, ...data };
}

export function parseUserData({
  name = "Anonymous",
  isAdmin = false,
  ...autresProps
}) {
  // 3 - en utilisant le destructuring et les paramètres par défaut pour parseUserData

  return { name, isAdmin, ...autresProps };
}
