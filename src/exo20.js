import data from "../test/exo20.data.json";

export const query = array =>
  Object.assign(array, {
    //TODO: implémenter les méthodes
    where(field, condition) { },
    orderBy(field) { },
    take(number) { }
  });

// exemple d'utilisation
console.log(
  query(data.users)
    .where("age", n => n >= 18)
    .orderBy("lastName")
    .take(5)
    .map(user => `${user.firstName} ${user.lastName}`)
    .join("\n")
);
