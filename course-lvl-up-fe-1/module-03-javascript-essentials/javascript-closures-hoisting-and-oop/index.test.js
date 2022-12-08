const {
  multiply,
  guessingGame,
  Human,
  Person,
  Car,
  Husky,
} = require("./solution");

describe("Exercise 1 - Multiplication", () => {
  describe("multiply()", () => {
    it("Should be defined", () => {
      expect(multiply).toBeDefined();
    });

    it("Should return function if b is not provided", () => {
      const mockedMultiply = jest.fn(multiply);

      const result = mockedMultiply(2);

      const returnType = typeof result;

      expect(returnType).toBe("function");
    });

    it("Should return a number if b is provided", () => {
      const mockedMultiply = jest.fn(multiply);

      const result = mockedMultiply(3, 4);
      const returnType = typeof result;

      expect(returnType).toBe("number");
    });

    it("Should return a number when returned function is called", () => {
      const mockedMultiply = jest.fn(multiply);

      const returnedFunction = mockedMultiply(2);
      const result = returnedFunction(3);
      const returnType = typeof result;

      expect(returnType).toBe("number");
    });

    it("Should return return the smallest number of bills", () => {
      const mockedMultiply = jest.fn(multiply);

      const result1 = mockedMultiply(6, 8);
      const returnedFunction1 = mockedMultiply(2);
      const result2 = returnedFunction1(23);
      const result3 = mockedMultiply(0, 0);
      const returnedFunction2 = mockedMultiply(0);
      const result4 = returnedFunction2(0);

      expect(result1).toEqual(48);
      expect(result2).toEqual(46);
      expect(result3).toEqual(0);
      expect(result4).toEqual(0);
    });
  });
});

describe("Exercise 2 - Guessing Game", () => {
  describe("guessingGame()", () => {
    it("Should be defined", () => {
      expect(guessingGame).toBeDefined();
    });

    it("Should return a function", () => {
      const mockedGuessingGame = jest.fn(guessingGame);

      const returnedFunction = mockedGuessingGame(3, 4);
      const type = typeof returnedFunction;

      expect(type).toBe("function");
    });
  });

  describe("guess()", () => {
    it("Should return a string", () => {
      const mockedGuessingGame = jest.fn(guessingGame);
      const guess = mockedGuessingGame(2, 3);

      const result = guess(2);
      const type = typeof result;

      expect(type).toBe("string");
    });

    it("Should return correct result for higher guess", () => {
      const mockedGuessingGame = jest.fn(guessingGame);
      const guess = mockedGuessingGame(5, 5);

      const result = guess(8);

      expect(result).toBe('"8" is too high, go lower!');
    });

    it("Should return correct result for lower guess", () => {
      const mockedGuessingGame = jest.fn(guessingGame);
      const guess = mockedGuessingGame(1, 5);

      const result = guess(2);

      expect(result).toBe('"2" is too low, go higher!');
    });

    it("Should return correct result for correct guess", () => {
      const mockedGuessingGame = jest.fn(guessingGame);
      const guess = mockedGuessingGame(2, 5);

      const result = guess(5);

      expect(result).toBe(
        '"5" is the correct number! You have 1 guesses left.'
      );
    });

    it("Should return no more guesses for too much incorrect guesses", () => {
      const mockedGuessingGame = jest.fn(guessingGame);
      const guess = mockedGuessingGame(1, 5);

      guess(2);
      const noMoreGuessesResult = guess(2);

      expect(noMoreGuessesResult).toBe("No more guesses left.");
    });

    it("Should return game is over result for guess after a correct guess", () => {
      const mockedGuessingGame = jest.fn(guessingGame);
      const guess = mockedGuessingGame(1, 5);

      const result = guess(5);
      const gameIsOverResult = guess(5);

      expect(result).toBe(
        '"5" is the correct number! You have 0 guesses left.'
      );
      expect(gameIsOverResult).toBe("This game is over!");
    });

    it("Should return correct result for full game", () => {
      const mockedGuessingGame = jest.fn(guessingGame);
      const guess = mockedGuessingGame(3, 5);

      const tooLowResult = guess(4);
      const tooHighResult = guess(6);
      const correctResult = guess(5);
      const gameIsOver = guess(5);

      expect(tooLowResult).toBe('"4" is too low, go higher!');
      expect(tooHighResult).toBe('"6" is too high, go lower!');
      expect(correctResult).toBe(
        '"5" is the correct number! You have 0 guesses left.'
      );
      expect(gameIsOver).toBe("This game is over!");
    });
  });

  describe("Exercise 3 - Human Body", () => {
    describe("Human", () => {
      it("Should be defined", () => {
        expect(Human).toBeDefined();
      });

      it("Should return an instance", () => {
        const MockedHuman = jest.fn(Human);

        const instance = new MockedHuman();

        expect(instance).toBeInstanceOf(MockedHuman);
      });

      it("Should return instance with correct properties", () => {
        const MockedHuman = jest.fn(Human);

        const human = new MockedHuman();

        expect(human).toHaveProperty("head");
        expect(human).toHaveProperty("arms");
        expect(human).toHaveProperty("legs");
        expect(human).toHaveProperty("walk");
        expect(human).toHaveProperty("punch");
      });

      describe("walk()", () => {
        it("Should return correct result", () => {
          const MockedHuman = jest.fn(Human);

          const human = new MockedHuman();

          expect(human.walk()).toBe("I am walking");
        });
      });

      describe("punch()", () => {
        it("Should return correct result", () => {
          const MockedHuman = jest.fn(Human);

          const human = new MockedHuman();

          expect(human.punch()).toBe("I am punching");
        });
      });
    });

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

      it("Should return instance with correct properties", () => {
        const MockedPerson = jest.fn(Person);

        const john = new MockedPerson("John", 23);

        expect(john).toHaveProperty("name");
        expect(john).toHaveProperty("age");
        expect(john).toHaveProperty("head");
        expect(john).toHaveProperty("arms");
        expect(john).toHaveProperty("legs");
        expect(john).toHaveProperty("walk");
        expect(john).toHaveProperty("punch");
        expect(john).toHaveProperty("startFighting");
        expect(john.head).toEqual(1);
        expect(john.arms).toEqual(2);
        expect(john.legs).toEqual(2);
      });

      describe("startFighting()", () => {
        const MockedPerson = jest.fn(Person);

        const john = new MockedPerson("John", 23);

        expect(john.startFighting()).toBe("I am walking and I am punching");
      });
    });
  });

  describe("Exercise 4 - Car", () => {
    describe("Car", () => {
      it("Should be defined", () => {
        expect(Car).toBeDefined();
      });

      it("Should return an instance", () => {
        const MockedCar = jest.fn(Car);

        const instance = new MockedCar(100, "gas");

        expect(instance).toBeInstanceOf(MockedCar);
      });

      it("Should have correct properties", () => {
        const MockedCar = jest.fn(Car);

        const instance = new MockedCar(100, "gas");

        expect(instance).toHaveProperty("tank");
        expect(instance).toHaveProperty("fuel");
        expect(instance.tank).toBe(100);
        expect(instance.fuel).toBe("gas");
      });

      it("Should have functions attached to prototype", () => {
        const instance = new Car(100, "gas");

        const prototype = Object.getPrototypeOf(instance);

        expect(prototype).toHaveProperty("drive");
        expect(prototype).toHaveProperty("stop");
      });

      it("Should have functions attached to prototype", () => {
        const instance = new Car(100, "gas");

        expect(instance.drive()).toBe("I am driving!");
        expect(instance.stop()).toBe("I am stopping!");
      });
    });
  });

  describe("Exercise 5 - Create Husky", () => {
    describe("Husky", () => {
      it("Should be defined", () => {
        expect(Husky).toBeDefined();
      });

      it("Should accept string as first parameter", () => {
        expect(() => {
          new Husky(123, 123);
        }).toThrow();

        expect(() => {
          new Husky(false, 123);
        }).toThrow();

        expect(() => {
          new Husky([], 123);
        }).toThrow();

        expect(() => {
          new Husky({}, 123);
        }).toThrow();

        expect(() => {
          new Husky("Maya", 123);
        }).not.toThrow();
      });

      it("Should accept number as second parameter", () => {
        expect(() => {
          new Husky("Maya", "test");
        }).toThrow();

        expect(() => {
          new Husky("Maya", false);
        }).toThrow();

        expect(() => {
          new Husky("Maya", []);
        }).toThrow();

        expect(() => {
          new Husky("Maya", {});
        }).toThrow();

        expect(() => {
          new Husky("Maya", 123);
        }).not.toThrow();
      });

      it("Should return an instance", () => {
        const MockedHusky = jest.fn(Husky);

        const instance = new MockedHusky("Maya", 2);

        expect(instance).toBeInstanceOf(MockedHusky);
      });

      it("Should inherit from Dog", () => {
        const prototype = Object.getPrototypeOf(Husky);

        const isInheritFromDog = prototype.name === "Dog";

        expect(isInheritFromDog).toBeTruthy();
      });

      it("Should inherit from Animal", () => {
        const huskyPrototype = Object.getPrototypeOf(Husky);

        const dogPrototype = Object.getPrototypeOf(huskyPrototype);
        const isInheritFromAnimal = dogPrototype.name === "Animal";

        expect(isInheritFromAnimal).toBeTruthy();
      });

      it("Should have correct properties", () => {
        const MockedHusky = jest.fn(Husky);
        const maya = new MockedHusky("Maya", 2);

        expect(maya).toHaveProperty("name");
        expect(maya).toHaveProperty("age");
        expect(maya).toHaveProperty("fur");
        expect(maya).toHaveProperty("startBarking");
        expect(maya).toHaveProperty("head");
        expect(maya).toHaveProperty("arms");
        expect(maya).toHaveProperty("legs");
      });

      it("Should have correct property values", () => {
        const MockedHusky = jest.fn(Husky);
        const maya = new MockedHusky("Maya", 2);

        expect(maya.name).toBe("Maya");
        expect(maya.age).toBe(2);
        expect(maya.fur).toBe("black and white");
        expect(maya.head).toBe(1);
        expect(maya.arms).toBe(0);
        expect(maya.legs).toBe(4);
      });

      describe("startBarking()", () => {
        it("Should be a function", () => {
          const MockedHusky = jest.fn(Husky);
          const maya = new MockedHusky("Maya", 2);

          expect(typeof maya.startBarking).toBe("function");
        });

        it("Should be return woof", () => {
          const MockedHusky = jest.fn(Husky);
          const maya = new MockedHusky("Maya", 2);

          expect(maya.startBarking()).toBe("Woof!");
        });

        it("Should be with prototype Dog", () => {
          const Dog = Object.getPrototypeOf(Husky);
          const dog = new Dog("black and white");

          expect(dog).not.toHaveProperty("name");
          expect(dog).not.toHaveProperty("age");
          expect(dog.startBarking()).toBe("Woof!");
        });
      });
    });
  });
});
