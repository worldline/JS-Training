import data from "../test/fakedata.json";

// solution avec reduce()
export function compose(f, ...fns) {
    return (...args) => fns.reduce((x, g) => g(x), f(...args))
}

// solution récursive
export function compose_recursive(f, ...otherFns) {
    if (otherFns.length === 0) return f;
    return (...args) => compose_recursive(...otherFns)(f(...args));
}

// les fonctions composées doivent être pures et non mutables
export const where = (field, condition, array) => array.filter(({ [field]: value }) => condition(value))
export const orderBy = (field, array) => [...array].sort((a, b) => a[field] < b[field] ? -1 : 1);
export const take = (number, array) => array.slice(0, number)
export const map = (transform, array) => array.map(transform)

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
