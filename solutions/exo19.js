export const addAliasForObject = (object, alias) => {
  // TODO: retourner un Proxy pour l'objet permettant
  // d'utiliser des alias pour accéder en lecture ou écriture
  // à une propriété de l'objet
  return new Proxy(object, {
    get(o, key) {
      if (alias.hasOwnProperty(key)) return o[alias[key]];
      else return Reflect.get(o, key);
    },
    set(o, key, val) {
      if (alias.hasOwnProperty(key)) o[alias[key]] = val;
      else return Reflect.set(o, key, val);
    }
  });
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
  let count = 0;
  return new Proxy(fn, {
    get(o, key){
      return key === "count" ? count : Reflect.get(o, key)
    },
    apply(...args){
      count++;
      return Reflect.apply(...args)
    }
  })
  return fn;
};
