export function createPubSub() {
  const pubsub = {
    events: new Map()
  }

  pubsub.on = function(event, callback) {
    // TODO: register the callback to trigger when `event` happens
    if (!this.events.has(event)) this.events.set(event, []);
    this.events.get(event).push(callback);
  };

  pubsub.off = function (event, callback) {
    // remove a subscription
    if (this.events.has(event)) {
      this.events.set(event, this.events.get(event).filter(x => callback && x !== callback));
    }
  }

  pubsub.emit = function(event, data) {
    // TODO: call the callbacks registered for `event`
    if (this.events.has(event)) {
      this.events.get(event).forEach(callback => callback(data))
    }
    if (this.events.has('*')) {
      this.events.get('*').forEach(callback => callback(data))
    }
  };

  return pubsub
}
