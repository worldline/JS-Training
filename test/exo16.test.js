import { Observable } from "../src/exo16";

it("Observable", done => {
  const out = [];
  setTimeout(() => {
    expect(out.join(",")).toBe("1,2,2,4,3,6,4,8,5,10,complete,complete2");
    done();
  }, 300);

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

    setTimeout(next, 10);
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
});

it("Observer unsubscribe", done => {
  const out = [];
  setTimeout(() => {
    expect(out.join(",")).toBe("1,2,3");
    done();
  }, 300);

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

    setTimeout(next, 10);
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
});
