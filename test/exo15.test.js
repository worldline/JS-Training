import { bob, user, person } from "../src/exo13";

it("should have user prototype", () => {
  expect(Object.getPrototypeOf(bob)).toBe(user);
  expect(bob.hasRight("create")).toBe(true);
  expect(bob.hasRight("delete")).toBe(false);
});

it("should have person prototype", () => {
  expect(Object.getPrototypeOf(user)).toBe(person);
  expect(person.isPrototypeOf(bob)).toBe(true);
  expect(bob.getFullName()).toBe("Bob Afett");
});
