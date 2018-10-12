import { compose, where, orderBy, take, map } from "../src/exo21";
import data from "./fakedata.json";

test("where", () => {
    let arr = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }]
    let odds = where("x", n => n % 2 > 0, arr)
    expect(odds.length).toBe(2)
    expect(odds.map(o => o.x).join(",")).toBe("1,3")
    expect(arr.length).toBe(4);
})

test("orderBy", () => {
    let arr = [{ x: 3 }, { x: 1 }, { x: 4 }, { x: 2 }];
    let ordered = orderBy("x", arr);
    expect(ordered.length).toBe(4)
    expect(ordered.map(o => o.x).join(",")).toBe("1,2,3,4")
    expect(arr.length).toBe(4);
    expect(arr.map(o => o.x).join(",")).toBe("3,1,4,2")
})

test("take", () => {
    let arr = [1, 2, 3, 4, 5];
    let firsttwo = take(2, arr)
    expect(firsttwo.join(",")).toBe("1,2")
    expect(arr.join(",")).toBe("1,2,3,4,5")
})

test("map", () => {
    let arr = [1, 2, 3, 4, 5];
    let result = map(n => n * 2, arr)
    expect(result.join(",")).toBe("2,4,6,8,10")
    expect(arr.join(",")).toBe("1,2,3,4,5")
})

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
