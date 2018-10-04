export const addAliasForObject = (object, alias) => {
  // TODO: retourner un Proxy pour l'objet permettant
  // d'utiliser des alias pour accéder en lecture ou écriture
  // à une propriété de l'objet
  return object;
};

// exemple d'utilisation:
const user = addAliasForObject(
  { name: "Sanchez", first: "Rick" },
  { lastName: "name", firstName: "firstName" }
);
console.log(`${user.firstName} ${user.lastName}`); // Rick Sanchez

export const countFunctionCalls = fn => {
  // TODO: retourner un Proxy pour la fonction permettant
  // de compter le nombre d'appels faits pour cette fonction,
  // stocké dans la propriété fn.count
  return fn;
};

// exemple d'utilisation:
const fn = countFunctionCalls(n => n * 2);
fn(1);
fn(2);
fn(999);
console.log(fn.count); // 3
