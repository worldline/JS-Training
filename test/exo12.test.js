import { i18n } from "../src/exo12";

const name = "Jean",
  nbMails = 5;

it("should translate in fr", () => {
  i18n.locale = "fr";
  expect(i18n`Hello ${name}, you have ${nbMails} new mails.`).toBe(
    "Bonjour Jean, vous avez 5 nouveaux messages."
  );
});

it("should keep strings in english", () => {
  i18n.locale = "en";
  expect(i18n`Hello ${name}, you have ${nbMails} new mails.`).toBe(
    "Hello Jean, you have 5 new mails."
  );
});
