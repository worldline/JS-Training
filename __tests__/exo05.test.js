import { instructions } from "../src/exo05";

it("should fix the song", () => {
  expect(instructions.length).toBe(4)
  expect(instructions[0]()).toBe("Because I'm happy ! Clap along if you feel like a room without a roof")
  expect(instructions[1]()).toBe("Because I'm happy ! Clap along if you feel like happiness is the truth")
  expect(instructions[2]()).toBe("Because I'm happy ! Clap along if you know what happiness is to you")
  expect(instructions[3]()).toBe("Because I'm happy ! Clap along if you feel like that's what you wanna do")
});