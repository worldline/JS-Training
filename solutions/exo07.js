// données d'exemple (d'autres sont utilisées en test)
const data = {
  products: [
    { type: "legume", name: "Carotte", quantity: 3, unitPrice: 5 },
    { type: "legume", name: "Chou", quantity: 1, unitPrice: 10 },
    { type: "legume", name: "Patates", quantity: 10, unitPrice: 1 },
    { type: "fruit", name: "Pomme", quantity: 6, unitPrice: 2 },
    { type: "fruit", name: "Poire", quantity: 6, unitPrice: 3 }
  ]
};

// Résoudre l'exercice avec des arrow functions

export function getProductNames(data) {
  // retourne la liste des noms des produits (méthode map de Array)
  return data.products.map(product => product.name);
}

export function getFruits(data) {
  // retourne les fruits uniquement (méthode filter de Array)
  return data.products.filter(product => product.type === "fruit");
}

export function calcTotalPrice(data) {
  // retourne le prix total des produits (méthode reduce de Array)
  return data.products.reduce((total, product) => total + product.unitPrice * product.quantity, 0);
}
