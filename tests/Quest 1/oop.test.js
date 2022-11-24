const index = require("../../Quest 1/OOP/index");

test("Shape_Instance_Of", async function () {
  const result = new index.Shape("sq", 4, 5);
  expect(result).toBeInstanceOf(Shape);
});

test("Shape_Calc_Perimeter", async function () {
  const sq = new index.Shape("sq", 4, 5);
  expect(sq.calcPerimeter()).toBe(20);
});

test("Shape_Side_Length", async function () {
  const sq = new index.Shape("sq", 4, 5);
  expect(sq.sideLength).toBe(5);
});

test("Shape_Sides", async function () {
  const sq = new index.Shape("sq", 4, 5);
  expect(sq.sides).toBe(4);
});

test("Shape_Name", async function () {
  const sq = new index.Shape("sq", 4, 5);
  expect(sq.name).toBe("sq");
});
