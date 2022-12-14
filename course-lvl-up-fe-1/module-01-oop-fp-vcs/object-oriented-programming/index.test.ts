// @ts-nocheck
import path from "path";
import { readFileSync } from "fs";
import { find, findInfo } from "ast-parser";
import { parse as babelParse } from "@babel/parser";

import {
  Cat,
  Greeter,
  Shape,
  Person,
  Student,
  Teacher,
  PayPalProvider,
  StripeProvider,
  Store,
} from "./index";
import { stripeApi, paypalApi } from "./_resources/_api";

function getNode(code) {
  return babelParse(code, {
    sourceType: "module",
    plugins: ["classProperties", "typescript"],
  });
}

const fileToString = readFileSync(path.join(__dirname, "index.ts"), "utf-8");

const allClassDeclarations = find("ClassDeclaration", getNode(fileToString));

const [
  greeterDeclaration,
  shapeDeclaration, // unused
  catDeclaration,
  personDeclaration,
  studentDeclaration,
  teacherDeclaration,
  storeDeclaration,
  stripeProviderDeclaration,
  paypalProviderDeclaration,
] = allClassDeclarations;

describe("Exercise 1 - Access Modifiers", () => {
  describe("Greeter", () => {
    const allGreeterMethods = findInfo("ClassMethod", greeterDeclaration);

    it("Should be defined", () => {
      expect(Greeter).toBeDefined();
    });

    describe("name", () => {
      const nameProperty = findInfo("ClassProperty", greeterDeclaration);

      it("Should be defined", () => {
        expect(nameProperty).toBeTruthy();
      });

      it("Should be private", () => {
        expect(nameProperty.string).toEqual("private name: string");
      });
    });

    describe("getName", () => {
      const getNameMethod = allGreeterMethods?.find((x) =>
        x.string.includes("getName")
      );

      it("Should be defined", () => {
        expect(getNameMethod).toBeTruthy();
      });

      it("Should be protected", () => {
        expect(getNameMethod.string).toEqual("protected getName()");
      });

      it("Should return correct value", () => {
        class TestChildClass extends Greeter {
          constructor(name: string) {
            super(name);
          }

          test() {
            return this.getName();
          }
        }

        const testGreeter = new TestChildClass("John");
        const result = testGreeter.test();

        expect(result).toEqual("John");
      });
    });

    describe("greet", () => {
      const greetMethod = allGreeterMethods?.find((x) =>
        x.string.includes("greet")
      );

      it("Should be defined", () => {
        expect(greetMethod).toBeTruthy();
      });

      it("Should be public", () => {
        expect(["greet()", "public greet()"]).toContain(greetMethod.string);
      });

      it("Should return correct value", () => {
        const testGreeter = new Greeter("John");

        const result = testGreeter.greet();

        expect(result).toEqual("Hello, John");
      });
    });
  });
});

describe("Exercise 2 - Constructor", () => {
  describe("Shape", () => {
    const result = new Shape("sq", 4, 5);

    it("Should be defined", () => {
      expect(Shape).toBeDefined();
    });

    it("Should be able to be instantiated", () => {
      expect(result).toBeInstanceOf(Shape);
    });

    describe("calcPerimeter", () => {
      it("Should be defined", () => {
        expect(result.calcPerimeter).toBeDefined();
      });

      it("Should return correct value", () => {
        expect(result.calcPerimeter()).toBe(20);
      });
    });

    describe("sideLength", () => {
      it("Should be defined", () => {
        expect(result.sideLength).toBeDefined();
      });

      it("Should return correct value", () => {
        expect(result.sideLength).toBe(5);
      });
    });

    describe("sides", () => {
      it("Should be defined", () => {
        expect(result.sides).toBeDefined();
      });

      it("Should return correct value", () => {
        expect(result.sides).toEqual(4);
      });
    });

    describe("name", () => {
      it("Should be defined", () => {
        expect(result.name).toBeDefined();
      });

      it("Should return correct value", () => {
        expect(result.name).toEqual("sq");
      });
    });
  });
});

describe("Exercise 3 - Encapsulation And Abstraction", () => {
  describe("Cat", () => {
    const allCatMethods = findInfo("ClassMethod", catDeclaration);
    const allCatProperties = findInfo("ClassProperty", catDeclaration);

    it("Should be defined", () => {
      expect(Cat).toBeDefined();
    });

    describe("mood", () => {
      const moodProperty = allCatProperties?.find((x) =>
        x.string.includes("mood")
      );

      it("Should be defined", () => {
        expect(moodProperty).toBeTruthy();
      });

      it("Should be private", () => {
        expect(moodProperty.string).toEqual("private mood: number");
      });
    });

    describe("hungry", () => {
      const hungryProperty = allCatProperties?.find((x) =>
        x.string.includes("hungry")
      );

      it("Should be defined", () => {
        expect(hungryProperty).toBeTruthy();
      });

      it("Should be private", () => {
        expect(hungryProperty.string).toEqual("private hungry: number");
      });
    });

    describe("energy", () => {
      const energyProperty = allCatProperties?.find((x) =>
        x.string.includes("energy")
      );

      it("Should be defined", () => {
        expect(energyProperty).toBeTruthy();
      });

      it("Should be private", () => {
        expect(energyProperty.string).toEqual("private energy: number");
      });
    });

    describe("makeSound", () => {
      const makeSoundMethod = allCatMethods?.find((x) =>
        x.string.includes("makeSound")
      );

      it("Should be defined", () => {
        expect(makeSoundMethod).toBeTruthy();
      });

      it("Should be private", () => {
        expect(makeSoundMethod.string).toEqual("private makeSound()");
      });

      it("Should return correct value", () => {
        const testCat = new Cat(5, 0, 3);

        const result = testCat.makeSound();

        expect(result).toEqual("Meow");
      });
    });

    describe("sleep", () => {
      const sleepMethod = allCatMethods?.find((x) =>
        x.string.includes("sleep")
      );

      it("Should be defined", () => {
        expect(sleepMethod).toBeDefined();
      });

      it("Should be public", () => {
        expect(["sleep()", "public sleep()"]).toContain(sleepMethod.string);
      });

      it("Should increment energy and hungry by 1", () => {
        const testCat = new Cat(5, 0, 3);

        expect(testCat.energy).toEqual(3);
        expect(testCat.hungry).toEqual(0);

        testCat.sleep();

        expect(testCat.energy).toEqual(4);
        expect(testCat.hungry).toEqual(1);
      });

      it("Should not call makeSound", () => {
        const testCat = new Cat(5, 0, 3);
        const makeSoundSpy = jest.spyOn(testCat, "makeSound");

        testCat.sleep();

        expect(makeSoundSpy).not.toHaveBeenCalled();
      });
    });

    describe("play", () => {
      const playMethod = allCatMethods?.find((x) => x.string.includes("play"));

      it("Should be defined", () => {
        expect(playMethod).toBeTruthy();
      });

      it("Should be public", () => {
        expect(["play()", "public play()"]).toContain(playMethod.string);
      });

      it("Should increments mood by 1 and decrements energy by 1", () => {
        const testCat = new Cat(5, 0, 3);

        expect(testCat.mood).toEqual(5);
        expect(testCat.energy).toEqual(3);

        testCat.play();

        expect(testCat.mood).toEqual(6);
        expect(testCat.energy).toEqual(2);
      });

      it("Should call makeSound", () => {
        const testCat = new Cat(5, 0, 3);
        const spyMakeSound = jest.spyOn(testCat, "makeSound");

        testCat.play();

        expect(spyMakeSound).toHaveBeenCalledTimes(1);
      });
    });

    describe("feed", () => {
      const feedMethod = allCatMethods?.find((x) => x.string.includes("feed"));

      it("Should be defined", () => {
        expect(feedMethod).toBeTruthy();
      });

      it("Should be public", () => {
        expect(["feed()", "public feed()"]).toContain(feedMethod.string);
      });

      it("Should decrements hungry by 1 and increments mood by 1", () => {
        const testCat = new Cat(5, 2, 3);

        expect(testCat.hungry).toEqual(2);
        expect(testCat.mood).toEqual(5);

        testCat.feed();

        expect(testCat.hungry).toEqual(1);
        expect(testCat.mood).toEqual(6);
      });

      it("Should call makeSound", () => {
        const testCat = new Cat(5, 0, 3);
        const spyMakeSound = jest.spyOn(testCat, "makeSound");

        testCat.feed();

        expect(spyMakeSound).toHaveBeenCalledTimes(1);
      });
    });
  });
});

describe("Exercise 4 - Inheritance And Polymorphism", () => {
  describe("Person", () => {
    const allPersonProperties = findInfo("ClassProperty", personDeclaration);

    it("Should be defined", () => {
      expect(Person).toBeDefined();
    });

    it("Should be abstract", () => {
      expect(personDeclaration.abstract).toBe(true);
    });

    describe("firstName", () => {
      const firstNameProperty = allPersonProperties?.find((x) =>
        x.string.includes("firstName")
      );

      it("Should be defined", () => {
        expect(firstNameProperty).toBeTruthy();
      });

      it("Should be protected", () => {
        expect(firstNameProperty.string).toEqual("protected firstName: string");
      });
    });

    describe("lastName", () => {
      const lastNameProperty = allPersonProperties?.find((x) =>
        x.string.includes("lastName")
      );

      it("Should be defined", () => {
        expect(lastNameProperty).toBeDefined();
      });

      it("Should be protected", () => {
        expect(lastNameProperty.string).toEqual("protected lastName: string");
      });
    });
  });

  describe("Student", () => {
    it("Should be defined", () => {
      expect(Student).toBeDefined();
    });

    it("Should be derived from class Person", () => {
      expect(studentDeclaration.superClass.string).toEqual("Person");
    });

    it("Should implement IStudent", () => {
      expect(studentDeclaration.implements[0].string).toEqual("IStudent");
    });

    describe("grade", () => {
      it("Should be defined", () => {
        const testStudent = new Student("John", "Doe", 6);

        expect(testStudent.grade).toBeDefined();
      });
    });

    describe("greet", () => {
      it("Should be defined", () => {
        const testStudent = new Student("John", "Doe", 6);
        expect(testStudent.greet).toBeDefined();
      });

      it("Should return correct value", () => {
        const testStudent = new Student("John", "Doe", 6);

        expect(testStudent.greet()).toEqual("Hello, I'm John Doe");
      });
    });

    describe("displayGrade", () => {
      it("Should be defined", () => {
        const testStudent = new Student("John", "Doe", 5);
        expect(testStudent.displayGrade).toBeDefined();
      });

      it("Should return correct value", () => {
        const testStudent = new Student("John", "Doe", 5);

        expect(testStudent.displayGrade()).toEqual("Grade: 5");
      });
    });
  });

  describe("Teacher", () => {
    it("Should be defined", () => {
      expect(Teacher).toBeDefined();
    });

    it("Should implement ITeacher", () => {
      expect(teacherDeclaration.implements[0].string).toEqual("ITeacher");
    });

    it("Should be derived from class Person", () => {
      expect(teacherDeclaration.superClass.string).toEqual("Person");
    });

    describe("subject", () => {
      it("Should be defined", () => {
        const testTeacher = new Teacher("Jane", "Doe", "history");

        expect(testTeacher.subject).toBeDefined();
      });
    });

    describe("greet", () => {
      it("Should be defined", () => {
        const testTeacher = new Teacher("Jane", "Doe", "history");

        expect(testTeacher.greet).toBeDefined();
      });

      it("Should return correct value", () => {
        const testTeacher = new Teacher("Jane", "Doe", "history");

        expect(testTeacher.greet()).toEqual("Hello, I'm Mrs. Doe");
      });
    });

    describe("displaySubject", () => {
      it("Should be defined", () => {
        const testTeacher = new Teacher("Jane", "Doe", "history");
        expect(testTeacher.displaySubject).toBeDefined();
      });

      it("Should return correct value", () => {
        const testTeacher = new Teacher("Jane", "Doe", "history");

        expect(testTeacher.displaySubject()).toEqual("Subject: history");
      });
    });
  });
});

describe("Exercise 5 - Dependency Inversion Principle", () => {
  describe("Store", () => {
    const allStoreMethods = findInfo("ClassMethod", storeDeclaration);

    const constructor = allStoreMethods?.find((x) =>
      x.string.includes("constructor")
    );

    it("Should be defined", () => {
      expect(Store).toBeDefined();
    });

    it("Should accept one argument in the constructor", () => {
      expect(constructor.params.length).toEqual(1);
    });

    it("Argument should be of type PaymentProvider", () => {
      expect(constructor.params[0].typeAnnotation.string).toEqual(
        "PaymentProvider"
      );
    });

    describe("provider", () => {
      const providerProperty = findInfo("ClassProperty", storeDeclaration);

      it("Should be defined", () => {
        expect(providerProperty).toBeTruthy();
      });

      it("Should be private", () => {
        expect(providerProperty.accessibility).toEqual("private");
      });

      it("Should be of type PaymentProvider", () => {
        expect(providerProperty.typeAnnotation.typeAnnotation.string).toEqual(
          "PaymentProvider"
        );
      });
    });

    describe("buySomething", () => {
      const buySomething = allStoreMethods?.find((x) =>
        x.string.includes("buySomething")
      );

      it("Should be defined", () => {
        expect(buySomething).toBeTruthy();
      });

      it("Should accept one argument", () => {
        expect(buySomething.params.length).toEqual(1);
      });

      it("Argument should be of type string", () => {
        expect(buySomething.params[0].typeAnnotation.string).toEqual("string");
      });

      it("Should call this.provider.pay()", () => {
        const mockProvider = {
          pay: (price: string) => true,
        };
        const spyPay = jest.spyOn(mockProvider, "pay");
        const testStore = new Store(mockProvider);

        expect(spyPay).toHaveBeenCalledTimes(0);

        testStore.buySomething(1);

        expect(spyPay).toHaveBeenCalledTimes(1);
      });

      it("Should return correct value with Stripe provider", () => {
        const testProvider = new StripeProvider();
        const testStore = new Store(testProvider);

        const expected = {
          success: true,
          total: 31.4895,
        };
        const result = testStore.buySomething("29.99");

        expect(result).toEqual(expected);
      });

      it("Should return correct value with PayPal provider", () => {
        const testProvider = new PayPalProvider();
        const testStore = new Store(testProvider);

        const expected = {
          success: true,
          total: 29.99,
        };
        const result = testStore.buySomething("29.99");

        expect(result).toEqual(expected);
      });
    });
  });

  describe("StripeProvider", () => {
    it("Should be defined", () => {
      expect(StripeProvider).toBeDefined();
    });

    it("Should implement PaymentProvider", () => {
      expect(stripeProviderDeclaration.implements[0].string).toEqual(
        "PaymentProvider"
      );
    });

    describe("pay", () => {
      it("Should be defined", () => {
        const test = new StripeProvider();

        expect(test.pay).toBeDefined();
      });

      it("Should call createPayment from Stripe api", () => {
        const testStripeProvider = new StripeProvider();
        const createPaymentSpy = jest.spyOn(stripeApi, "createPayment");

        testStripeProvider.pay("10");

        expect(createPaymentSpy).toHaveBeenCalled();
      });

      it("Should return correct value", () => {
        const test = new StripeProvider();

        const expected = {
          success: true,
          total: 10.5,
        };
        const result = test.pay("10");

        expect(result).toEqual(expected);
      });
    });
  });

  describe("PayPalProvider", () => {
    it("Should be defined", () => {
      expect(PayPalProvider).toBeDefined();
    });

    it("Should implements PaymentProvider", () => {
      expect(paypalProviderDeclaration.implements[0].string).toEqual(
        "PaymentProvider"
      );
    });

    describe("pay", () => {
      it("Should be defined", () => {
        const test = new PayPalProvider();

        expect(test.pay).toBeDefined();
      });

      it("Should call makePayment from PayPal api", () => {
        const testPaypalProvider = new PayPalProvider();
        const makePaymentSpy = jest.spyOn(paypalApi, "makePayment");

        testPaypalProvider.pay("10");

        expect(makePaymentSpy).toHaveBeenCalled();
      });

      it("Should return correct value", () => {
        const test = new PayPalProvider();

        const expected = {
          success: true,
          total: 10,
        };
        const result = test.pay("10");

        expect(result).toEqual(expected);
      });
    });
  });
});
