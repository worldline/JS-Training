import data from "../test/fakedata.json";

export const query = array =>
  Object.assign(array, {
    where(key, condition) {
      //TODO: filtrer les éléments selon une condition sur une propriété
    },
    orderBy(key) {
      //TODO: trier les éléments selon une propriété
    },
    take(number) {
      //TODO: retourner les N premiers éléments de la liste
    }
  });

// exemple d'utilisation
console.log(
  query(data)
    .where("age", n => n >= 18)
    .orderBy("lastName")
    .take(5)
    .map(user => `${user.firstName} ${user.lastName}`)
    .join("\n")
);
