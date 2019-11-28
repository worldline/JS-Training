import { addAliasForProperties, countFunctionCalls } from "../src/exo19";

it("can read alias properties", () => {
  const user = addAliasForProperties(
    { name: "Sanchez", first: "Rick" },
    { lastName: "name", firstName: "first", friend: "grandson" }
  );

  expect(`${user.first} ${user.name}`).toBe("Rick Sanchez");
  expect(`${user.firstName} ${user.lastName}`).toBe("Rick Sanchez");
  user.grandson = "Morty";
  expect(user.friend).toBe("Morty");
});

it("can write in alias properties", () => {
  const user = addAliasForProperties(
    { name: "Sanchez", first: "Rick" },
    { lastName: "name", firstName: "first", friend: "buddy" }
  );

  user.first = "Jerry";
  user.lastName = "Smith"
  user.buddy = null;

  expect(`${user.first} ${user.name}`).toBe("Jerry Smith");
  expect(`${user.firstName} ${user.lastName}`).toBe("Jerry Smith");  
  expect(user.friend).toBe(null);
});

it("should count function calls", () => {
  const fn = countFunctionCalls(n => n * 2);
  expect(fn.count).toBe(0);
  fn(1);
  fn(2);
  fn(3);
  expect(fn(8)).toBe(16);
  expect(fn.count).toBe(4);
});
