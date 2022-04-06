import data from "../__tests__/fakedata.json";

export const query = (array) =>
  Object.assign(array, {
    where(key, condition) {
      //TODO: filtrer les éléments selon une condition sur une propriété
      let result = array.filter((data) => condition(data[key]));
      return query(result);
    },
    orderBy(key) {
      //TODO: trier les éléments selon une propriété
      // clonage de l'array grâce au spread pour ne pas modifié l'entrée
      return query(
        [...array].sort((a, b) => {
          //TODO: revoir ça :
          return a[key].localCompare(b[key]);
        })
      );
    },
    take(number) {
      //TODO: retourner les N premiers éléments de la liste
      return query(array.slice(0, number));
    }
  });

// exemple d'utilisation
console.log(
  query(data)
    .where("age", (n) => n >= 18)
    .orderBy("lastName")
    .take(5)
    .map((user) => `${user.firstName} ${user.lastName}`)
    .join("\n")
);
