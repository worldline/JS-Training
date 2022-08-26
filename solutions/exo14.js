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

/* usage example: */
/*
const Lottery = new Observable(function draw({ next, complete }) {
  setTimeout(() => {
    next(28)
    next(16)
    next(36)
    next(42)
    complete()
  }, timeBeforeLotteryDraw)
})

let michel = Lottery.subscribe({
  next(number){
    if(michel.numbers.includes(number)) michel.correctNumbers++;
  },
  complete(){
    alert(`Michel had ${michel.correctNumbers} correct numbers !`)
  }
})

michel.numbers = [7, 13, 36, 49]
michel.correctNumbers = 0
if(michel.turnsOffTV) michel.unsubscribe()
*/