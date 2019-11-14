// données d'exemple (d'autres sont utilisées en test)
const products = [
  { type: "legume", name: "Carotte", quantity: 3, unitPrice: 5 },
  { type: "legume", name: "Chou", quantity: 1, unitPrice: 10 },
  { type: "legume", name: "Patates", quantity: 10, unitPrice: 1 },
  { type: "fruit", name: "Pomme", quantity: 6, unitPrice: 2 },
  { type: "fruit", name: "Poire", quantity: 6, unitPrice: 3 }
];

// Résoudre l'exercice avec des arrow functions

export function getProductNames(products) {
  // retourne la liste des noms des produits (méthode map de Array)
  return products.map(product => product.name);
}

export function getFruits(products) {
  // retourne les fruits uniquement (méthode filter de Array)
  return products.filter(product => product.type === "fruit");
}

export function calcTotalPrice(products) {
  // retourne le prix total des produits (méthode reduce de Array)
  return products.reduce((total, product) => total + product.unitPrice * product.quantity, 0);
}
