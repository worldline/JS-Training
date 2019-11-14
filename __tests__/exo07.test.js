import { getProductNames, getFruits, calcTotalPrice } from "../src/exo07";

const products1 = [
  { type: "legume", name: "Carotte", quantity: 2, unitPrice: 5 },
  { type: "legume", name: "Chou", quantity: 3, unitPrice: 10 },
  { type: "fruit", name: "Pomme", quantity: 1, unitPrice: 2 },
  { type: "fruit", name: "Poire", quantity: 2, unitPrice: 3 }
];

const products2 = [
  { type: "legume", name: "Carotte", quantity: 3, unitPrice: 1 },
  { type: "legume", name: "Chou", quantity: 2, unitPrice: 4 },
  { type: "legume", name: "Patates", quantity: 0, unitPrice: 1 }
]

it("getProductNames", () => {
  expect(getProductNames(products1).join(",")).toBe("Carotte,Chou,Pomme,Poire");
  expect(getProductNames(products2).join(",")).toBe("Carotte,Chou,Patates");
});

it("getFruits", () => {
  expect(getFruits(products1).length).toBe(2);
  expect(getFruits(products2).length).toBe(0);
});

it("calcTotalPrice", () => {
  expect(calcTotalPrice(products1)).toBe(48);
  expect(calcTotalPrice(products2)).toBe(11);
});
