import { compose, curry, where, orderBy, take, map } from "../src/exo22";
import data from "./fakedata.json";

test("curry", () => {
    const sum = (a, b, c) => a + b + c
    const csum = curry(sum);
    expect(typeof csum).toBe("function")
    expect(typeof csum(10)).toBe("function")
    expect(csum(1)(2)(3)).toBe(6)
})

test("where, orderBy, take and map composition with curryfication", () => {
    const query = compose(
        where("age", n => n >= 25),
        where("lastName", name => name.length > 5),
        orderBy("_id"),
        take(3),
        map(user => user.company)
    )

    const results = query(data);

    expect(results.length).toBe(3);
    expect(results.join(",")).toBe("DEMINIMUM,UTARA,CINASTER");
});
