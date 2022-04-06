export const range = (start, end) => {
  const objetIterable = {
    // c'est un objet
    // la valeur de [Symbol.iterator] c'est une function
    [Symbol.iterator]: function* () {
      // retourner un itérable itérant entre les deux bornes numériques
      for (let i = start; i <= end; i++) {
        yield i;
      }
    }
  };

  return objetIterable;
};

// exemple d'utilisation
// [...range(5,10)]
// -> [5,6,7,8,9,10]
