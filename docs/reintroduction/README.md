# A reintroduction to JavaScript

## Getters / Setters

```js
const user = {
  name: "Smith",
  first: "John",

  get fullName() {
    return this.first + " " + this.name.toUpperCase();
  },

  set fullName(value) {
    this.first = value.split(" ")[0];
    this.last = value.split(" ")[1];
  }
};
```
