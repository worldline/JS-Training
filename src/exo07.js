export function Person(first, name) {
  // TODO: assigner first et name comme propriétés propres
}

Object.assign(Person.prototype, {
  name: "",
  first: "",
  getFullName() {
    return `${this.first} ${this.name}`;
  }
});

export function User(first, name, rights) {
  // TODO: appeler le constructeur Person avec le bon contexte d'éxécution
  // TODO: assigner rights comme propriété propre
}

// TODO: définir Person.prototype comme prototype de User.prototype

Object.assign(User.prototype, {
  rights: [],
  hasRight(right) {
    return this.rights.includes(right);
  }
});

export const bob = new User("Bob", "Afett", ["create", "read"]);
