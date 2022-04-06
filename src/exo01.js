// retourne true si la variable passée est une primitive
export function isPrimitive(x) {
  if (typeof x === "object" && x !== null) {
    return false;
  } else if (typeof x === "function") {
    return false;
  } else {
    return true;
  }

  // return x !== Object(x);
}
