export function createPubSub() {
  const pubsub = {
    events: new Map()
  }

  pubsub.on = function(event, callback) {
    // TODO: enregistrer le callback à déclencher suite à l'événement `event`
    if (!this.events.has(event)) this.events.set(event, []);
    this.events.get(event).push(callback);
  };

  pubsub.off = function (event, callback) {
    // TODO: retirer une souscription
    if (this.events.has(event)) {
      this.events.set(event, this.events.get(event).filter(x => callback && x !== callback));
    }
  }

  pubsub.emit = function(event, data) {
    // TODO: appeler les callbacks enregistrés pour l'événement `event`
    if (this.events.has(event)) {
      this.events.get(event).forEach(callback => callback(data))
    }
    if (this.events.has('*')) {
      this.events.get('*').forEach(callback => callback(data))
    }
  };

  return pubsub
}
