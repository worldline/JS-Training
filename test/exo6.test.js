import { bob, User, Person } from "../src/exo6";

it("should have User prototype", () => {
  expect(Object.getPrototypeOf(bob)).toBe(User);
  expect(bob.hasRight("create")).toBe(true);
  expect(bob.hasRight("delete")).toBe(false);
});

it("should have Person prototype", () => {
  expect(Object.getPrototypeOf(User)).toBe(Person);
  expect(Person.isPrototypeOf(bob)).toBe(true);
  expect(bob.getFullName()).toBe("Bob Afett");
});
