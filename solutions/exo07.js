// example data (other data will be used in unit tests)
const products = [
  { type: "vegetable", name: "Carrot", quantity: 3, unitPrice: 5 },
  { type: "vegetable", name: "Cabbage", quantity: 1, unitPrice: 10 },
  { type: "vegetable", name: "Potato", quantity: 10, unitPrice: 1 },
  { type: "fruit", name: "Apple", quantity: 6, unitPrice: 2 },
  { type: "fruit", name: "Pear", quantity: 6, unitPrice: 3 }
];

// solve the exercise using arrow functions
// check out the Array methods cheat sheet for help

export function getProductNames(products) {
  // return the list of product names
  return products.map(product => product.name);
}

export function getFruits(products) {
  // return only the fruits
  return products.filter(product => product.type === "fruit");
}

export function calcTotalPrice(products) {
  // return total price of all products (unitPrice * quantity)
  return products.reduce((total, product) => total + product.unitPrice * product.quantity, 0);
}
