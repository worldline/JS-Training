const paroles = [
  "Frère Jacques",
  "Dormez-vous",
  "Sonnez les matines",
  "Ding ding dong"
];

export let instructions = [];

// FIX 1 : utiliser une IIFE pour créer un nouveau scope et avoir une variable locale dans chaque itération
for (var i = 0; i < paroles.length; i++) {
  (function (parole) {
    instructions.push(function printNextLine() {
      return parole + ", " + parole;
    });
  })(paroles[i])
}

// FIX 2: utiliser forEach pour avoir une variable locale dans chaque itération
/*paroles.forEach(function (parole) {
  instructions.push(function printNextLine() {
    return parole + ", " + parole;
  });
})*/

// FIX 3: utiliser let au lieu de var dans la boucle for
/*for (let i = 0; i < paroles.length; i++) {
  instructions.push(function printNextLine() {
    return paroles[i] + ", " + paroles[i];
  });
}*/