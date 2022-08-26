export function Person(first = "John", name = "Smith") {
  // assign first and name as own properties
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
  // call Person constructor with the right context
  Person.call(this, first, name);
  // assign rights as own property
  this.rights = rights;
}

// set Person.prototype as prototype of User.prototype

// solution 1
Object.setPrototypeOf(User.prototype, Person.prototype)

// solution 2
User.prototype = Object.create(Person.prototype)
User.prototype.constructor = User


Object.assign(User.prototype, {
  rights: [],
  hasRight(right) {
    return this.rights.includes(right);
  }
});

export const bob = new User("Bob", "Afett", ["create", "read"]);
