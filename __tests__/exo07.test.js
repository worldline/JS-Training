import { getProductNames, getFruits, calcTotalPrice } from "../src/exo07";

const products1 = [
  { type: "vegetable", name: "Carrot", quantity: 2, unitPrice: 5 },
  { type: "vegetable", name: "Cabbage", quantity: 3, unitPrice: 10 },
  { type: "fruit", name: "Apple", quantity: 1, unitPrice: 2 },
  { type: "fruit", name: "Pear", quantity: 2, unitPrice: 3 }
];

const products2 = [
  { type: "vegetable", name: "Carrot", quantity: 3, unitPrice: 1 },
  { type: "vegetable", name: "Cabbage", quantity: 2, unitPrice: 4 },
  { type: "vegetable", name: "Potato", quantity: 0, unitPrice: 1 }
]

it("getProductNames", () => {
  expect(getProductNames(products1).join(",")).toBe("Carrot,Cabbage,Apple,Pear");
  expect(getProductNames(products2).join(",")).toBe("Carrot,Cabbage,Potato");
});

it("getFruits", () => {
  expect(getFruits(products1).length).toBe(2);
  expect(getFruits(products2).length).toBe(0);
});

it("calcTotalPrice", () => {
  expect(calcTotalPrice(products1)).toBe(48);
  expect(calcTotalPrice(products2)).toBe(11);
});
