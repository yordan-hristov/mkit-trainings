const { carOwner, addTwo, Person } = require("./solution");

describe("Assessment 1 ", () => {
  describe("carOwner", () => {
    it("Should be defined", () => {
      expect(carOwner).toBeDefined();
    });

    it("Should be an object", () => {
      expect(carOwner).toBeInstanceOf(Object);
    });

    it("Should have a select new method", () => {
      expect(carOwner).toHaveProperty("selectNew");
    });

    it("Should have a cars property", () => {
      expect(carOwner).toHaveProperty("cars");
    });

    it("Should have a correct cars property structure", () => {
      expect(carOwner.cars).toBeInstanceOf(Array);

      expect(
        carOwner.cars.every(
          (element) =>
            element.hasOwnProperty("model") && element.hasOwnProperty("year")
        )
      ).toBeTruthy();
    });

    describe("selectNew", () => {
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
          carOwner.selectNew("test");
        }).toThrow();

        expect(() => {
          carOwner.selectNew(false);
        }).toThrow();

        expect(() => {
          carOwner.selectNew([]);
        }).toThrow();

        expect(() => {
          carOwner.selectNew({ props: "test" });
        }).toThrow();

        expect(() => {
          carOwner.selectNew(123);
        }).not.toThrow();
      });

      it("Should return an array", () => {
        expect(carOwner.selectNew(1)).toBeInstanceOf(Array);
      });

      test.each(MOCKED_CARS)("Should return correct cars", ({ cars, year }) => {
        const testObject = { ...carOwner, cars };

        const currentYear = Number(new Date().getFullYear());

        const returnValue = cars
          .sort((a, b) => b.year - a.year)
          .filter(({ year: carYear }) => currentYear - carYear <= year)
          .map(({ model }) => model);

        expect(testObject.selectNew(year)).toEqual(returnValue);
      });
    });
  });

  describe("Assessment 2", () => {
    describe("addTwo", () => {
      it("Should be defined", () => {
        expect(addTwo).toBeDefined();
      });

      it("Should add two numbers from object", () => {
        expect(addTwo.call({ a: 1, b: 2 })).toBe(3);
        expect(addTwo.call({ a: 3, b: 8 })).toBe(11);
        expect(addTwo.call({ a: 6, b: 2 })).toBe(8);
        expect(addTwo.call({ a: 20, b: 11 })).toBe(31);
        expect(addTwo.call({ a: 0, b: 0 })).toBe(0);
      });
    });
  });

  describe("Assessment 3", () => {
    describe("Person", () => {
      it("Should be defined", () => {
        expect(Person).toBeDefined();
      });

      it("Should be an IIFE", () => {
        expect(isImid)
      })
    });
  });
});
