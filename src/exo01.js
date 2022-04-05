// retourne true si la variable passée est une primitive
export function isPrimitive(x) {
  return x === null || (typeof x !== "object" && typeof x !== "function");
}

// Alternative --> Ok aussi,
// plus long mais moins ouvert à d'éventuels futurs types non primitifs
// meilleur ???
export function isPrimitive2(x) {
  return (
    x === null ||
    typeof x === "undefined" ||
    typeof x === "boolean" ||
    typeof x === "number" ||
    typeof x === "string" ||
    typeof x === "symbol"
  );
}
