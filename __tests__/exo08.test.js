import { count, mostFrequentIn } from "../src/exo08";

test("count", () => {
  const countByArg = count("a", "b", "c", "c", "c", "b", "c", "a", "c", "b");
  expect(Object.keys(countByArg).sort().join(",")).toBe("a,b,c")
  expect(countByArg['a']).toBe(2)
  expect(countByArg['b']).toBe(3)
  expect(countByArg['c']).toBe(5)
})

test("mostFrequentIn", () => {
  expect(mostFrequentIn("a", "b", "c", "a", "a", "b", "c", "a", "a", "b")).toBe("a")
  expect(mostFrequentIn("a", "b", "b", "b", "a", "b", "b", "b", "a", "c")).toBe("b")
})