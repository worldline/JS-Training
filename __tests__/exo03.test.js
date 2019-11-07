import { invertKeysAndValues } from "../src/exo03";

it("should invert keys and values", () => {
  expect(invertKeysAndValues({})).toEqual({});
  expect(invertKeysAndValues({ a: "b" })).toEqual({ b: "a" });
  expect(invertKeysAndValues({ name: "Sanchez", first: "Rick" })).toEqual({
    Rick: "first",
    Sanchez: "name"
  });
});
