export const person = {
  name: "",
  first: "",
  getFullName() {
    return `${this.first} ${this.name}`;
  }
};

// TODO : assigner person comme prototype
export const user = {
  rights: [],
  hasRight(right) {
    return this.rights.includes(right);
  }
};

// TODO: assigner user comme prototype
export const bob = {
  name: "Afett",
  first: "Bob",
  rights: ["create", "read"]
};

// 1) avec Object.setPrototypeOf
Object.setPrototypeOf(user, person);
Object.setPrototypeOf(bob, user);
// bob.hasRight
// user.getFullName
// bob.getFullName

// 2) avec Object.create et avec Object.assign

// export const user = Object.create(person);
// Object.assign(user, {
//   rights: [],
//   hasRight(right) {
//     return this.rights.includes(right);
//   }
// });

// export const bob = Object.create(user);
// Object.assign(bob, {
//   name: "Afett",
//   first: "Bob",
//   rights: ["create", "read"]
// });
