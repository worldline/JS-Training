import { setPrivatesAndConstants, addWatcher } from "../src/exo04";

it("should add getters and setters to object prop", () => {
  let obj = { a: 1, b: 2 };
  let countGet = 0;
  let countSet = 0;
  let getter = () => countGet++;
  let setter = () => countSet++;

  addWatcher(obj, "a", getter, setter);

  expect(countGet).toBe(0);
  expect(countSet).toBe(0);

  obj.a = obj.a + obj.b;
  obj.b = obj.b - obj.a;

  expect(countGet).toBe(2);
  expect(countSet).toBe(1);
});

it("should set private props non enumerable", () => {
  let obj = {
    a: 1,
    b: 2,
    _private: 3
  };

  setPrivatesAndConstants(obj);

  expect(Object.keys(obj).length).toBe(2);
  expect(Object.keys(obj).includes("b")).toBe(true);
  expect(Object.keys(obj).includes("_private")).toBe(false);
});

it("should set constant props non writable nor configurable", () => {
  let obj = {
    a: 1,
    b: 2,
    Constant: 3
  }

  setPrivatesAndConstants(obj);

  try {
    obj.Constant = 4;
  } catch (e) { }

  expect(obj.Constant).toBe(3);

  try {
    delete obj.Constant;
  } catch (e) { }

  expect(obj.Constant).toBe(3);
});
