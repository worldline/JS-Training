export function PubSub() {
  this.events = new Map()
}

PubSub.prototype.on = function (event, callback) {
  if (!this.events.has(event)) this.events.set(event, []);

  this.events.get(event).push(callback);
};

PubSub.prototype.emit = function (event, data) {
  if (this.events.has(event)) {
    this.events.get(event).forEach(callback => callback(data))
  }
  if (this.events.has('*')) {
    this.events.get('*').forEach(callback => callback(data))
  }
};

PubSub.prototype.off = function (event, callback) {
  if (this.events.has(event)) {
    this.events.set(event, this.events.get(event).filter(x => callback && x !== callback));
  }
}
// Pour aller plus loin:
// - méthode off(event, callback) pour retirer une souscription
// - on('*') pour réagir à tous les événements
