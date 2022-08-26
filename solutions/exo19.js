export const addAliasForProperties = (object, alias) => {
  // TODO: return a Proxy for `object`
  // allowing to declare aliases for some properties
  // the alias can be used for both reading or writing a value on the aliased property
  return new Proxy(object, {
    has(obj, prop) {
      return Reflect.has(obj, prop) || alias.hasOwnProperty(prop);
    },
    get(obj, prop) {
      return Reflect.get(obj, alias.hasOwnProperty(prop) ? alias[prop] : prop);
    },
    set(obj, prop, val) {
      return Reflect.set(obj, alias.hasOwnProperty(prop) ? alias[prop] : prop, val);
    }
  });
};

// example:
const user = addAliasForProperties(
  { name: "Sanchez", first: "Rick" },
  { lastName: "name", firstName: "first" }
);
console.log(`${user.firstName} ${user.lastName}`); // Rick Sanchez

export const countFunctionCalls = fn => {
  // TODO: return a Proxy for function `fn`
  // allowing to count the number of times this function has been called
  // the count can be retrieved with `fn.count`
  let count = 0;
  return new Proxy(fn, {
    get(o, key) {
      return key === "count" ? count : Reflect.get(o, key)
    },
    apply(...args) {
      count++;
      return Reflect.apply(...args)
    }
  })
};
