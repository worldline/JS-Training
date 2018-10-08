export function Person(first, name) {
  // TODO: assigner first et name comme propriétés propres
  this.first = first;
  this.name = name;
}

Object.assign(Person.prototype, {
  name: "",
  first: "",
  getFullName() {
    return `${this.first} ${this.name}`;
  }
});

export function User(first, name, rights) {
  // TODO: appeler le constructeur Person
  // TODO: assigner rights comme propriété propre
  Person.call(this, first, name);
  this.rights = rights;
}

// TODO: définir Person.prototype comme prototype de User.prototype
User.prototype = Object.create(Person.prototype)
// ou
// Object.setPrototypeOf(User.prototype, Person.prototype)


Object.assign(User.prototype, {
  rights: [],
  hasRight(right) {
    return this.rights.includes(right);
  }
});

export const bob = new User("Bob", "Afett", ["create", "read"]);
