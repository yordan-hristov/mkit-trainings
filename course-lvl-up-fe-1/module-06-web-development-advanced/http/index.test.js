const { getPostData } = require("./index");

describe("Exercise 1 - Send GET Request", () => {
  describe("getPostData()", () => {
    it("Should be defined", () => {
      expect(getPostData).toBeDefined();
    });

    it("Should accept number", () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      expect(() => {
        getPostData("test");
      }).toThrow();

      expect(() => {
        getPostData(null);
      }).toThrow();

      expect(() => {
        getPostData(undefined);
      }).toThrow();

      expect(() => {
        getPostData(array);
      }).toThrow();

      expect(() => {
        getPostData(true);
      }).toThrow();

      expect(() => {
        getPostData({ prop: "test" });
      }).toThrow();

      expect(() => {
        getPostData(1);
      }).not.toThrow();
    });

    it("Should be between 1 and 100", () => {
      expect(() => {
        getPostData(-1);
      }).toThrow();

      expect(() => {
        getPostData(200);
      }).toThrow();

      expect(() => {
        getPostData(1);
      }).not.toThrow();
    });

    it("Should return object", async () => {
      const data = await getPostData(1);
      const type = typeof data;
      expect(type).not.toBe("undefined");
      expect(type).not.toBe("number");
      expect(type).not.toBe("string");
      expect(type).toBe("object");
    });

    it("Should have userId property", async () => {
      const data = await getPostData(1);
      expect(data.userId).toBeTruthy();
    });

    it("Should have id property", async () => {
      const data = await getPostData(1);
      expect(data.id).toBeTruthy();
    });

    it("Should have title property", async () => {
      const data = await getPostData(1);
      expect(data.title).toBeTruthy();
    });

    it("Should have body property", async () => {
      const data = await getPostData(1);
      expect(data.body).toBeTruthy();
    });

    it("Should have body property", async () => {
      const data = await getPostData(1);
      expect(data.body).toBeTruthy();
    });

    it("Should return correct values", async () => {
      const result = await fetch(
        `https://jsonplaceholder.typicode.com/posts/23`
      )
        .then((response) => response.json())
        .then((data) => data);

      const functionResult = await getPostData(23);

      expect(Object.keys(functionResult).length).toBeGreaterThan(0);
      expect(Object.keys(result).length).toBeGreaterThan(0);

      expect(functionResult.userId).toBe(result.userId);
      expect(functionResult.id).toBe(result.id);
      expect(functionResult.title).toBe(result.title);
      expect(functionResult.body).toBe(result.body);
    });
  });
});
