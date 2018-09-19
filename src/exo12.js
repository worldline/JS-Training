export function i18n(strings, ...vars) {
  // basic internationalization helper
  // TODO: replace each string fragment with i18n.translate
  return;
}

Object.assign(i18n, {
  locale: "fr",
  locales: {
    fr: {
      "Hello ": "Bonjour ",
      ", you have ": ", vous avez ",
      " new mails.": " nouveaux messages."
    }
  },
  translate(str) {
    let messages = i18n.locales[i18n.locale] || {};
    return messages[str] || str;
  }
});

const name = "Bob",
  nbMails = 3;

console.log(i18n`Hello ${name}, you have ${nbMails} new mails.`);
