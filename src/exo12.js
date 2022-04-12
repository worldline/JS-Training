export function createPubSub() {
  const pubsub = {
    events: new Map()
  }

  pubsub.on = function(event, callback) {
    // TODO: enregistrer le callback à déclencher suite à l'événement `event`
  };

  pubsub.emit = function(event, data) {
    // TODO: appeler les callbacks enregistrés pour l'événement `event`
  };

  return pubsub
}

// Pour aller plus loin:
// - méthode off(event, callback) pour retirer une souscription
// - on('*') pour réagir à tous les événements
