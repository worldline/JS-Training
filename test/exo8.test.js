import { parseUserData } from "../src/exo8";

const a = parseUserData({
  // retourner data.name ou "Anonymous" si data.name est falsey
  //name: data.name,
  name: "Luke",

  // convertir data.age en nombre, retourner 0 si ce n'est pas un nombre
  //age: data.age,
  age: 28,

  // retourner true si data.rightId est égal à 0
  rightId: 0,

  // si data.friends est une Array, retourner sa longueur
  // sinon retourner false
  friends: ["joe", "jack", "averell"]
});

const b = parseUserData({
  // retourner data.name ou "Anonymous" si data.name est falsey
  //name: data.name,
  name: "",

  // convertir data.age en nombre, retourner 0 si ce n'est pas un nombre
  //age: data.age,
  age: "",

  // retourner true si data.rightId est égal à 0
  rightId: false,

  // si data.friends est une Array, retourner sa longueur
  // sinon retourner false
  friends: "none"
});

const c = parseUserData({
  // retourner data.name ou "Anonymous" si data.name est falsey
  //name: data.name,
  name: null,

  // convertir data.age en nombre, retourner 0 si ce n'est pas un nombre
  //age: data.age,
  age: null,

  // retourner true si data.rightId est égal à 0
  rightId: null,

  // si data.friends est une Array, retourner sa longueur
  // sinon retourner false
  friends: []
});

it("should parse name correctly", () => {
  expect(a.name).toBe("Luke");
  expect(b.name).toBe("Anonymous");
  expect(c.name).toBe("Anonymous");
});

it("should parse age correctly", () => {
  expect(a.age).to(28);
  expect(b.age).toBe(0);
  expect(c.age).toBe(0);
});

it("should parse isAdmin correctly", () => {
  expect(a.isAdmin).to(true);
  expect(b.isAdmin).toBe(false);
  expect(c.isAdmin).toBe(false);
});

it("should parse friends correctly", () => {
  expect(a.friends).to(3);
  expect(b.friends).toBe(false);
  expect(c.friends).toBe(0);
});
