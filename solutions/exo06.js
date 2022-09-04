export function parseUserData(data) {
  // solve the exercise using only operators (no if() instructions)

  return {
    // return data.name or "Anonymous" if data.name is falsey
    name: data.name || "Anonymous",

    // convert data.age into number, return 0 if not a number
    age: +data.age || 0,

    // return true if data.rightId is equal to 0
    isAdmin: data.rightId === 0,

    // if data.age is under 16, return false 
    // otherwise return data.company
    company: data.age >= 16 && data.company
  };
}
