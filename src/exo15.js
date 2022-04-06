export const person = {
  name: "",
  first: "",
  getFullName() {
    return `${this.first} ${this.name}`;
  }
};

// TODO : assigner person comme prototype
/*export const user = {
  rights: [],
  hasRight(right) {
    return this.rights.includes(right);
  }
};*/

// TODO: assigner user comme prototype
/*export const bob = {
  name: "Afett",
  first: "Bob",
  rights: ["create", "read"]
};
*/

// 1) avec Object.setPrototypeOf
// 2) avec Object.create et avec Object.assign
//Object.setPrototypeOf(bob, user);
//Object.setPrototypeOf(user, person);

export const user = Object.create(person);
Object.assign(user, {
  rights: [],
  hasRight(right) {
    return this.rights.includes(right);
  }
});
export const bob = Object.create(user);
Object.assign(bob, {
  name: "Afett",
  first: "Bob",
  rights: ["create", "read"]
});
