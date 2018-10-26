import { count, mostFrequentIn } from "../src/exo10";

test("count", () => {
  const countByArg = count("a", "b", "c", "c", "c", "b", "c", "a", "c", "b");
  expect(Object.keys(countByArg).join(",")).toBe("a,b,c")
  expect(Object.values(countByArg).join(",")).toBe("2,3,5")
})

test("mostFrequentIn", () => {
  expect(mostFrequentIn("a", "b", "c", "c", "c", "b", "c", "a", "c", "b")).toBe("c")
})