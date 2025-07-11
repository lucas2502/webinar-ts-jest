import sum from "./src/utils/math";

describe("sum", () => {
  test("adds two numbers", () => {
    expect(sum(2, 3)).toBe(5);
  });

  // testando com valores errados usando TS
  // expect(sum('a', 3)).toBe(3); // erro de tipo no TS
});
