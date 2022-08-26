export function parseUserData(data) {
   // TODO: return a new object with the properties of data
  // and these values applied as default for missing properties :
  const defaults = { name: "Anonymous", isAdmin: false };

  // solution 1 : using Object.assign
  return Object.assign({}, defaults, data);

  // solution 2 : using spread operator on properties
  return { ...defaults, ...data }
}

// solution 3 :  using destructuring and default parameters for parseUserData
export function parseUserData2({
  name = "Anonymous",
  isAdmin = false,
  ...otherData
}) {
  return { name, isAdmin, ...otherData }
}