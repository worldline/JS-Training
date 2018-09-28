export function Observable(setup) {
  //TODO
  this.subscribers = [];
  setup({
    emit: val => {
      for (let observer of this.subscribers) observer.onValue(val);
    },
    complete: () => {
      for (let observer of this.subscribers) observer.onComplete();
    }
  });
}

Observable.prototype.subscribe = function(observer) {
  //TODO
  this.subscribers.push(observer);
  let removeInArray = (arr, item) => arr.splice(arr.indexOf(item), 1);
  observer.unsubscribe = () => removeInArray(this.subscribers, observer);
  return observer;
};
