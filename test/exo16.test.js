import { Observable } from "../src/exo16";

it("Observable", () => {
  const out = [];
  let startEmit;

  const observable = new Observable(({ emit, complete }) => {
    let i = 0;
    const next = () => {
      emit(++i);
      if (i >= 5) {
        complete();
      } else {
        next()
      }
    };

    startEmit = () => next();
  });

  expect("subscribe" in observable).toBe(true);

  observable.subscribe({
    onValue(i) {
      out.push(i);
    },
    onComplete() {
      out.push("complete");
    }
  });

  observable.subscribe({
    onValue(i) {
      out.push(i * 2);
    },
    onComplete() {
      out.push("complete2");
    }
  });

  startEmit && startEmit();

  expect(out.join(",")).toBe("1,2,2,4,3,6,4,8,5,10,complete,complete2");

});

it("Observer unsubscribe", () => {
  const out = [];
  let startEmit;

  const observable = new Observable(({ emit, complete }) => {
    let i = 0;
    const next = () => {
      emit(++i);
      if (i >= 5) {
        complete();
      } else {
        next();
      }
    };

    startEmit = () => next();
  });

  const observer = observable.subscribe({
    onValue(i) {
      out.push(i);
      if (i >= 3) observer.unsubscribe();
    },
    onComplete() {
      out.push("complete");
    }
  });

  expect("unsubscribe" in observer).toBe(true);

  startEmit && startEmit();

  expect(out.join(",")).toBe("1,2,3");

}, 100);
