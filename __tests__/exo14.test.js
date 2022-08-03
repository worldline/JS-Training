import { Observable } from "../src/exo14";

it("Observable next & complete", () => {
  const out = [];
  let startEmit;

  const observable = new Observable(subscriber => {
    let i = 0;
    const next = () => {
      subscriber.next(++i);
      if (i >= 5) {
        subscriber.complete();
      } else {
        next()
      }
    };

    startEmit = () => next();
  });

  expect("subscribe" in observable).toBe(true);

  observable.subscribe({
    next(i) {
      out.push(i);
    },
    complete() {
      out.push("complete");
    }
  });

  observable.subscribe({
    next(i) {
      out.push(i * 2);
    },
    complete() {
      out.push("complete2");
    }
  });

  startEmit && startEmit();

  expect(out.join(",")).toBe("1,2,2,4,3,6,4,8,5,10,complete,complete2");

});

it("Observer unsubscribe", () => {
  const out = [];
  let startEmit;

  const observable = new Observable(subscriber => {
    let i = 0;
    const next = () => {
      subscriber.next(++i);
      if (i >= 5) {
        subscriber.complete();
      } else {
        next();
      }
    };

    startEmit = () => next();
  });

  const observer = observable.subscribe({
    next(i) {
      out.push(i);
      if (i >= 3) observer.unsubscribe();
    },
    complete() {
      out.push("complete");
    }
  });

  expect("unsubscribe" in observer).toBe(true);

  startEmit && startEmit();

  expect(out.join(",")).toBe("1,2,3");

}, 100);

it("Observable error handling", () => {
  const out = [];
  let startEmit;

  const observable = new Observable(subscriber => {
    let i = 0;
    const next = () => {
      subscriber.next(++i);
      if (i >= 5) {
        subscriber.complete();
      } else if(i === 3){
        throw "should fail at 3"
      } else {
        next();
      }
    };

    startEmit = () => next();
  });

  const observer = observable.subscribe({
    next(i) {
      out.push(i);
      if (i >= 3) observer.unsubscribe();
    },
    complete() {
      out.push("complete");
    },
    error(err){
      out.push("error:"+err);
    }
  });

  expect("unsubscribe" in observer).toBe(true);

  startEmit && startEmit();

  expect(out.join(",")).toBe("1,2,3,error:should fail at 3");

}, 100);
