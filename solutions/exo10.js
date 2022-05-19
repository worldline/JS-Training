export function i18n(strings, ...vars) {
  // solution 1
  return strings.reduce(
    (out, str, i) => `${out}${translations[str]}${vars[i] || ""}`,
    ""
  )
}

export function i18n2(strings, ...vars) {
  // solution 2
  return strings
    .map((str, i) => translations[str] + (vars[i] || ""))
    .join("");
}

const translations = {
  "Hello ": "Bonjour ",
  ", you have ": ", vous avez ",
  " new mails.": " nouveaux messages."
}

const name = "Bob",
  nbMails = 3;

console.log(i18n`Hello ${name}, you have ${nbMails} new mails.`);
