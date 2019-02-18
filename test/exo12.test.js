import { PubSub } from "../src/exo12";

test("PubSub", () => {
  const emitter = new PubSub();

  const canal1 = [],
    canal2 = [],
    all = [];
  emitter.on("event1", data => canal1.push(data));
  emitter.on("event2", data => canal2.push(data));

  emitter.on("event1", data => all.push(data));
  emitter.on("event2", data => all.push(data));

  emitter.emit("event1", 1);
  emitter.emit("event2", 2);
  emitter.emit("event2", 3);

  expect(canal1.join(",")).toBe("1");
  expect(canal2.join(",")).toBe("2,3");
  expect(all.join(",")).toBe("1,2,3");
});
