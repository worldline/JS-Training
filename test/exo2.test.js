import {
  hasProperty,
  hasPropertyValue,
  getNumberOfProperties
} from "../src/exo2";

it("hasProperty", () => {
  expect(hasProperty({ a: 1, b: 2, test: 42 }, "test")).toBe(true);
  expect(hasProperty({}, "test")).toBe(false);
  expect(hasProperty([], "length")).toBe(true);
  expect(hasProperty([], "size")).toBe(false);
  expect(hasProperty([1, 2, 3], 2)).toBe(true);
  expect(hasProperty([1, 2, 3], 3)).toBe(false);
});

it("hasPropertyValue", () => {
  expect(hasPropertyValue({ test: 42 }, 42)).toBe(true);
  expect(hasPropertyValue({ test: 43 }, 42)).toBe(false);
  expect(hasPropertyValue({}, 42)).toBe(false);
  expect(hasPropertyValue([1, 2, 3], 3)).toBe(true);
  expect(hasProperty([1, 2, 3], 4)).toBe(false);
});

it("getNumberOfProperties", () => {
  expect(getNumberOfProperties({})).toBe(0);
  expect(getNumberOfProperties({ test: 42 })).toBe(1);
  expect(getNumberOfProperties({ a: 1, b: 2, c: 3 })).toBe(3);
  expect(getNumberOfProperties([1, 2, 3])).toBe(3);
});
