import { i18n } from "../src/exo10";

const name = "Jean",
  nbMails = 5;

it("should translate in fr", () => {
  expect(i18n`Hello ${name}, you have ${nbMails} new mails.`).toBe(
    "Bonjour Jean, vous avez 5 nouveaux messages."
  );
});
