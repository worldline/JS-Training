import { getActions } from "../src/exo5";

it("should fix the song", () => {
  expect(
    getActions()
      .map(
        action =>
          action()
            .toString()
            .match(/^[^\s,]+/)[0]
      )
      .join(" ")
  ).toBe("Trois Chapeau Paillasson Somnambule Bulletin Tintamarre");
});
