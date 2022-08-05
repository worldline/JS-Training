export function parseUserData(data) {
  // solve the exercise using only operators (no if() instructions)

  return {
    // return data.name or "Anonymous" if data.name is falsey
    name: data.name,

    // convert data.age into number, return 0 if not a number
    age: data.age,

    // return true if data.rightId is equal to 0
    isAdmin: false,

    // if data.friends is an Array, return its length
    // otherwise return false
    friends: 0
  };
}
