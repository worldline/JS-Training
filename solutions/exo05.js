const paroles = [
  "Frère Jacques",
  "Dormez-vous",
  "Sonnez les matines",
  "Ding ding dong"
];

export let instructions = [];

// FIX 1: utiliser let au lieu de var dans la boucle for
// pour limiter sa portée au scope de bloc
for (let i = 0; i < paroles.length; i++) {
  instructions.push(function printNextLine() {
    return paroles[i] + ", " + paroles[i];
  });
}

// FIX 2 : créer un scope de fonction pour
// avoir une variable locale dans chaque itération
paroles.forEach(function (parole) {
  instructions.push(function printNextLine() {
    return parole + ", " + parole;
  });
})

// FIX3: Pattern Immediately Invoked Function Expression(IIFE)
for (var i = 0; i < paroles.length; i++) {
  (function(parole){
      instructions.push(function printNextLine() {
        return parole + ", " + parole;
      });
  })(paroles[i])
}
