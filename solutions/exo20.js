import data from "../test/fakedata.json";

export const query = array =>
    Object.assign(array, {
        where(field, condition) {
            return query(this.filter(({ [field]: value }) => condition(value)))
        },
        orderBy(field) {
            return query([...this].sort((a, b) => a[field] < b[field] ? -1 : 1))
        },
        take(number) {
            return query(this.slice(0, number))
        }
    });

// exemple d'utilisation
console.log(
    query(data)
        .where("age", n => n >= 18)
        .orderBy("lastName")
        .take(5)
        .map(user => `${user.firstName} ${user.lastName}`)
        .join("\n")
);
