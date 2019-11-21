export const addAliasForProperties = (object, alias) => {
  // TODO: retourner un Proxy pour l'objet permettant
  // de déclarer des alias pour accéder en lecture ou écriture
  // à une propriété de l'objet
  return new Proxy(object, {
    has(obj, prop) {
      return Reflect.has(obj, prop) || alias.hasOwnProperty(prop);
    },
    get(obj, prop) {
      return Reflect.get(obj, alias.hasOwnProperty(prop) ? alias[prop] : prop);
    },
    set(obj, prop, val) {
      return Reflect.set(obj, alias.hasOwnProperty(prop) ? alias[prop] : prop, val);
    }
  });
};

// exemple d'utilisation:
const user = addAliasForProperties(
  { name: "Sanchez", first: "Rick" },
  { lastName: "name", firstName: "firstName" }
);
console.log(`${user.firstName} ${user.lastName}`); // Rick Sanchez

export const countFunctionCalls = fn => {
  // TODO: retourner un Proxy pour la fonction permettant
  // de compter le nombre d'appels faits pour cette fonction,
  // stocké dans la propriété fn.count
  let count = 0;
  return new Proxy(fn, {
    get(o, key) {
      return key === "count" ? count : Reflect.get(o, key)
    },
    apply(...args) {
      count++;
      return Reflect.apply(...args)
    }
  })
};
