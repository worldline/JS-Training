export function PubSub() {
  this.events = new Map();
  // ["alert", callbacks]
}

PubSub.prototype.on = function (event, callback) {
  // TODO: enregistrer le callback à déclencher suite à l'événement `event`
  let tab = this.events.get(event) || [];
  this.events.set(event, [...tab, callback]);
};

PubSub.prototype.emit = function (event, data) {
  // TODO: appeler les callbacks enregistrés pour l'événement `event`
  let tab = this.events.get(event) || [];
  for (let i = 0; i < tab.length; i++) {
    let fonction = tab[i];
    fonction(data);
  }
};

// Pour aller plus loin:
// - méthode off(event, callback) pour retirer une souscription
// - on('*') pour réagir à tous les événements

//PubSub.on("alert", function(){ annulerMesRdv() })
//PubSub.on("alert", function(){ appelerMonPatron() })

//PubSub.emit("alert")
