export function i18n(strings, ...vars) {
  // solution 1
  return strings.reduce(
    (out, str, i) => `${out}${i18n.translate(str)}${vars[i] || ""}`,
    ""
  )
}

export function i18n2(strings, ...vars) {
  // solution 2
  return strings
    .map((str, i) => i18n.translate(str) + (vars[i] || ""))
    .join("");
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
