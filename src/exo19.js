export const addAliasForProperties = (object, alias) => {
  // TODO: return a Proxy for `object`
  // allowing to declare aliases for some properties
  // the alias can be used for both reading or writing a value on the aliased property
  return object;
};

// example:
const originalUser =  { name: "Sanchez", first: "Rick" }
const user = addAliasForProperties(originalUser, { lastName: "name", firstName: "first" });

// `${user.firstName} ${user.lastName}` === "Rick Sanchez"

export const countFunctionCalls = fn => {
  // TODO: return a Proxy for function `fn`
  // allowing to count the number of times this function has been called
  // the count can be retrieved with `fn.count`
  return fn;
};

// example:
const fn = countFunctionCalls(n => n * 2);
fn(1);
fn(2);
fn(999);

// fn.count === 3
