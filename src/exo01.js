// retourne true si la variable passée est une primitive
export function isPrimitive(x) {
  if ((x !== null && typeof x === "object") || typeof x === "function") {
    return false;
  }
  return true;
}
