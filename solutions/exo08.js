// try to solve the exercise using spread and rest operators

// TODO: return an object with properties being the list of received arguments, 
// and the number of times each argument has been received as values

// solution with reduce
export function count(...args) {
  return args.reduce(
    (countByArg, arg) => {
      let count = (countByArg[arg] || 0) + 1
      return { ...countByArg, [arg]: count }
    },
    {}
  )
}

// solution with map and Object.assign
export function count2(...args) {
  return Object.assign({}, ...args.map(arg => {
    let count = args.filter(a => a === arg).length
    return { [arg]: count }
  }))
}

// exemple:
count("Carrot", "Cabbage", "Potato", "Cabbage", "Cabbage", "Carrot")
// { Carrot: 2, Cabbage: 3, Potato: 1 }


// TODO: return the argument that occurs the most times in the argument list
export function mostFrequentIn(...args) {
  let countByArg = count(...args);
  let maxCount = Math.max(...Object.values(countByArg))
  return args.find(arg => countByArg[arg] === maxCount)
}

// example:
mostFrequentIn("Carrot", "Cabbage", "Potato", "Cabbage", "Cabbage", "Carrot") === "Cabbage"