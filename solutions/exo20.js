import data from "../__tests__/fakedata.json";

export const query = array =>
    Object.assign(array, {
        where(key, condition) {
            return query(this.filter(({ [key]: value }) => condition(value)))
        },
        orderBy(key) {
            return query([...this].sort((a, b) => a[key] < b[key] ? -1 : 1))
        },
        take(number) {
            return query(this.slice(0, number))
        }
    });

// example
console.log(
    query(data)
        .where("age", n => n >= 18)
        .orderBy("lastName")
        .take(5)
        .map(user => `${user.firstName} ${user.lastName}`)
        .join("\n")
);
