export const range = (start, end) => {
  const objIterable = {
    // retourner un itérable itérant entre les deux bornes numériques
    [Symbol.iterator]: function () {
      let temp = start;
      return {
        next() {
          return {
            done: temp > end,
            value: temp++
          };
        }
      };
    }
  };

  return objIterable;
};

//   return {
//     [Symbol.iterator]: function* () {
//       let temp = start;
//       while (temp <= end) yield temp++;
//     }
//   };
// };

// exemple d'utilisation
// [...range(5,10)]
// -> [5,6,7,8,9,10]
