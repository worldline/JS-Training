import data from "../test/fakedata.json";

export function compose(f, ...fns) {
    return (...args) => fns.reduce((x, g) => g(x), f(...args))
}

// les fonctions composées doivent être pures et non mutables
export const where = (field, condition, array) => { }
export const orderBy = (field, array) => { };
export const take = (number, array) => { }
export const map = (transform, array) => { }

// exemple d'utilisation
const query = compose(
    data => where("age", n => n >= 18, data),
    results => orderBy("lastName", results),
    results => take(5, results),
    results => map(user => `${user.firstName} ${user.lastName}`, results)
)

console.log(
    query(data).join("\n")
);
