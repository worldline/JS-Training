export function PubSub() {
  this.events = {}
}

PubSub.prototype.on = function (event, callback) {
  if (!this.events.hasOwnProperty(event)) this.events[event] = [];

  this.events[event].push(callback);
};

PubSub.prototype.emit = function (event, data) {
  if (this.events.hasOwnProperty(event)) {
    this.events[event].forEach(callback => callback(data))
  }
  if (this.events.hasOwnProperty('*')) {
    this.events['*'].forEach(callback => callback(data))
  }
};

PubSub.prototype.off = function (event, callback) {
  if (this.events.hasOwnProperty(event)) {
    this.events[event] = this.events[event].filter(x => callback && x !== callback);
  }
}
// Pour aller plus loin:
// - méthode off(event, callback) pour retirer une souscription
// - on('*') pour réagir à tous les événements
