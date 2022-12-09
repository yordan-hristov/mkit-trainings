const { getData, postData, putData, deleteData } = require("./index");

describe("Exercise 1 - Send GET Request", () => {
  describe("getData()", () => {
    it("Should be defined", () => {
      expect(getData).toBeDefined();
    });

    it("Should accept number", async () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const object = { test: "string" };

      await expect(getData("string")).rejects.toThrow();
      await expect(getData(null)).rejects.toThrow();
      await expect(getData(undefined)).rejects.toThrow();
      await expect(getData(true)).rejects.toThrow();
      await expect(getData(array)).rejects.toThrow();
      await expect(getData(object)).rejects.toThrow();
      await expect(getData(() => {})).rejects.toThrow();
      await expect(getData(1)).resolves.not.toThrow();
    });

    it("Should id be between 1 and 100", async () => {
      await expect(getData(0)).rejects.toThrow();
      await expect(getData(-100)).rejects.toThrow();
      await expect(getData(200)).rejects.toThrow();
    });

    it("Should function return promise", () => {
      const promise = getData(1);
      const isPromise = typeof promise?.then === "function";

      expect(isPromise).toBeTruthy();
    });

    it("Should function return object when is awaited", async () => {
      const data = await getData(1);
      const type = typeof data;

      expect(type).not.toBe("undefined");
      expect(type).not.toBe("number");
      expect(type).not.toBe("string");
      expect(type).toBe("object");
    });

    it("Should have id property", async () => {
      const data = await getData(1);

      expect(data.id).toBeTruthy();
    });

    it("Should have userId property", async () => {
      const data = await getData(1);

      expect(data.userId).toBeTruthy();
    });

    it("Should have title property", async () => {
      const data = await getData(1);

      expect(data.title).toBeTruthy();
    });

    it("Should have body property", async () => {
      const data = await getData(1);

      expect(data.body).toBeTruthy();
    });

    it("Should return correct values", async () => {
      const resultWith23 = await fetch(
        `https://jsonplaceholder.typicode.com/posts/23`
      )
        .then((response) => response.json())
        .then((data) => data);

      const functionResultWith23 = await getData(23);

      const resultWith55 = await fetch(
        `https://jsonplaceholder.typicode.com/posts/55`
      )
        .then((response) => response.json())
        .then((data) => data);

      const functionResultWith55 = await getData(55);

      //Tests with 23
      expect(Object.keys(functionResultWith23).length).toBeGreaterThan(0);
      expect(Object.keys(resultWith23).length).toBeGreaterThan(0);

      expect(functionResultWith23.userId).toBe(resultWith23.userId);
      expect(functionResultWith23.id).toBe(resultWith23.id);
      expect(functionResultWith23.title).toBe(resultWith23.title);
      expect(functionResultWith23.body).toBe(resultWith23.body);

      //Tests with 55
      expect(Object.keys(functionResultWith55).length).toBeGreaterThan(0);
      expect(Object.keys(resultWith55).length).toBeGreaterThan(0);

      expect(functionResultWith55.userId).toBe(resultWith55.userId);
      expect(functionResultWith55.id).toBe(resultWith55.id);
      expect(functionResultWith55.title).toBe(resultWith55.title);
      expect(functionResultWith55.body).toBe(resultWith55.body);
    });
  });

  describe("postData()", () => {
    it("Should be defined", () => {
      expect(postData).toBeDefined();
    });

    it("Should accept object", async () => {
      await expect(postData("string")).rejects.toThrow();
      await expect(postData(null)).rejects.toThrow();
      await expect(postData(undefined)).rejects.toThrow();
      await expect(postData(true)).rejects.toThrow();
      await expect(postData(1)).rejects.toThrow();
      await expect(
        postData({ userId: 1, title: "test", body: "test" })
      ).resolves.not.toThrow();
    });

    it("Should be in correct format", async () => {
      await expect(postData({})).rejects.toThrow();
      await expect(postData({ userId: 1, title: "test" })).rejects.toThrow();
      await expect(postData({ userId: 1, body: "test" })).rejects.toThrow();
      await expect(postData({ title: "test", body: "test" })).rejects.toThrow();
      await expect(postData({ title: "test", body: "test" })).rejects.toThrow();
      await expect(
        postData({ userId: 1, title: "test", body: "test" })
      ).resolves.not.toThrow();
    });

    it("Should function return promise", () => {
      const body = { userId: 1, title: "test", body: "test" };
      const promise = postData(body);
      const isPromise = typeof promise?.then === "function";

      expect(isPromise).toBeTruthy();
    });

    it("Should function return object when is awaited", async () => {
      const body = { userId: 1, title: "test", body: "test" };
      const data = await postData(body);
      const type = typeof data;

      expect(type).not.toBe("undefined");
      expect(type).not.toBe("number");
      expect(type).not.toBe("string");
      expect(type).toBe("object");
    });

    it("Should have id property", async () => {
      const body = { userId: 1, title: "test", body: "test" };
      const data = await postData(body);

      expect(data.id).toBeTruthy();
    });

    it("Should return correct values", async () => {
      const body = { userId: 1, title: "test", body: "test" };
      const data = await postData(body);

      expect(data.id).toBe(101);
    });
  });

  describe("putData()", () => {
    it("Should be defined", () => {
      expect(putData).toBeDefined();
    });

    it("Should accept number and object", async () => {
      const validBody = { userId: 1, title: "test", body: "test" };
      
      await expect(putData(1, "string")).rejects.toThrow();
      await expect(putData(1, null)).rejects.toThrow();
      await expect(putData(1, undefined)).rejects.toThrow();
      await expect(putData(1, true)).rejects.toThrow();
      await expect(putData(1, 1)).rejects.toThrow();

      await expect(putData("string", validBody)).rejects.toThrow();
      await expect(putData(true, validBody)).rejects.toThrow();
      await expect(putData(null, validBody)).rejects.toThrow();
      await expect(putData(undefined, validBody)).rejects.toThrow();
      await expect(putData({}, validBody)).rejects.toThrow();
      await expect(putData([], validBody)).rejects.toThrow();
      await expect(putData(() => {}, validBody)).rejects.toThrow();

      await expect(putData(1, validBody)).resolves.not.toThrow();
    });

    it("Should body be in correct format", async () => {
      await expect(putData(1, {})).rejects.toThrow();
      await expect(putData(1, { userId: 1, title: "test" })).rejects.toThrow();
      await expect(putData(1, { userId: 1, body: "test" })).rejects.toThrow();
      await expect(putData(1, { title: "test", body: "test" })).rejects.toThrow();
      await expect(putData(1, { title: "test", body: "test" })).rejects.toThrow();
      await expect(
        putData(1, { userId: 1, title: "test", body: "test" })
      ).resolves.not.toThrow();
    });

    it("Should function return promise", () => {
      const body = { userId: 1, title: "test", body: "test" };
      const promise = putData(1, body);
      const isPromise = typeof promise?.then === "function";

      expect(isPromise).toBeTruthy();
    });

    it("Should function return object when is awaited", async () => {
      const body = { userId: 1, title: "test", body: "test" };
      const data = await putData(1, body);
      const type = typeof data;

      expect(type).not.toBe("undefined");
      expect(type).not.toBe("number");
      expect(type).not.toBe("string");
      expect(type).toBe("object");
    });

    it("Should have id property", async () => {
      const body = { userId: 1, title: "test", body: "test" };
      const data = await putData(1, body);

      expect(data.id).toBeTruthy();
    });

    it("Should return correct values", async () => {
      const body = { userId: 1, title: "test", body: "test" };
      const testWithId48 = await putData(48, body);
      const testWithId88 = await putData(88, body);

      expect(testWithId48.id).toBe(48);
      expect(testWithId88.id).toBe(88);
    });
  });

  describe("deleteData()", () => {
    it("Should be defined", () => {
      expect(deleteData).toBeDefined();
    });

    it("Should accept number", async () => {
      await expect(deleteData("string")).rejects.toThrow();
      await expect(deleteData(true)).rejects.toThrow();
      await expect(deleteData(null)).rejects.toThrow();
      await expect(deleteData(undefined)).rejects.toThrow();
      await expect(deleteData({})).rejects.toThrow();
      await expect(deleteData([])).rejects.toThrow();
      await expect(deleteData(() => {})).rejects.toThrow();

      await expect(deleteData(1)).resolves.not.toThrow();
    });

    it("Should id be between 1 and 100", async () => {
      await expect(deleteData(0)).rejects.toThrow();
      await expect(deleteData(-100)).rejects.toThrow();
      await expect(deleteData(200)).rejects.toThrow();
    });

    it("Should function return promise", () => {
      const promise = deleteData(1);
      const isPromise = typeof promise?.then === "function";

      expect(isPromise).toBeTruthy();
    });

    it("Should function return object when is awaited", async () => {
      const data = await deleteData(1);
      const type = typeof data;

      expect(type).not.toBe("undefined");
      expect(type).not.toBe("number");
      expect(type).not.toBe("string");
      expect(type).toBe("object");
    });

    it("Should return correct values", async () => {
      const testWithId12 = await deleteData(12);
      const testWithId38 = await deleteData(38);

      const isTestWithId12Object = typeof testWithId12 === "object" && Object.keys(testWithId12).length === 0;
      const isTestWithId38Object = typeof testWithId38 === "object" && Object.keys(testWithId38).length === 0;

      expect(isTestWithId12Object).toBeTruthy();
      expect(isTestWithId38Object).toBeTruthy();
    });
  });
});
