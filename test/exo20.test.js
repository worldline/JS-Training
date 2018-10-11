import { query } from "../src/exo20";
import data from "./exo20.data.json";

test("Query class", () => {
  const results = query(data.users)
    .where(user => user.age >= 25)
    .where(user => user.lastName.length > 5)
    .orderBy("_id")
    .take(3)
    .map(user => user.company);

  expect(results.length).toBe(3);
  expect(results.join(",")).toBe("GINKOGENE,GOKO,QUINTITY");
});
