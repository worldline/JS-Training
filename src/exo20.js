import data from "../test/fakedata.json";

export const query = array =>
  Object.assign(array, {
    //TODO: implémenter les méthodes
    where(field, condition) { },
    orderBy(field) { },
    take(number) { }
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
