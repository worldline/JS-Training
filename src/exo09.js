/*export function parseUserData(data) {
  // TODO: retourner un nouvel objet avec les propriétés de l'objet data
  // et ces valeurs par défaut pour les propriétés manquantes :
  const defaults = { name: "Anonymous", isAdmin: false };

  // 1 - en utilisant Object.assign
  // 2 - en utilisant l'opérateur spread sur les properties
  // 3 - en utilisant le destructuring et les paramètres par défaut pour parseUserData


   //return Object.assign({}, defaults,data);
   
 
   //return {...defaults, ...data};
  
}
*/

export function parseUserData({
  name = "Anonymous",
  isAdmin = false,
  ...autresProps
}) {
  return { name, isAdmin, ...autresProps };
}
