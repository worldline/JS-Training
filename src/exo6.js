export const Person = {
  name: "",
  first: "",
  getFullName() {
    return `${this.first} ${this.name}`;
  }
};

// TODO : assigner Person comme prototype
export const User = {
  rights: [],
  hasRight(right) {
    return this.rights.includes(right);
  }
};

// TODO: assigner User comme prototype
export const bob = {
  name: "Afett",
  first: "Bob",
  rights: ["create", "read"]
};

// 1) avec Object.setPrototypeOf
// 2) avec Object.create et avec Object.assign
