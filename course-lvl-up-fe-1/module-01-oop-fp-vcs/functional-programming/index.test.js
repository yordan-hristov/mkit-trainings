const {
  map,
  filter,
  reduce,
  sort,
  calculator,
  recursive,
  createFibonacciClosure,
  add,
} = require("./index");

describe("Exercise 1 - Array Functions", () => {
  describe("map()", () => {
    it("Should accept an array of numbers", () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      expect(() => {
        map("test");
      }).toThrow();

      expect(() => {
        map(123);
      }).toThrow();

      expect(() => {
        map(true);
      }).toThrow();

      expect(() => {
        map({ prop: "test" });
      }).toThrow();

      expect(() => {
        map(array);
      }).not.toThrow();
    });

    it("Should return an array of numbers", () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      const result = map(array);

      expect(result).toBeInstanceOf(Array);
    });

    it("Should not mutate the input array of numbers", () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const copy = [...array];

      const result = map(array);

      expect(array).toEqual(copy);
      expect(result).not.toBe(array);
    });

    it("Should return a valid response", () => {
      const mockMap = jest.fn((arr) => map(arr));
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      mockMap(array);

      expect(mockMap).toHaveReturnedWith([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
    });
  });

  describe("filter()", () => {
    it("Returns array", () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const result = filter(array);
      expect(result).toBeInstanceOf(Array);
    });

    it("Accepts array", () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      expect(() => {
        filter("test");
      }).toThrow();

      expect(() => {
        filter(123);
      }).toThrow();

      expect(() => {
        filter(true);
      }).toThrow();

      expect(() => {
        filter({ prop: "test" });
      }).toThrow();

      expect(() => {
        filter(array);
      }).not.toThrow();
    });

    it("Returns valid response", () => {
      const mockFilter = jest.fn((arr) => filter(arr));
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      mockFilter(array);
      expect(mockFilter).toHaveReturnedWith([2, 4, 6, 8, 10]);
    });

    it("Does not mutate", () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const copy = [...array];
      const result = filter(array);

      expect(array).toEqual(copy);
      expect(result).not.toBe(array);
    });
  });

  describe("reduce()", () => {
    it("Returns number", () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const result = reduce(array);
      expect(result).toEqual(expect.any(Number));
    });

    it("Accepts array", () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      expect(() => {
        reduce("test");
      }).toThrow();

      expect(() => {
        reduce(123);
      }).toThrow();

      expect(() => {
        reduce(true);
      }).toThrow();

      expect(() => {
        reduce({ prop: "test" });
      }).toThrow();

      expect(() => {
        reduce(array);
      }).not.toThrow();
    });

    it("Returns valid response", () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const result = reduce(array);

      expect(result).toEqual(55);
    });

    it("Does not mutate", () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const copy = [...array];
      const result = reduce(array);

      expect(array).toEqual(copy);
      expect(result).not.toBe(array);
    });
  });
});

describe("Exercise 2 - Pure Functions", () => {
  describe("sort()", () => {
    it("Is defined", () => {
      expect(sort).toBeDefined();
    });

    it("Returns array", () => {
      const testInput = [{ name: "John", age: 1 }];

      expect(sort(testInput)).toBeInstanceOf(Array);
    });

    it("Returns correct value with no equal names", () => {
      const testInput = [
        { name: "John", age: 1 },
        { name: "Will", age: 1 },
        { name: "Mark", age: 1 },
        { name: "Chris", age: 1 },
      ];

      const expected = [
        { name: "Chris", age: 1 },
        { name: "John", age: 1 },
        { name: "Mark", age: 1 },
        { name: "Will", age: 1 },
      ];

      expect(sort(testInput)).toEqual(expected);
    });

    it("Returns correct value with equal names", () => {
      const testInput = [
        { name: "John", age: 1 },
        { name: "Will", age: 1 },
        { name: "Chris", age: 2 },
        { name: "Chris", age: 3 },
        { name: "Chris", age: 1 },
      ];

      const expected = [
        { name: "Chris", age: 1 },
        { name: "Chris", age: 2 },
        { name: "Chris", age: 3 },
        { name: "John", age: 1 },
        { name: "Will", age: 1 },
      ];

      expect(sort(testInput)).toEqual(expected);
    });

    it("Does not mutate the original array", () => {
      const testInput = [
        { name: "John", age: 1 },
        { name: "Mark", age: 2 },
      ];

      const result = sort(testInput);

      expect(result === testInput).toEqual(false);
      expect(testInput).toEqual([
        { name: "John", age: 1 },
        { name: "Mark", age: 2 },
      ]);
    });
  });
});

describe("Exercise 3 - Function Chaining and this", () => {
  describe("calculator", () => {
    it("Is defined", () => {
      expect(calculator).toBeDefined();
    });

    describe("result", () => {
      it("Is defined", () => {
        expect(calculator.result).toBeDefined();
      });

      it("Is initially 0", () => {
        expect(calculator.result).toBe(0);
      });
    });

    describe("add", () => {
      beforeEach(() => {
        calculator.result = 0;
      });

      it("Is defined", () => {
        expect(calculator.add).toBeDefined();
      });

      it("Successfully increments result", () => {
        calculator.add(1);
        expect(calculator.result).toEqual(1);
      });

      it("Can be chained", () => {
        expect(calculator.add(5).add(5).result).toEqual(10);
      });
    });

    describe("subtract", () => {
      beforeEach(() => {
        calculator.result = 0;
      });

      it("Is defined", () => {
        expect(calculator.subtract).toBeDefined();
      });

      it("Successfully decrements result", () => {
        calculator.subtract(1);
        expect(calculator.result).toEqual(-1);
      });

      it("Can be chained", () => {
        expect(calculator.subtract(5).subtract(5).result).toEqual(-10);
      });
    });

    describe("multiply", () => {
      beforeEach(() => {
        calculator.result = 2;
      });

      it("Is defined", () => {
        expect(calculator.multiply).toBeDefined();
      });

      it("Successfully multiplies result by the input", () => {
        calculator.multiply(5);
        expect(calculator.result).toEqual(10);
      });

      it("Can be chained", () => {
        expect(calculator.multiply(2).multiply(3).result).toEqual(12);
      });
    });

    describe("divide", () => {
      beforeEach(() => {
        calculator.result = 10;
      });

      it("Is defined", () => {
        expect(calculator.divide).toBeDefined();
      });

      it("Successfully divides result by the input", () => {
        calculator.divide(2);
        expect(calculator.result).toEqual(5);
      });

      it("Can be chained", () => {
        expect(calculator.divide(2).divide(5).result).toEqual(1);
      });
    });

    it("Can chain all functions", () => {
      calculator.result = 0;
      expect(
        calculator.add(20).subtract(5).multiply(2).divide(3).result
      ).toEqual(10);
    });
  });
});

describe("Exercise 4 - Recursion", () => {
  describe("recursive", () => {
    it("Is defined", () => {
      expect(recursive).toBeDefined();
    });

    it("Returns correct value with even input", () => {
      expect(recursive(6)).toEqual([6, 4, 2, 0]);
    });

    it("Returns correct value with odd input", () => {
      expect(recursive(5)).toEqual([4, 2, 0]);
    });
  });
});

describe("Exercise 5 - Closures", () => {
  describe("createFibonacciClosure", () => {
    it("Is defined", () => {
      expect(createFibonacciClosure).toBeDefined();
    });

    it("Returns a function", () => {
      const result = createFibonacciClosure();
      expect(typeof result).toEqual("function");
    });

    it("Returned function successfully returns next fibonacci number", () => {
      const result = createFibonacciClosure();

      expect(result()).toEqual(1);
      expect(result()).toEqual(1);
      expect(result()).toEqual(2);
      expect(result()).toEqual(3);
      expect(result()).toEqual(5);
      expect(result()).toEqual(8);
      expect(result()).toEqual(13);
      expect(result()).toEqual(21);
      expect(result()).toEqual(34);
    });
  });
});

describe("Exercise 6 - Function Currying", () => {
  describe("add", () => {
    it("Is defined", () => {
      expect(add).toBeDefined();
    });

    it("Return correct value when called once", () => {
      expect(add(1)()).toEqual(1);
    });

    it("Return correct value when called multiple times", () => {
      expect(add(1)(2)()).toEqual(3);
      expect(add(1)(2)(3)()).toEqual(6);
      expect(add(1)(2)(3)(4)()).toEqual(10);
      expect(add(1)(2)(3)(4)(5)()).toEqual(15);
      expect(add(5)(5)(5)(5)(5)(5)(5)(5)(5)(5)(5)()).toEqual(55);
    });
  });
});
