// Utilisez l'opérateur spread et rest
// compose(f,g,h)(x) <=> h(g(f(x)))

// solution avec reduce()
export function compose(...fns) {
  return fns.reduce((f, g) => (...args) => g(f(...args)))
}

// solution récursive
export function compose_recursive(f, ...otherFns) {
  if (otherFns.length === 0) return f;
  return (...args) => compose_recursive(...otherFns)(f(...args));
}