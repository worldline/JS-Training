import { Observable } from "../src/exo16";

test("Observable", done => {
  const observable = new Observable(({ emit, complete }) => {
    let i = 0;
    const next = () => {
      emit(++i);
      if (i >= 5) {
        complete();
      } else {
        setTimeout(next, 10);
      }
    };

    next();
  });

  expect("subscribe" in observable).toBe(true);

  const out = [];
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

  setTimeout(() => {
    expect(out.join(",")).toBe("1,2,2,4,3,6,4,8,5,10,complete,complete2");
    done();
  }, 500);
});

test("Observer unsubscribe", done => {
  const observable = new Observable(({ emit, complete }) => {
    let i = 0;
    const next = () => {
      emit(++i);
      if (i >= 5) {
        complete();
      } else {
        setTimeout(next, 100);
      }
    };

    next();
  });

  const out = [];

  const observer = observable.subscribe({
    onValue(i) {
      out.push(i);
      if (i > 3) observer.unsubscribe();
    },
    onComplete() {
      out.push("complete");
    }
  });

  expect("unsubscribe" in observer).toBe(true);

  setTimeout(() => {
    expect(out.join(",")).toBe("1,2,3");
    done();
  }, 500);
});
