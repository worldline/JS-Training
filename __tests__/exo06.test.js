import { parseUserData } from "../src/exo06";

const a = parseUserData({
  name: "Luke",
  age: 28,
  rightId: 0,
  company: "Microsoft"
});

const b = parseUserData({
  name: "",
  age: "",
  rightId: false,
  company: "Google"
});

const c = parseUserData({
  name: null,
  age: "12",
  rightId: null,
  company: "Apple"
});

const d = parseUserData({
  name: null,
  age: null,
  rightId: null,
  company: null
});

it("should parse name correctly", () => {
  expect(a.name).toBe("Luke");
  expect(b.name).toBe("Anonymous");
  expect(c.name).toBe("Anonymous");
  expect(d.name).toBe("Anonymous");
});

it("should parse age correctly", () => {
  expect(a.age).toBe(28);
  expect(b.age).toBe(0);
  expect(c.age).toBe(12);
  expect(d.age).toBe(0);
});

it("should parse isAdmin correctly", () => {
  expect(a.isAdmin).toBe(true);
  expect(b.isAdmin).toBe(false);
  expect(c.isAdmin).toBe(false);
  expect(d.isAdmin).toBe(false);
});

it("should parse company correctly", () => {
  expect(a.company).toBe("Microsoft");
  expect(b.company).toBe(false);
  expect(c.company).toBe(false);
  expect(d.company).toBe(false);
});
