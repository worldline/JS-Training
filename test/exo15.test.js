import { promisify } from "../src/exo15";

it("promisify", done => {
  const wait = promisify(setTimeout);

  const out = [];
  out.push(1);
  wait(20).then(() => out.push(4) && done());

  wait(10).then(() => {
    out.push(3);
    expect(out.join(",")).toBe("1,2,3");
    done();
  });

  out.push(2);
});
