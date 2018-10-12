import { query } from "../src/exo20";
import data from "./fakedata.json";

test("query function", () => {
  const results = query(data)
    .where("age", n => n >= 25)
    .where("lastName", name => name.length > 5)
    .orderBy("_id")
    .take(3)
    .map(user => user.company);

  expect(results.length).toBe(3);
  expect(results.join(",")).toBe("DEMINIMUM,UTARA,CINASTER");
});
