// retourne true si la variable passée est une primitive

// solution 1
export const isPrimitive = x => x === null || ['undefined', 'boolean', 'number', 'string', 'symbol'].includes(typeof x)

// solution 2
export const isPrimitive2 = x => !x || !(x instanceof Object)