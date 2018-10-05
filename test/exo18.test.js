import { range } from "../src/exo18";

it("range", () => {
  expect(typeof range).toBe("function");
  expect(typeof range(1, 2)).toBe("object");
  expect([...range(1, 2)].join(",")).toBe("1,2");
  expect([...range(3, 7)].join(",")).toBe("3,4,5,6,7");
});
