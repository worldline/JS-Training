import { deduplicateArray, getPropertyFromValue } from "../src/exo11";

it("should deduplicate array", () => {
  expect(deduplicateArray([1, 2, 3, 2, 1])).toEqual([1, 2, 3]);
  expect(deduplicateArray(["a", "b", "c", "b"])).toEqual(["a", "b", "c"]);
});

it("should get property from value", () => {
  const x = { x: 1 },
    y = { y: 2 };
  const o = { a: "b", b: "a", x, y };

  expect(getPropertyFromValue(o, "a")).toBe("b");
  expect(getPropertyFromValue(o, "b")).toBe("a");
  expect(getPropertyFromValue(o, x)).toBe("x");
  expect(getPropertyFromValue(o, y)).toBe("y");
});
