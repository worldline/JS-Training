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

  // TOFIX: retourner la chanson correctement
  for (var i = 0; i < paroles.length; i++) {
    actions.push(function sing() {
      return paroles[i] + ", " + paroles[i] + ", " + paroles[i] + " !!!";
    });
  }

  return actions;
}

// code de test, à essayer en console pour voir le problème
getActions().forEach(function(action) {
  console.log(action());
});
