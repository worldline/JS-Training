export function parseUserData(data) {
  // Résoudre l'exercice en utilisant uniquement des opérateurs,
  // pas de if()

  return {
    // retourner data.name ou "Anonymous" si data.name est falsey
    //eq data.name falsey si null OU le string
    name: data.name || "Anonymous",

    // convertir data.age en nombre, retourner 0 si ce n'est pas un nombre
    /** eq Nan est falsey OR O */
    age: +data.age || 0,

    // retourner true si data.rightId est égal à 0
    isAdmin: data.rightId === 0,

    // si data.friends est une Array, retourner sa longueur
    // sinon retourner false
    /** eq boolean AND la longeure */
    friends: Array.isArray(data.friends) && data.friends.length
  };
}
