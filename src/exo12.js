export function PubSub() {
  this.events = new Map();
}

PubSub.prototype.on = function (event, callback) {
  // TODO: enregistrer le callback à déclencher suite à l'événement `event`
  let callbackTab = this.events.get(event) || [];
  callbackTab.push(callback);
  //this.events.set("*", );
  this.events.set(event, callbackTab);
};

PubSub.prototype.emit = function (event, data) {
  // TODO: appeler les callbacks enregistrés pour l'événement `event`

  this.events.get(event).forEach((callback) => {
    callback(data);
  });

  // this.events.get("*").forEach((element) => {
  //   element(data);
  // });
};

let off = function (event, callback) {
  this.events.remove(event);
};

// Pour aller plus loin:
// - méthode off(event, callback) pour retirer une souscription
// - on('*') pour réagir à tous les événements
