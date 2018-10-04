import { addAliasForObject, countFunctionCalls } from "../src/exo19";

it("should add alias for object", () => {
  const user = addAliasForObject(
    { name: "Sanchez", first: "Rick" },
    { lastName: "name", firstName: "first", friend: "morty" }
  );

  expect(`${user.first} ${user.lastName}`).toBe("Rick Sanchez");
  expect(`${user.firstName} ${user.name}`).toBe("Rick Sanchez");
  user.morty = "Morty";
  expect(user.friend).toBe("Morty");
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
