const { isGeneratorFunction } = require("util/types");
const {
  map,
  fibonacci,
  potentialVotersResult,
  reduce,
  calculateEvenAverage,
} = require("./index");

describe("Assessment 1", () => {
  describe("map", () => {
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

    it("Should not call array map", () => {
      const initializeMapSpy = jest.spyOn(Array.prototype, "map");

      map(numberedArray, mockedCallBack);

      expect(initializeMapSpy).not.toHaveBeenCalled();
    });

    it("Is defined", () => {
      expect(map).toBeDefined();
    });

    it("Accepts array as first argument", () => {
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

    it("Accepts a function as a second argument", () => {
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

    it("Should return an array", () => {
      expect(map(numberedArray, mockedCallBack)).toBeInstanceOf(Array);
    });

    it("Should not mutate", () => {
      expect(map(numberedArray, mockedCallBack)).not.toBe(numberedArray);
    });

    it("Should multiply every element by two", () => {
      expect(map(numberedArray, multiplyByTwo)).toEqual(
        numberedArray.map(multiplyByTwo)
      );
    });

    it("Should concat index to element", () => {
      expect(map(namedArray, concatIndexToElement)).toEqual(
        namedArray.map(concatIndexToElement)
      );
    });

    it("Should concat element, index and current array", () => {
      expect(map(namedArray, concatArguments)).toEqual(
        namedArray.map(concatArguments)
      );
    });

    it("Should get names from object", () => {
      expect(map(mockedObject, extractName)).toEqual(
        mockedObject.map(extractName)
      );
    });
  });
});

describe("Assessment 2", () => {
  describe("fibonacci", () => {
    it("Is defined", () => {
      expect(fibonacci).toBeDefined();
    });

    it("Should call a generator function", () => {
      expect(isGeneratorFunction(fibonacci)).toEqual(true);
    });

    it("Should return return the smallest number of bills", () => {
      const incrementFibonacci = fibonacci();

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

describe("Assessment 3", () => {
  describe("potentialVotersResult", () => {
    it("Is defined", () => {
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
      expect(
        potentialVotersResult([
          { name: "John", age: 18, voted: true },
          { name: "Jake", age: 55, voted: true },
          { name: "Peter", age: 25, voted: false },
          { name: "Harry", age: 53, voted: false },
          { name: "George", age: 23, voted: false },
          { name: "Dan", age: 40, voted: false },
        ])
      ).toEqual({
        young: 1,
        midAged: 0,
        afterMidAged: 1,
        old: 0,
      });

      expect(
        potentialVotersResult([
          { name: "John", age: 0, voted: true },
          { name: "Jake", age: 0, voted: true },
          { name: "Peter", age: 0, voted: false },
          { name: "Harry", age: 0, voted: false },
          { name: "George", age: 0, voted: false },
          { name: "Dan", age: 0, voted: false },
        ])
      ).toEqual({
        young: 0,
        midAged: 0,
        afterMidAged: 0,
        old: 0,
      });

      expect(
        potentialVotersResult([
          { name: "John", age: 18, voted: true },
          { name: "Jake", age: 23, voted: true },
          { name: "Peter", age: 25, voted: true },
          { name: "Harry", age: 76, voted: true },
          { name: "George", age: 44, voted: true },
          { name: "Dan", age: 40, voted: true },
        ])
      ).toEqual({
        young: 3,
        midAged: 2,
        afterMidAged: 0,
        old: 1,
      });
    });
  });
});

describe("Assessment 4", () => {
  describe("reduce", () => {
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

    it("Is defined", () => {
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

      reduce(array, mockedCallBack);

      expect(initializeReduceSpy).not.toHaveBeenCalled();
    });

    it("Should return sum of array elements", () => {
      expect(reduce(array, (acc, curr) => acc + curr, 0)).toEqual(
        array.reduce((acc, curr) => acc + curr, 0)
      );
    });

    it("Should return sum of array elements", () => {
      expect(
        reduce(objectArray, (acc, curr) => acc + curr.salary / curr.saving, 0)
      ).toEqual(
        objectArray.reduce((acc, curr) => acc + curr.salary / curr.saving, 0)
      );
    });
  });
});

describe("Assessment 4", () => {
  describe("calculateEvenAverage", () => {
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
      expect(calculateEvenAverage([])).toHaveProperty("sum");
      console.log([]);
      expect(calculateEvenAverage([])).toHaveProperty("evenArray");
    });

    it("Should return even array on evenArray", () => {
      expect(
        calculateEvenAverage([]).evenArray.map((el) => el % 2)
      ).not.toContain(1);

      expect(
        calculateEvenAverage([1, 2, 3, 4, 5]).evenArray.map((el) => el % 2)
      ).not.toContain(1);

      expect(
        calculateEvenAverage([2, 6, 3, 9, 12]).evenArray.map((el) => el % 2)
      ).not.toContain(1);
    });

    it("Should return correct sum of average", () => {
      expect(calculateEvenAverage([1, 2, 3, 4, 5]).sum).toEqual(6);
      expect(calculateEvenAverage([1, 3, 5, 7]).sum).toEqual(0);
      expect(calculateEvenAverage([2, 6, 3, 9, 12]).sum).toEqual(20);
      expect(calculateEvenAverage([0, 2, 2, 4, 2, 8]).sum).toEqual(18);
      expect(calculateEvenAverage([1, 3, 5, 8, 21, 124]).sum).toEqual(132);
    });

    it("Should return correct final result", () => {
      expect(calculateEvenAverage([1, 2, 3, 4, 5])).toEqual({
        sum: 6,
        evenArray: [4, 2],
      });

      expect(calculateEvenAverage([2, 2, 7, 12, 5])).toEqual({
        sum: 16,
        evenArray: [12, 2, 2],
      });

      expect(calculateEvenAverage([0, 0, 0, 0, 0])).toEqual({
        sum: 0,
        evenArray: [0, 0, 0, 0, 0],
      });

      expect(calculateEvenAverage([])).toEqual({
        sum: 0,
        evenArray: [],
      });

      expect(calculateEvenAverage([1, 3, 5, 9])).toEqual({
        sum: 0,
        evenArray: [],
      });
    });
  });
});
