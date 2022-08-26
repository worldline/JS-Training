export const range = (start, end) => {
    // return an iterable iterating over all the numbers between two bounds
    return {
        [Symbol.iterator]: function* () {
            let i = start;
            while (i <= end) yield i++;
        }
    }
};

// example:
// [...range(5,10)]
// -> [5,6,7,8,9,10]