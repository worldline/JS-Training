// return true if parameter is a primitive, or false otherwise

// solution 1
export function isPrimitive(x) {
    return x === null
        || ['undefined', 'boolean', 'number', 'string', 'symbol'].includes(typeof x)
}

// solution 2
export function isPrimitive2(x) {
    return x === null || !(x instanceof Object)
}