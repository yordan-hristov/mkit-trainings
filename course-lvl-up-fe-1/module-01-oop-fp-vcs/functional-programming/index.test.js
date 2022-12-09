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
    it("Should be defined", () => {
      expect(map).toBeDefined();
    });

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

    it("Should return a valid response", () => {
      const mockMap = jest.fn((arr) => map(arr));
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      mockMap(array);

      expect(mockMap).toHaveReturnedWith([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
    });

    it("Should not mutate the input array of numbers", () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const copy = [...array];

      const result = map(array);

      expect(array).toEqual(copy);
      expect(result).not.toBe(array);
    });
  });

  describe("filter()", () => {
    it("Should be defined", () => {
      expect(filter).toBeDefined();
    });

    it("Should accept an array of numbers", () => {
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

    it("Should return an array of numbers", () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      const result = filter(array);

      expect(result).toBeInstanceOf(Array);
    });

    it("Should return a valid response", () => {
      const mockFilter = jest.fn((arr) => filter(arr));
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      mockFilter(array);

      expect(mockFilter).toHaveReturnedWith([2, 4, 6, 8, 10]);
    });

    it("Should not mutate the input array of numbers", () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const copy = [...array];

      const result = filter(array);

      expect(array).toEqual(copy);
      expect(result).not.toBe(array);
    });
  });

  describe("reduce()", () => {
    it("Should be defined", () => {
      expect(reduce).toBeDefined();
    });

    it("Should accept an array of numbers", () => {
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

    it("Should return a number", () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      const result = reduce(array);

      expect(result).toEqual(expect.any(Number));
    });

    it("Should return a valid response", () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      const result = reduce(array);

      expect(result).toEqual(55);
    });

    it("Should not mutate the input array of numbers", () => {
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
    it("Should be defined", () => {
      expect(sort).toBeDefined();
    });

    it("Should return an array of objects", () => {
      const testInput = [{ name: "John", age: 1 }];

      const result = sort(testInput);

      expect(result).toBeInstanceOf(Array);
    });

    it("Should return a correct value with no equal names", () => {
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

      const result = sort(testInput);

      expect(result).toEqual(expected);
    });

    it("Should return a correct value with equal names", () => {
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

      const result = sort(testInput);

      expect(result).toEqual(expected);
    });

    it("Should not mutate the input array of objects", () => {
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
    it("Should be defined", () => {
      expect(calculator).toBeDefined();
    });

    describe("result", () => {
      it("Should be defined", () => {
        expect(calculator.result).toBeDefined();
      });

      it("Should be initially 0", () => {
        expect(calculator.result).toBe(0);
      });
    });

    describe("add", () => {
      beforeEach(() => {
        calculator.result = 0;
      });

      it("Should be defined", () => {
        expect(calculator.add).toBeDefined();
      });

      it("Should add the input to result", () => {
        calculator.add(1);

        expect(calculator.result).toEqual(1);
      });

      it("Should be chainable", () => {
        expect(calculator.add(5).add(5).result).toEqual(10);
      });
    });

    describe("subtract", () => {
      beforeEach(() => {
        calculator.result = 0;
      });

      it("Should be defined", () => {
        expect(calculator.subtract).toBeDefined();
      });

      it("Should subtract the input from result", () => {
        calculator.subtract(1);

        expect(calculator.result).toEqual(-1);
      });

      it("Should be chainable", () => {
        expect(calculator.subtract(5).subtract(5).result).toEqual(-10);
      });
    });

    describe("multiply", () => {
      beforeEach(() => {
        calculator.result = 2;
      });

      it("Should be defined", () => {
        expect(calculator.multiply).toBeDefined();
      });

      it("Should multiply result by the input", () => {
        calculator.multiply(5);

        expect(calculator.result).toEqual(10);
      });

      it("Should be chainable", () => {
        expect(calculator.multiply(2).multiply(3).result).toEqual(12);
      });
    });

    describe("divide", () => {
      beforeEach(() => {
        calculator.result = 10;
      });

      it("Should be defined", () => {
        expect(calculator.divide).toBeDefined();
      });

      it("Should divide result by the input", () => {
        calculator.divide(2);

        expect(calculator.result).toEqual(5);
      });

      it("Should be chainable", () => {
        expect(calculator.divide(2).divide(5).result).toEqual(1);
      });
    });

    it("Should be able to chain all functions", () => {
      calculator.result = 0;

      expect(
        calculator.add(20).subtract(5).multiply(2).divide(3).result
      ).toEqual(10);
    });
  });
});

describe("Exercise 4 - Recursion", () => {
  describe("recursive", () => {
    it("Should be defined", () => {
      expect(recursive).toBeDefined();
    });

    it("Should return a correct value with even input", () => {
      expect(recursive(6)).toEqual([6, 4, 2, 0]);
    });

    it("Should return a correct value with odd input", () => {
      expect(recursive(5)).toEqual([4, 2, 0]);
    });
  });
});

describe("Exercise 5 - Closures", () => {
  describe("createFibonacciClosure", () => {
    it("Should be defined", () => {
      expect(createFibonacciClosure).toBeDefined();
    });

    it("Should return a function", () => {
      const result = createFibonacciClosure();

      expect(typeof result).toEqual("function");
    });

    it("Returned function should return the next fibonacci number", () => {
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
    it("Should be defined", () => {
      expect(add).toBeDefined();
    });

    it("Should return a correct value when called once", () => {
      expect(add(1)()).toEqual(1);
    });

    it("Should return a correct value when called multiple times", () => {
      expect(add(1)(2)()).toEqual(3);
      expect(add(1)(2)(3)()).toEqual(6);
      expect(add(1)(2)(3)(4)()).toEqual(10);
      expect(add(1)(2)(3)(4)(5)()).toEqual(15);
      expect(add(5)(5)(5)(5)(5)(5)(5)(5)(5)(5)(5)()).toEqual(55);
    });
  });
});
