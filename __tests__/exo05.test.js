import { instructions } from "../src/exo05";

it("should fix the song", () => {
  expect(instructions.length).toBe(4)
  expect(instructions[0]()).toBe("Frère Jacques, Frère Jacques")
  expect(instructions[1]()).toBe("Dormez-vous, Dormez-vous")
  expect(instructions[2]()).toBe("Sonnez les matines, Sonnez les matines")
  expect(instructions[3]()).toBe("Ding ding dong, Ding ding dong")
});
