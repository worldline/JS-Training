import { parseUserData } from "../src/exo11";

const joe = parseUserData({
  name: "Joe",
  age: 25,
  isAdmin: true
});

const anon = parseUserData({
  age: 99
});

it("should apply defaults", () => {
  expect(anon.name).toBe("Anonymous");
  expect(anon.age).toBe(99);
  expect(anon.isAdmin).toBe(false);
});

it("should not override existing props with defaults", () => {
  expect(joe.name).toBe("Joe");
  expect(joe.age).toBe(25);
  expect(joe.isAdmin).toBe(true);
});
