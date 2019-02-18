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

// 1) avec Object.setPrototypeOf
Object.setPrototypeOf(user, person);

// TODO: assigner user comme prototype
// 2) avec Object.create et avec Object.assign
export const bob = Object.assign(Object.create(user), {
  name: "Afett",
  first: "Bob",
  rights: ["create", "read"]
});


