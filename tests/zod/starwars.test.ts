import { fetchCharacter } from "../../src/zod/starwars";

describe("Zod + API", () => {
  test("should validate character data with zod", async () => {
    const char = await fetchCharacter(1);
    expect(char.name).toBe("Luke Skywalker");
  });
});
