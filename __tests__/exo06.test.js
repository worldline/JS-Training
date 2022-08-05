import { parseUserData } from "../src/exo06";

const a = parseUserData({
  name: "Luke",
  age: 28,
  rightId: 0,
  friends: ["joe", "jack", "averell"]
});

const b = parseUserData({
  name: "",
  age: "",
  rightId: false,
  friends: "none"
});

const c = parseUserData({
  name: null,
  age: "12",
  rightId: null,
  friends: []
});

const d = parseUserData({
  name: null,
  age: null,
  rightId: null,
  friends: null
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

it("should parse friends correctly", () => {
  expect(a.friends).toBe(3);
  expect(b.friends).toBe(false);
  expect(c.friends).toBe(0);
  expect(d.friends).toBe(false);
});
