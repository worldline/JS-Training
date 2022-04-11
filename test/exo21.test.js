import { compose, where, orderBy, take, map } from "../src/exo21";
import data from "./fakedata.json";

const join = (...args) => args.join(", "),
    trim = s => s.trim(),
    uppercase = s => s.toUpperCase(),
    exclamation = s => s + "!";

test("compose function with one argument", () => {
    const f = compose(
        uppercase,
        exclamation
    );
    expect(f("hi")).toBe("HI!");
});

test("compose function with several arguments", () => {
    const f = compose(
        join,
        trim,
        uppercase,
        exclamation
    );

    expect(f("Hello", "World")).toBe("HELLO, WORLD!");
    expect(f("  one", "two", "three", "four  ")).toBe("ONE, TWO, THREE, FOUR!");
});

test("where, orderBy, take and map composition", () => {
    const query = compose(
        data => where("age", n => n >= 25, data),
        data => where("lastName", name => name.length > 5, data),
        data => orderBy("_id", data),
        data => take(3, data),
        data => map(user => user.company, data)
    )

    const results = query(data);

    expect(results.length).toBe(3);
    expect(results.join(",")).toBe("DEMINIMUM,UTARA,CINASTER");
});
