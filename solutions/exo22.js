import data from "../test/fakedata.json";
import {
    compose,
    where as oldWhere,
    orderBy as oldOrderBy,
    take as oldTake,
    map as oldMap
} from "./exo21";
export { compose } from "./exo21";

// TODO: implémenter la fonction curry
// astuce: fn.length retourne le nombre d'arguments dans la signature de la fonction
export const curry = (fn, ...savedArgs) => (...newArgs) => {
    const args = [...savedArgs, ...newArgs];
    return (args.length < fn.length) ? curry(fn, ...args) : fn(...args)
}

export const where = curry(oldWhere)
export const orderBy = curry(oldOrderBy)
export const take = curry(oldTake)
export const map = curry(oldMap)

// exemple d'utilisation
const query = compose(
    where("age")(n => n >= 18),
    orderBy("lastName"),
    take(5),
    map(user => `${user.firstName} ${user.lastName}`)
)

console.log(
    query(data).join("\n")
);
