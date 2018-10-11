import { query } from "../src/exo20";
import data from "./exo20.data.json";

test("Query class", () => {
  const results = query(data.users)
    .where("age", n => n >= 25)
    .where("lastName", name => name.length > 5)
    .orderBy("_id")
    .take(3)
    .map(user => user.company);

  expect(results.length).toBe(3);
  expect(results.join(",")).toBe("GINKOGENE,GOKO,QUINTITY");
});
