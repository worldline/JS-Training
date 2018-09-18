import { calcTotalPrice, getNumberOfFruits } from "../src/exo09";

const data1 = {
  products: [
    { type: "legume", name: "Carotte", quantity: 2, unitPrice: 5 },
    { type: "legume", name: "Chou", quantity: 3, unitPrice: 10 },
    { type: "fruit", name: "Pomme", quantity: 1, unitPrice: 2 },
    { type: "fruit", name: "Poire", quantity: 2, unitPrice: 3 }
  ]
};

const data2 = {
  products: [
    { type: "legume", name: "Carotte", quantity: 3, unitPrice: 1 },
    { type: "legume", name: "Chou", quantity: 2, unitPrice: 4 },
    { type: "legume", name: "Patates", quantity: 0, unitPrice: 1 }
  ]
};

it("calcTotalPrice", () => {
  expect(calcTotalPrice(data1)).toBe(48);
  expect(calcTotalPrice(data2)).toBe(11);
});

it("getNumberOfFruits", () => {
  expect(getNumberOfFruits(data1)).toBe(3);
  expect(getNumberOfFruits(data2)).toBe(0);
});
