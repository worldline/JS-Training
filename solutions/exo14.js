export function Observable(setup) {
  this.observers = [];
  setup({
    emit: data => this.observers.forEach(observer => observer.onValue(data)),
    complete: () => this.observers.forEach(observer => observer.onComplete()),
  })
}

Observable.prototype.subscribe = function (observer) {
  this.observers.push(observer);
  observer.unsubscribe = () => {
    this.observers = this.observers.filter(o => o !== observer)
  }
  return observer;
};
