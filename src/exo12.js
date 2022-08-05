export function createPubSub() {
  const pubsub = {
    events: new Map()
  }

  pubsub.on = function(event, callback) {
    // TODO: register the callback to trigger when `event` happens
  };

  pubsub.emit = function(event, data) {
    // TODO: call the callbacks registered for `event`
  };

  return pubsub
}

// To go further:
// - add a method off(event, callback) to remove a subscription
// - on('*') to react to all events
