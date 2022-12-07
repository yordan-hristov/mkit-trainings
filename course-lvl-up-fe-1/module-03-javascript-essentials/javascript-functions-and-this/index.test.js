const {
  carOwner,
  addTwo,
  getUsers,
  Person,
  getPrintName,
} = require("./solution");

describe("Exercise 1 - Car Manufacturing", () => {
  describe("carOwner()", () => {
    let mockedCarOwner = {};

    beforeEach(() => {
      mockedCarOwner = { ...carOwner };
    });

    it("Should be defined", () => {
      expect(mockedCarOwner).toBeDefined();
    });

    it("Should be an object", () => {
      expect(mockedCarOwner).toBeInstanceOf(Object);
    });

    it("Should have a cars property", () => {
      expect(mockedCarOwner).toHaveProperty("cars");
    });

    it("Should have a select new method", () => {
      expect(mockedCarOwner).toHaveProperty("selectNew");
    });

    describe("cars", () => {
      it("Should have a correct property structure", () => {
        const { cars } = mockedCarOwner;

        expect(
          cars.every(
            (element) =>
              element.hasOwnProperty("model") && element.hasOwnProperty("year")
          )
        ).toBeTruthy();
      });

      it("Should return array", () => {
        const { cars } = mockedCarOwner;

        expect(cars).toBeInstanceOf(Array);
      });
    });

    describe("selectNew()", () => {
      const MOCKED_CARS = [
        {
          cars: [
            {
              model: "BMW",
              year: 1999,
            },
            {
              model: "Mercedes",
              year: 2022,
            },
            {
              model: "Audi",
              year: 2021,
            },
          ],
          year: 2,
        },
        {
          cars: [
            {
              model: "BMW",
              year: 1999,
            },
            {
              model: "Mercedes",
              year: 1998,
            },
            {
              model: "Audi",
              year: 2000,
            },
          ],
          year: 100,
        },
        {
          cars: [
            {
              model: "BMW",
              year: 1999,
            },
            {
              model: "Mercedes",
              year: 1998,
            },
            {
              model: "Audi",
              year: 2000,
            },
          ],
          year: 2,
        },
        {
          cars: [],
          year: 0,
        },
      ];

      it("Should accept a number", () => {
        expect(() => {
          mockedCarOwner.selectNew("test");
        }).toThrow();

        expect(() => {
          mockedCarOwner.selectNew(false);
        }).toThrow();

        expect(() => {
          mockedCarOwner.selectNew([]);
        }).toThrow();

        expect(() => {
          mockedCarOwner.selectNew({ props: "test" });
        }).toThrow();

        expect(() => {
          mockedCarOwner.selectNew(123);
        }).not.toThrow();
      });

      it("Should return an array", () => {
        const result = mockedCarOwner.selectNew(1);

        expect(result).toBeInstanceOf(Array);
      });

      test.each(MOCKED_CARS)("Should return correct cars", ({ cars, year }) => {
        const testObject = { ...mockedCarOwner, cars };

        const currentYear = Number(new Date().getFullYear());

        const result = testObject.selectNew(year);

        const correctValue = cars
          .sort((a, b) => b.year - a.year)
          .filter(({ year: carYear }) => currentYear - carYear <= year)
          .map(({ model }) => model);

        expect(result).toEqual(correctValue);
      });
    });
  });

  describe("Exercise 2 - Sum of two numbers by context", () => {
    describe("addTwo()", () => {
      it("Should be defined", () => {
        expect(addTwo).toBeDefined();
      });

      it("Should return a number", () => {
        const mockedAddTwo = jest.fn(addTwo);

        const result = mockedAddTwo.call({ a: 1, b: 2 });
        const resultType = typeof result;

        expect(resultType).toBe("number");
      });

      it("Should add two numbers from object", () => {
        const mockedAddTwo = jest.fn(addTwo);

        const result1 = mockedAddTwo.call({ a: 1, b: 2 });
        const result2 = mockedAddTwo.call({ a: 3, b: 8 });
        const result3 = mockedAddTwo.call({ a: 6, b: 2 });
        const result4 = mockedAddTwo.call({ a: 20, b: 11 });
        const result5 = mockedAddTwo.call({ a: 0, b: 0 });

        expect(result1).toBe(3);
        expect(result2).toBe(11);
        expect(result3).toBe(8);
        expect(result4).toBe(31);
        expect(result5).toBe(0);
      });
    });
  });

  describe("Exercise 3 - Check for available users", () => {
    const MOCKED_DATA = [
      {
        name: "John",
        status: "online",
      },
      {
        name: "Peter",
        status: "offline",
      },
      {
        name: "Harry",
        status: "online",
      },
    ];

    describe("getUsers()", () => {
      it("Should be defined", () => {
        expect(getUsers).toBeDefined();
      });

      it("Should return an array", () => {
        const mockedGetUsers = jest.fn(getUsers);

        const result = mockedGetUsers.call(MOCKED_DATA);

        expect(result).toBeInstanceOf(Object);
      });

      it("Should return correct result", () => {
        const mockedGetUsers = jest.fn(getUsers);

        const result1 = mockedGetUsers.call(MOCKED_DATA);
        const result2 = mockedGetUsers.call([
          {
            name: "John",
            status: "online",
          },
          {
            name: "Peter",
            status: "online",
          },
          {
            name: "Harry",
            status: "online",
          },
        ]);

        const result3 = mockedGetUsers.call([
          {
            name: "John",
            status: "offline",
          },
          {
            name: "Peter",
            status: "offline",
          },
          {
            name: "Harry",
            status: "offline",
          },
        ]);

        expect(result1).toEqual({
          online: ["John", "Harry"],
          offline: ["Peter"],
        });

        expect(result2).toEqual({
          online: ["John", "Peter", "Harry"],
          offline: [],
        });

        expect(result3).toEqual({
          online: [],
          offline: ["John", "Peter", "Harry"],
        });
      });
    });
  });

  describe("Exercise 4 - Create a javascript Class from scratch", () => {
    describe("Person", () => {
      it("Should be defined", () => {
        expect(Person).toBeDefined();
      });

      it("Should return an instance", () => {
        const MockedPerson = jest.fn(Person);

        const instance = new MockedPerson("John", 23);

        expect(instance).toBeInstanceOf(MockedPerson);
      });

      it("Should accept name(string) as first argument", () => {
        expect(() => {
          new Person(123, 123);
        }).toThrow();

        expect(() => {
          new Person(false, 123);
        }).toThrow();

        expect(() => {
          new Person([], 123);
        }).toThrow();

        expect(() => {
          new Person({}, 123);
        }).toThrow();

        expect(() => {
          new Person("John", 123);
        }).not.toThrow();
      });

      it("Should accept age(number) as second argument", () => {
        expect(() => {
          new Person("John", "123");
        }).toThrow();

        expect(() => {
          new Person("John", false);
        }).toThrow();

        expect(() => {
          new Person("John", []);
        }).toThrow();

        expect(() => {
          new Person("John", {});
        }).toThrow();

        expect(() => {
          new Person("John", 123);
        }).not.toThrow();
      });

      it("Should return instance with correct properties", () => {
        const MockedPerson = jest.fn(Person);

        const john = new MockedPerson("John", 23);

        expect(john).toHaveProperty("name");
        expect(john).toHaveProperty("age");
      });

      it("Should return instance with correct property values", () => {
        const MockedPerson = jest.fn(Person);

        const john = new MockedPerson("John", 23);

        expect(john.name).toEqual("John");
        expect(john.age).toEqual(23);
      });

      describe("getPerson()", () => {
        it("Should be declared to instance", () => {
          const MockedPerson = jest.fn(Person);

          const john = new MockedPerson("John", 23);

          expect(john).toHaveProperty("getPerson");
          expect(typeof john.getPerson).toBe("function");
        });

        it("Should return a string", () => {
          const MockedPerson = jest.fn(Person);
          const john = new MockedPerson("John", 23);

          const returnType = typeof john.getPerson();

          expect(returnType).toBe("string");
        });

        it("Should return correct result", () => {
          const MockedPerson = jest.fn(Person);
          const john = new MockedPerson("John", 23);
          const peter = new MockedPerson("Peter", 32);
          const harry = new MockedPerson("Harry", 56);
          const george = new MockedPerson("George", 12);
          const ben = new MockedPerson("Ben", 27);

          const johnResult = john.getPerson();
          const peterResult = peter.getPerson();
          const harryResult = harry.getPerson();
          const georgeResult = george.getPerson();
          const benResult = ben.getPerson();

          expect(johnResult).toBe("John 23");
          expect(peterResult).toBe("Peter 32");
          expect(harryResult).toBe("Harry 56");
          expect(georgeResult).toBe("George 12");
          expect(benResult).toBe("Ben 27");
        });
      });
    });
  });

  describe("Exercise 5 - Get Person's Name", () => {
    describe("getPrintName()", () => {
      it("Should be defined", () => {
        expect(getPrintName).toBeDefined();
      });

      it("Should return a function", () => {
        const mockedGetPrintName = jest.fn(getPrintName);

        const returnType = typeof mockedGetPrintName();

        expect(returnType).toBe("function");
      });

      describe("Returned callback", () => {
        it("Should return a string", () => {
          const mockedGetPrintName = jest.fn(getPrintName);
          const person = {
            name: "John",
            printName: mockedGetPrintName,
          };

          const returnType = typeof person.printName()();

          expect(returnType).toBe("string");
        });

        it("Should return correct result", () => {
          const mockedGetPrintName = jest.fn(getPrintName);
          const person1 = {
            name: "John",
            printName: mockedGetPrintName,
          };
          const person2 = {
            name: "Peter",
            printName: mockedGetPrintName,
          };
          const person3 = {
            name: "Harry",
            printName: mockedGetPrintName,
          };

          const result1 = person1.printName()();
          const result2 = person2.printName()();
          const result3 = person3.printName()();

          expect(result1).toEqual("John");
          expect(result2).toEqual("Peter");
          expect(result3).toEqual("Harry");
        });
      });
    });
  });
});
