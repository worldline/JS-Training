export function parseUserData(data) {
  // solve the exercise using only operators (no if() instructions)

  return {
    // return data.name or "Anonymous" if data.name is falsey
    name: data.name || "Anonymous",

    // convert data.age into number, return 0 if not a number
    age: +data.age || 0,

    // return true if data.rightId is equal to 0
    isAdmin: data.rightId === 0,

    // return data.company if data.age is over 16, otherwise return false
    company: data.age >= 16 && data.company
  };
}
