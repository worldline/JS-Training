import { compose } from "../src/exo10";

const join = (...args) => args.join(", "),
  trim = s => s.trim(),
  uppercase = s => s.toUpperCase(),
  exclamation = s => s + "!";

it("compose function with one argument", () => {
  const f = compose(
    uppercase,
    exclamation
  );
  expect(f("hi")).toBe("HI!");
});

it("compose function with several arguments", () => {
  const f = compose(
    join,
    trim,
    uppercase,
    exclamation
  );

  expect(f("Hello", "World")).toBe("HELLO, WORLD!");
  expect(f("  one", "two", "three", "four  ")).toBe("ONE, TWO, THREE, FOUR!");
});
