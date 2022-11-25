const index = require("../../Quests/1. OOP, FP & VCS/FP/index");

test("Reduce_Returns_Number", async function () {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const result = index.reduce(array);
  expect(result).toEqual(expect.any(Number));
});

test("Reduce_Accepts_Array", async function () {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  expect(() => {
    index.reduce("test");
  }).toThrow();

  expect(() => {
    index.reduce(123);
  }).toThrow();

  expect(() => {
    index.reduce(true);
  }).toThrow();

  expect(() => {
    index.reduce({ prop: "test" });
  }).toThrow();

  expect(() => {
    index.reduce(array);
  }).not.toThrow();
});

test("Reduce_Returns_Valid_Response", async function () {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const result = index.reduce(array);

  expect(result).toEqual(55);
});

test("Reduce_Does_Not_Mutate", async function () {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const copy = [...array];
  const result = index.reduce(array);

  expect(array).toEqual(copy);
  expect(result).not.toBe(array);
});

test("Filter_Returns_Array", async function () {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const result = index.filter(array);
  expect(result).toBeInstanceOf(Array);
});

test("Filter_Accepts_Array", async function () {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  expect(() => {
    index.filter("test");
  }).toThrow();

  expect(() => {
    index.filter(123);
  }).toThrow();

  expect(() => {
    index.filter(true);
  }).toThrow();

  expect(() => {
    index.filter({ prop: "test" });
  }).toThrow();

  expect(() => {
    index.filter(array);
  }).not.toThrow();
});

test("Filter_Returns_Valid_Response", async function () {
  const mockFilter = jest.fn((arr) => index.filter(arr));
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  mockFilter(array);
  expect(mockFilter).toHaveReturnedWith([2, 4, 6, 8, 10]);
});

test("Filter_Does_Not_Mutate", async function () {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const copy = [...array];
  const result = index.filter(array);

  expect(array).toEqual(copy);
  expect(result).not.toBe(array);
});

test("Map_Returns_Valid_Response", async function () {
  const mockMap = jest.fn((arr) => index.map(arr));
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  mockMap(array);
  expect(mockMap).toHaveReturnedWith([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
});

test("Map_Does_Not_Mutate", async function () {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const copy = [...array];
  const result = index.map(array);

  expect(array).toEqual(copy);
  expect(result).not.toBe(array);
});

test("Map_Accepts_Array", async function () {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  expect(() => {
    index.map("test");
  }).toThrow();

  expect(() => {
    index.map(123);
  }).toThrow();

  expect(() => {
    index.map(true);
  }).toThrow();

  expect(() => {
    index.map({ prop: "test" });
  }).toThrow();

  expect(() => {
    index.map(array);
  }).not.toThrow();
});

test("Map_Returns_Array", async function () {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const result = index.map(array);
  expect(result).toBeInstanceOf(Array);
});
