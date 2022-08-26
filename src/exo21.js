import data from "../__tests__/fakedata.json";

// TODO: return the composed function of the functions passed as arguments
// compose(f,g,h)(...args) <=> h(g(f(...args)))
export function compose() {

}

// composed functions must be pure and immutable
export const where = (field, condition, array) => array.filter(({ [field]: value }) => condition(value))
export const orderBy = (field, array) => [...array].sort((a, b) => a[field] < b[field] ? -1 : 1);
export const take = (number, array) => array.slice(0, number)
export const map = (transform, array) => array.map(transform)

// example:
const query = compose(
    data => where("age", n => n >= 18, data),
    results => orderBy("lastName", results),
    results => take(5, results),
    results => map(user => `${user.firstName} ${user.lastName}`, results)
)

console.log(
    query(data).join("\n")
);
