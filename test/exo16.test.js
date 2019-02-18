import { bob, User, Person } from "../src/exo16";

it("should have User prototype", () => {
  expect(bob instanceof User).toBe(true);
  expect(Object.getPrototypeOf(bob)).toBe(User.prototype);
  expect(bob.hasRight("create")).toBe(true);
  expect(bob.hasRight("delete")).toBe(false);
});

it("should have Person prototype", () => {
  expect(bob instanceof Person).toBe(true);
  expect(Object.getPrototypeOf(User.prototype)).toBe(Person.prototype);
  expect(Person.prototype.isPrototypeOf(bob)).toBe(true);
  expect(bob.getFullName()).toBe("Bob Afett");
});
