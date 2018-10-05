export function parseUserData(data) {
  // Résoudre l'exercice en utilisant uniquement des opérateurs, pas de if()

  return {
    // retourner data.name ou "Anonymous" si data.name est falsey
    name: data.name || "Anonymous",

    // convertir data.age en nombre, retourner 0 si ce n'est pas un nombre
    age: +data.age || 0,

    // retourner true si data.rightId est égal à 0
    isAdmin: data.rightId === 0,

    // si data.friends est une Array, retourner sa longueur
    // sinon retourner false
    friends: Array.isArray(data.friends) ? data.friends.length : false
  };
}
