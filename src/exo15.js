export const person = {
  name: "",
  first: "",
  getFullName() {
    return `${this.first} ${this.name}`;
  }
};

// TODO : set person as prototype of user
export const user = {
  rights: [],
  hasRight(right) {
    return this.rights.includes(right);
  }
};

// TODO: set user as prototype of bob
export const bob = {
  name: "Afett",
  first: "Bob",
  rights: ["create", "read"]
};

// 1) with Object.setPrototypeOf
// 2) with Object.create and Object.assign
