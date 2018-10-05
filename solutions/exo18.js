export const range = (start, end) => {
    // retourner un itérable itérant entre les deux bornes numériques
    return {
        [Symbol.iterator]: function* () {
            let i = start;
            while (i <= end) yield i++;
        }
    }
};