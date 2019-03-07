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
export const curry = (fn, ...savedArgs) => {
    // si j'ai tous les arguments, j'invoque ma fonction fn avec ces arguments

    // sinon, je stocke les arguments reçus dans savedArgs et je
    // retourne une fonction qui prendra les paramètres restants
    // astuce: utiliser récursivement la fonction curry
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