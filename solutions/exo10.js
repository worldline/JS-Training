// Utilisez l'opérateur spread et rest
// compose(f,g,h)(x) <=> h(g(f(x)))

export function compose(f, ...otherFns) {
  if (otherFns.length === 0) return f;
  return (...args) => compose(...otherFns)(f(...args));
}