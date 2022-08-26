export const person = {
  name: "",
  first: "",
  getFullName() {
    return `${this.first} ${this.name}`;
  }
};

export const user = {
  rights: [],
  hasRight(right) {
    return this.rights.includes(right);
  }
};

// set person as prototype of user
// solution 1: using Object.setPrototypeOf
Object.setPrototypeOf(user, person);

// set user as prototype of bob
// solution 2: using Object.create and Object.assign
export const bob = Object.assign(Object.create(user), {
  name: "Afett",
  first: "Bob",
  rights: ["create", "read"]
});


