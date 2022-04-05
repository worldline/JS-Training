// essayez d'utiliser l'opérateur spread et rest

// TODO: fonction retournant un objet avec comme propriétés
// la liste des valeurs reçues en arguments et comme valeur
// le nombre de fois où elles sont apparues
export function count(...args) {
  //let argsTab = args;

  return args.reduce((countObj, legume) => {
    let count = countObj[legume] || 0;
    count += 1;
    countObj[legume] = count;
    return countObj;
  }, {});
}

// exemple d'utilisation:
count("Carotte", "Chou", "Patate", "Chou", "Chou", "Carotte");
// { Carotte: 2, Chou: 3, Patate: 1 }

// TODO: fonction retournant l'argument apparu le plus de fois
export function mostFrequentIn(...args) {
  let countFruit = count(...args);
  let countMax = Math.max(...Object.values(countFruit));
  // return Object.keys(legume).find(legume => )

  return Object.keys(countFruit).find(
    (legume) => countFruit[legume] === countMax
  );

  // revoir Array.prototype.find()
  // (on doit retourner un string, cad la value, pas l'obj)
  // Object.keys(legume).find(legume => Object.keys(countFruit) === countMax)
}

// exemple d'utilisation:
mostFrequentIn("Carotte", "Chou", "Patate", "Chou", "Chou", "Carotte") ===
  "Chou";
