import { getCharacter } from "./src/utils/swapi";

describe("getCharacter", () => {
  test("should return Luke Skywalker for ID 1", async () => {
    const data = await getCharacter(1);
    expect(data.name).toBe("Luke Skywalker");
  });
});
