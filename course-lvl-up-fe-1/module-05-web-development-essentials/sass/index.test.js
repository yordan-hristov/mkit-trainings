const { transpileFile } = require("./solution");

describe("Exercise 1 - Transpile File", () => {
  describe("transpileFile()", () => {
    it("Should be defined", () => {
      expect(transpileFile).toBeDefined();
    });

    it("Should return result of the correct type", async () => {
        const expectedResult = 'h1 {\n  color: #ffffff;\n}\nh1 .test {\n  color: #000000;\n}'
        await expect(transpileFile()).resolves.toBe(expectedResult);
    })
  });
});
