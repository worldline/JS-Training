export function i18n(strings, ...vars) {
  // utilitaire basique d'internationalisation
  // TODO: remplacer chaque fragment de texte avec i18n.translate
  return;
}

const translations = {
  "Hello ": "Bonjour ",
  ", you have ": ", vous avez ",
  " new mails.": " nouveaux messages."
}

// Exemple d'utilisation

const name = "Bob",
  nbMails = 3;

console.log(i18n`Hello ${name}, you have ${nbMails} new mails.`);
