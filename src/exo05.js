const paroles = [
  "Frère Jacques",
  "Dormez-vous",
  "Sonnez les matines",
  "Ding ding dong"
];

export const instructions = [];

// TOFIX: imprimer la chanson correctement
for (let i = 0; i < paroles.length; i++) {
  instructions.push(function printNextLine() {
    return paroles[i] + ", " + paroles[i];
  });
}
/*solution 2
for (let i = 0; i < paroles.length; i++) {
  (function (iLocal) {
    instructions.push(function printNextLine() {
      return paroles[i] + ", " + paroles[i];
    });
  })(i);
}*/

// code de test, à essayer en console pour voir le problème
/*instructions.forEach(function (printNextLine) {
  console.log(printNextLine());
});*/
