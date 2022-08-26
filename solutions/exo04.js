export function spyOnProperty(obj, prop, onRead, onWrite) {
  // change the descriptor of property `prop` of `obj`:
  // - call onRead() when property is accessed
  // - call onWrite(newValue) when property is reassigned
  // these functions are just observers, they do not return anything
  // however it should still be possible to read and write a value for property `prop`
  let value = obj[prop];
  Object.defineProperty(obj, prop, {
    get() {
      onRead(value);
      return value
    },
    set(newValue) {
      onWrite(newValue)
      value = newValue;
    }
  })
}

export function setPrivatesAndConstants(obj) {
  // change the descriptor of every property of the object:
  // properties with names starting with an underscore _ must be non enumerable
  // properties with names in uppercase letters must be non writable and non configurable
  for (let key in obj) {
    Object.defineProperty(obj, key, {
      enumerable: !key.startsWith("_"),
      writable: key.toUpperCase() !== key,
      configurable: key.toUpperCase() !== key
    })
  }


  // SOLUTION 2 with Object.defineProperties
  /*Object.defineProperties(obj, Object.fromEntries(Object.keys(obj).map(key => {
    return [key, {
      enumerable: !key.startsWith("_"),
      writable: key.toUpperCase() !== key,
      configurable: key.toUpperCase() !== key
    }]
  })))*/
}
