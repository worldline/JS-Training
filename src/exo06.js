export function parseUserData(data) {
  // solve the exercise using only operators (no if() instructions)

  return {
    // return data.name or "Anonymous" if data.name is falsey
    name: data.name,

    // convert data.age into number, return 0 if not a number
    age: data.age,

    // return true if data.rightId is equal to 0
    isAdmin: false,

    // if data.age is under 16, return false 
    // otherwise return data.company
    company: data.company
  };
}
