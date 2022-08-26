import data from "../__tests__/fakedata.json";
import {
    compose,
    where as oldWhere,
    orderBy as oldOrderBy,
    take as oldTake,
    map as oldMap
} from "./exo21";
export { compose } from "./exo21";

// HINT: fn.length returns the number of arguments in the function signature
export const curry = (fn, ...savedArgs) => {
    // if I have all the arguments, call fn with these arguments
    if (savedArgs.length >= fn.length) return fn(...savedArgs);

    // otherwise, return another function that will take the remaining arguments
    return (...args) => curry(fn, ...savedArgs, ...args);
};

export const where = curry(oldWhere)
export const orderBy = curry(oldOrderBy)
export const take = curry(oldTake)
export const map = curry(oldMap)

// example :
const query = compose(
    where("age")(n => n >= 18),
    orderBy("lastName"),
    take(5),
    map(user => `${user.firstName} ${user.lastName}`)
)

console.log(
    query(data).join("\n")
);
