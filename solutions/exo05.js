export function getActions() {
  const paroles = [
    "Trois p'tits chats",
    "Chapeau d'paille",
    "Paillasson",
    "Somnambule",
    "Bulletin",
    "Tintamarre"
  ];

  const actions = [];

  // FIX 1 : utiliser une IIFE pour créer un nouveau scope et avoir une variable locale dans chaque itération
  for (let i = 0; i < paroles.length; i++) {
    (function (parole) {
      actions.push(function sing() {
        return parole + ", " + parole + ", " + parole + " !!!";
      });
    })(paroles[i])
  }

  // FIX 2: utiliser forEach pour avoir une variable locale dans chaque itération
  paroles.forEach(function (parole) {
    actions.push(function sing() {
      return parole + ", " + parole + ", " + parole + " !!!";
    });
  })

  // FIX 3: utiliser let au lieu de var dans la boucle for
  for (let i = 0; i < paroles.length; i++) {
    actions.push(function sing() {
      return paroles[i] + ", " + paroles[i] + ", " + paroles[i] + " !!!";
    });
  }

  return actions;
}

// code de test, à essayer en console pour voir le problème
/*getActions().forEach(function(action) {
  console.log(action());
});*/
