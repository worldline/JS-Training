export function Observable(setup) {
  this.subscribers = [];
  setup({
    emit: data => this.subscribers.forEach(observer => observer.onValue(data)),
    complete: () => this.subscribers.forEach(observer => observer.onComplete()),
  })
}

Observable.prototype.subscribe = function (observer) {
  this.subscribers.push(observer);
  observer.unsubscribe = () => {
    this.subscribers = this.subscribers.filter(o => o !== observer)
  }
  return observer;
};
