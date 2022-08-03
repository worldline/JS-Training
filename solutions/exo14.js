export function Observable(setup) {
  this.observers = [];
  setup({
    next: data => this.observers.forEach(observer => observer.next(data)),
    complete: () => this.observers.forEach(observer => observer.complete()),
  })
}

Observable.prototype.subscribe = function (observer) {
  this.observers.push(observer);
  observer.unsubscribe = () => {
    this.observers = this.observers.filter(o => o !== observer)
  }
  return observer;
};
