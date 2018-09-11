import { isPrimitive } from "../src/exo1.js";

it("should detect numbers as primitives", () => {
  expect(isPrimitive(42)).toBe(true);
  expect(isPrimitive(0)).toBe(true);
  expect(isPrimitive(-Infinity)).toBe(true);
});

it("should detect strings as primitives", () => {
  expect(isPrimitive("test")).toBe(true);
  expect(isPrimitive("")).toBe(true);
});

it("should detect booleans as primitives", () => {
  expect(isPrimitive(true)).toBe(true);
  expect(isPrimitive(false)).toBe(true);
});

it("should detect undefined and null as primitives", () => {
  expect(isPrimitive(undefined)).toBe(true);
  expect(isPrimitive(null)).toBe(true);
});

it("should detect Symbols as primitives", () => {
  const s = Symbol();
  expect(isPrimitive(s)).toBe(true);
});
