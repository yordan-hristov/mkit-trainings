const { isGeneratorFunction } = require("util/types");
const {
  map,
  fibonacci,
  potentialVotersResult,
  reduce,
  calculateEvenAverage,
} = require("./index");

describe("Exercise 1 - Generator Functions", () => {
  describe("map()", () => {
    const numberedArray = [1, 2, 3, 4, 5];
    const namedArray = ["John", "Doe", "Peter", "Parker"];
    const mockedObject = [
      {
        name: "John",
        age: 32,
      },

      {
        name: "Peter",
        age: 18,
      },

      {
        name: "Harry",
        age: 16,
      },
    ];

    const mockedCallBack = (el) => el;

    const multiplyByTwo = (el) => el * 2;

    const concatIndexToElement = (el, index) => `${el} - ${index}`;

    const concatArguments = (el, index, array) => `${el} - ${index} - ${array}`;

    const extractName = (el) => el.name;

    it("Should be defined", () => {
      expect(map).toBeDefined();
    });

    it("Should accepts array as first argument", () => {
      expect(() => {
        map("test", mockedCallBack);
      }).toThrow();

      expect(() => {
        map(123, mockedCallBack);
      }).toThrow();

      expect(() => {
        map(true, mockedCallBack);
      }).toThrow();

      expect(() => {
        map({ prop: "test" }, mockedCallBack);
      }).toThrow();

      expect(() => {
        map(numberedArray, mockedCallBack);
      }).not.toThrow();
    });

    it("Should accepts a function as a second argument", () => {
      expect(() => {
        map(numberedArray, "test");
      }).toThrow();

      expect(() => {
        map(numberedArray, 123);
      }).toThrow();

      expect(() => {
        map(numberedArray, false);
      }).toThrow();

      expect(() => {
        map(numberedArray, []);
      }).toThrow();

      expect(() => {
        map(numberedArray, { prop: "test" });
      }).toThrow();

      expect(() => {
        map(numberedArray, mockedCallBack);
      }).not.toThrow();
    });

    it("Should not call array map", () => {
      const initializeMapSpy = jest.spyOn(Array.prototype, "map");
      const mockedMap = jest.fn(map);

      mockedMap(numberedArray, mockedCallBack);

      expect(initializeMapSpy).not.toHaveBeenCalled();
    });

    it("Should return an array", () => {
      const mockedMap = jest.fn(map);

      const result = mockedMap(numberedArray, mockedCallBack);

      expect(result).toBeInstanceOf(Array);
    });

    it("Should not mutate", () => {
      const mockedMap = jest.fn(map);

      const result = mockedMap(numberedArray, mockedCallBack);

      expect(result).not.toBe(numberedArray);
    });

    it("Should multiply every element by two", () => {
      const mockedMap = jest.fn(map);

      const result = mockedMap(numberedArray, multiplyByTwo);
      const realMapResult = numberedArray.map(multiplyByTwo);

      expect(result).toEqual(realMapResult);
    });

    it("Should concat index to element", () => {
      const mockedMap = jest.fn(map);

      const result = mockedMap(namedArray, concatIndexToElement);
      const realMapResult = namedArray.map(concatIndexToElement);

      expect(result).toEqual(realMapResult);
    });

    it("Should concat element, index, and current array", () => {
      const mockedMap = jest.fn(map);

      const result = mockedMap(namedArray, concatArguments);
      const realMapResult = namedArray.map(concatArguments);

      expect(result).toEqual(realMapResult);
    });

    it("Should get names from object", () => {
      const mockedMap = jest.fn(map);

      const result = mockedMap(mockedObject, extractName);
      const realMapResult = mockedObject.map(extractName);

      expect(result).toEqual(realMapResult);
    });
  });
});

describe("Exercise 2 - Array Methods(Map)", () => {
  describe("fibonacci", () => {
    it("Should be defined", () => {
      expect(fibonacci).toBeDefined();
    });

    it("Should be a generator function", () => {
      const isGeneratorUsed = isGeneratorFunction(fibonacci);

      expect(isGeneratorUsed).toBeTruthy();
    });

    it("Should return return the smallest number of bills", () => {
      const mockedFibonacci = jest.fn(fibonacci);

      const incrementFibonacci = mockedFibonacci();

      expect(incrementFibonacci.next().value).toEqual(0);
      expect(incrementFibonacci.next().value).toEqual(1);
      expect(incrementFibonacci.next().value).toEqual(1);
      expect(incrementFibonacci.next().value).toEqual(2);
      expect(incrementFibonacci.next().value).toEqual(3);
      expect(incrementFibonacci.next().value).toEqual(5);
      expect(incrementFibonacci.next().value).toEqual(8);
      expect(incrementFibonacci.next().value).toEqual(13);
      expect(incrementFibonacci.next().value).toEqual(21);
      expect(incrementFibonacci.next().value).toEqual(34);
      expect(incrementFibonacci.next().value).toEqual(55);
      expect(incrementFibonacci.next().value).toEqual(89);
      expect(incrementFibonacci.next().value).toEqual(144);
    });
  });
});

describe("Exercise 3 - Array Methods(Reduce)", () => {
  describe("potentialVotersResult()", () => {
    it("Should be defined", () => {
      expect(potentialVotersResult).toBeDefined();
    });

    it("Should accept array", () => {
      expect(() => {
        potentialVotersResult("test");
      }).toThrow();

      expect(() => {
        potentialVotersResult(123);
      }).toThrow();

      expect(() => {
        potentialVotersResult(false);
      }).toThrow();

      expect(() => {
        potentialVotersResult(() => {});
      }).toThrow();

      expect(() => {
        potentialVotersResult({});
      }).toThrow();

      expect(() => {
        potentialVotersResult([]);
      }).not.toThrow();
    });

    it("Should return correct result", () => {
      const mockedPotentialVotersResult = jest.fn(potentialVotersResult);

      const result1 = mockedPotentialVotersResult([
        { name: "John", age: 18, voted: true },
        { name: "Jake", age: 55, voted: true },
        { name: "Peter", age: 25, voted: false },
        { name: "Harry", age: 53, voted: false },
        { name: "George", age: 23, voted: false },
        { name: "Dan", age: 40, voted: false },
      ]);

      const result2 = mockedPotentialVotersResult([
        { name: "John", age: 0, voted: true },
        { name: "Jake", age: 0, voted: true },
        { name: "Peter", age: 0, voted: false },
        { name: "Harry", age: 0, voted: false },
        { name: "George", age: 0, voted: false },
        { name: "Dan", age: 0, voted: false },
      ]);

      const result3 = mockedPotentialVotersResult([
        { name: "John", age: 18, voted: true },
        { name: "Jake", age: 23, voted: true },
        { name: "Peter", age: 25, voted: true },
        { name: "Harry", age: 76, voted: true },
        { name: "George", age: 44, voted: true },
        { name: "Dan", age: 40, voted: true },
      ]);

      expect(result1).toEqual({
        young: 1,
        midAged: 0,
        afterMidAged: 1,
        old: 0,
      });

      expect(result2).toEqual({
        young: 0,
        midAged: 0,
        afterMidAged: 0,
        old: 0,
      });

      expect(result3).toEqual({
        young: 3,
        midAged: 2,
        afterMidAged: 0,
        old: 1,
      });
    });
  });
});

describe("Exercise 4 - Array methods(Reduce implementation)", () => {
  describe("reduce()", () => {
    const array = [1, 2, 3, 4, 5];

    const objectArray = [
      {
        savings: 1000,
        salary: 1500,
      },
      {
        savings: 800,
        salary: 1100,
      },
      {
        savings: 100,
        salary: 2000,
      },
      {
        savings: 300,
        salary: 800,
      },
    ];

    const mockedCallBack = () => {};

    it("Should be defined", () => {
      expect(reduce).toBeDefined();
    });

    it("Should be a function", () => {
      expect(reduce).toBeInstanceOf(Function);
    });

    it("Should accept an array as a first parameter", () => {
      expect(() => {
        reduce("test", mockedCallBack);
      }).toThrow();

      expect(() => {
        reduce(123, mockedCallBack);
      }).toThrow();

      expect(() => {
        reduce(false, mockedCallBack);
      }).toThrow();

      expect(() => {
        reduce({ props: "test" }, mockedCallBack);
      }).toThrow();

      expect(() => {
        reduce(() => {}, mockedCallBack);
      }).toThrow();

      expect(() => {
        reduce(array, mockedCallBack);
      }).not.toThrow();
    });

    it("Should accept a function as a second argument", () => {
      expect(() => {
        reduce(array, "test");
      }).toThrow();

      expect(() => {
        reduce(array, 123);
      }).toThrow();

      expect(() => {
        reduce(array, false);
      }).toThrow();

      expect(() => {
        reduce(array, { props: "test" });
      }).toThrow();

      expect(() => {
        reduce(array, []);
      }).toThrow();

      expect(() => {
        reduce(array, mockedCallBack);
      }).not.toThrow();
    });

    it("Should not call array reduce", () => {
      const initializeReduceSpy = jest.spyOn(Array.prototype, "reduce");
      const mockedMap = jest.fn(reduce);

      mockedMap(array, mockedCallBack);

      expect(initializeReduceSpy).not.toHaveBeenCalled();
    });

    it("Should return valid reduce result", () => {
      const mockedReduce = jest.fn(reduce);

      const result1 = mockedReduce(array, (acc, curr) => acc + curr, 0);
      const result2 = mockedReduce(
        objectArray,
        (acc, curr) => acc + curr.salary / curr.saving
      );

      const realReduceResult1 = array.reduce((acc, curr) => acc + curr, 0);
      const realReduceResult2 = objectArray.reduce(
        (acc, curr) => acc + curr.salary / curr.saving,
        0
      );

      expect(result1).toEqual(realReduceResult1);
      expect(result2).toEqual(realReduceResult2);
    });
  });
});

describe("Exercise 5 - Even Average Sum", () => {
  describe("calculateEvenAverage()", () => {
    it("Should be defined", () => {
      expect(calculateEvenAverage).toBeDefined();
    });

    it("Should receive an array", () => {
      expect(() => {
        calculateEvenAverage("test");
      }).toThrow();

      expect(() => {
        calculateEvenAverage(123);
      }).toThrow();

      expect(() => {
        calculateEvenAverage(false);
      }).toThrow();

      expect(() => {
        calculateEvenAverage(() => {});
      }).toThrow();

      expect(() => {
        calculateEvenAverage({});
      }).toThrow();

      expect(() => {
        calculateEvenAverage([]);
      }).not.toThrow();
    });

    it("Should should return correct object", () => {
      const mockedCalculateEvenAverage = jest.fn(calculateEvenAverage);

      const result = mockedCalculateEvenAverage([]);

      expect(result).toHaveProperty("sum");
      expect(result).toHaveProperty("evenArray");
    });

    it("Should return even array on evenArray", () => {
      const mockedCalculateEvenAverage = jest.fn(calculateEvenAverage);

      const result = mockedCalculateEvenAverage(
        calculateEvenAverage([]).evenArray.map((el) => el % 2)
      );

      expect(result).not.toContain(1);
    });

    it("Should return correct sum of average", () => {
      const mockedCalculateEvenAverage = jest.fn(calculateEvenAverage);

      expect(mockedCalculateEvenAverage([1, 2, 3, 4, 5]).sum).toEqual(6);
      expect(mockedCalculateEvenAverage([1, 3, 5, 7]).sum).toEqual(0);
      expect(mockedCalculateEvenAverage([2, 6, 3, 9, 12]).sum).toEqual(20);
      expect(mockedCalculateEvenAverage([0, 2, 2, 4, 2, 8]).sum).toEqual(18);
      expect(mockedCalculateEvenAverage([1, 3, 5, 8, 21, 124]).sum).toEqual(
        132
      );
    });

    it("Should return correct final result", () => {
      const mockedCalculateEvenAverage = jest.fn(calculateEvenAverage);

      const result1 = mockedCalculateEvenAverage([1, 2, 3, 4, 5]);
      const result2 = mockedCalculateEvenAverage([2, 2, 7, 12, 5]);
      const result3 = mockedCalculateEvenAverage([0, 0, 0, 0, 0]);
      const result4 = mockedCalculateEvenAverage([]);
      const result5 = mockedCalculateEvenAverage([1, 3, 5, 9]);

      expect(result1).toEqual({
        sum: 6,
        evenArray: [4, 2],
      });

      expect(result2).toEqual({
        sum: 16,
        evenArray: [12, 2, 2],
      });

      expect(result3).toEqual({
        sum: 0,
        evenArray: [0, 0, 0, 0, 0],
      });

      expect(result4).toEqual({
        sum: 0,
        evenArray: [],
      });

      expect(result5).toEqual({
        sum: 0,
        evenArray: [],
      });
    });
  });
});
