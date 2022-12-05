// @ts-nocheck
import path from "path";
import { readFileSync } from "fs";
import { find, findInfo } from "ast-parser";
import { parse as babelParse } from "@babel/parser";

import { Cat, Greeter, Shape, Person, Student, Teacher } from "./index";

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
  shapeDeclaration,
  catDeclaration,
  personDeclaration,
  studentDeclaration,
  teacherDeclaration,
] = allClassDeclarations;

describe("Assessment 1", () => {
  describe("Greeter", () => {
    const allGreeterMethods = findInfo("ClassMethod", greeterDeclaration);

    it("Is defined", () => {
      expect(Greeter).toBeDefined();
    });

    describe("name", () => {
      const nameProperty = findInfo("ClassProperty", greeterDeclaration);

      it("Is defined", () => {
        expect(nameProperty).toBeTruthy();
      });

      it("Is private", () => {
        expect(nameProperty.string).toEqual("private name: string");
      });
    });

    describe("getName", () => {
      const getNameMethod = allGreeterMethods?.find((x) =>
        x.string.includes("getName")
      );

      it("Is defined", () => {
        expect(getNameMethod).toBeTruthy();
      });

      it("Is protected", () => {
        expect(getNameMethod.string).toEqual("protected getName()");
      });

      it("It returns correct value", () => {
        class TestChildClass extends Greeter {
          constructor(name: string) {
            super(name);
          }

          test() {
            return this.getName();
          }
        }

        const testGreeter = new TestChildClass("John");

        expect(testGreeter.test()).toEqual("John");
      });
    });

    describe("greet", () => {
      const greetMethod = allGreeterMethods?.find((x) =>
        x.string.includes("greet")
      );

      it("Is defined", () => {
        expect(greetMethod).toBeTruthy();
      });

      it("Is public", () => {
        expect(["greet()", "public greet()"]).toContain(greetMethod.string);
      });

      it("It returns correct value", () => {
        const testGreeter = new Greeter("John");

        expect(testGreeter.greet()).toEqual("Hello, John");
      });
    });
  });
});

describe("Assessment 2", () => {
  describe("Shape", () => {
    const result = new Shape("sq", 4, 5);

    it("Is defined", () => {
      expect(Shape).toBeDefined();
    });

    it("Is can be instantiated", () => {
      expect(result).toBeInstanceOf(Shape);
    });

    describe("calcPerimeter", () => {
      it("Is defined", () => {
        expect(result.calcPerimeter).toBeDefined();
      });

      it("Returns correct value", () => {
        expect(sq.calcPerimeter()).toBe(20);
      });
    });

    describe("sideLength", () => {
      it("Is defined", () => {
        expect(result.sideLength).toBeDefined();
      });

      it("Returns correct value", () => {
        expect(result.sideLength).toBe(5);
      });
    });

    describe("sides", () => {
      it("Is defined", () => {
        expect(result.sides).toBeDefined();
      });

      it("Returns correct value", () => {
        expect(result.sides).toEqual(4);
      });
    });

    describe("name", () => {
      it("Is defined", () => {
        expect(result.name).toBeDefined();
      });

      it("Returns correct value", () => {
        expect(result.name).toEqual("sq");
      });
    });
  });
});

describe("Assessment 3", () => {
  describe("Cat", () => {
    const allCatMethods = findInfo("ClassMethod", catDeclaration);
    const allCatProperties = findInfo("ClassProperty", catDeclaration);

    it("Is defined", () => {
      expect(Cat).toBeDefined();
    });

    describe("mood", () => {
      const moodProperty = allCatProperties?.find((x) =>
        x.string.includes("mood")
      );

      it("Is defined", () => {
        expect(moodProperty).toBeTruthy();
      });

      it("Is private", () => {
        expect(moodProperty.string).toEqual("private mood: number");
      });
    });

    describe("hungry", () => {
      const hungryProperty = allCatProperties?.find((x) =>
        x.string.includes("hungry")
      );

      it("Is defined", () => {
        expect(hungryProperty).toBeTruthy();
      });

      it("Is private", () => {
        expect(hungryProperty.string).toEqual("private hungry: number");
      });
    });

    describe("energy", () => {
      const energyProperty = allCatProperties?.find((x) =>
        x.string.includes("energy")
      );

      it("Is defined", () => {
        expect(energyProperty).toBeTruthy();
      });

      it("Is private", () => {
        expect(energyProperty.string).toEqual("private energy: number");
      });
    });

    describe("makeSound", () => {
      const makeSoundMethod = allCatMethods?.find((x) =>
        x.string.includes("makeSound")
      );

      it("Is defined", () => {
        expect(makeSoundMethod).toBeTruthy();
      });

      it("Is private", () => {
        expect(makeSoundMethod.string).toEqual("private makeSound()");
      });

      it("Return correct value", () => {
        const testCat = new Cat(5, 0, 3);
        expect(testCat.makeSound()).toEqual("Meow");
      });
    });

    describe("sleep", () => {
      const sleepMethod = allCatMethods?.find((x) =>
        x.string.includes("sleep")
      );

      it("Is defined", () => {
        expect(sleepMethod).toBeDefined();
      });

      it("Is public", () => {
        expect(["sleep()", "public sleep()"]).toContain(sleepMethod.string);
      });

      it("Increments energy and hungry by 1", () => {
        const testCat = new Cat(5, 0, 3);

        expect(testCat.energy).toEqual(3);
        expect(testCat.hungry).toEqual(0);

        testCat.sleep();

        expect(testCat.energy).toEqual(4);
        expect(testCat.hungry).toEqual(1);
      });

      it("Does not call makeSound", () => {
        const testCat = new Cat(5, 0, 3);
        const makeSoundSpy = jest.spyOn(testCat, "makeSound");
        testCat.sleep();
        expect(makeSoundSpy).not.toHaveBeenCalled();
      });
    });

    describe("play", () => {
      const playMethod = allCatMethods?.find((x) => x.string.includes("play"));

      it("Is defined", () => {
        expect(playMethod).toBeTruthy();
      });

      it("Is public", () => {
        expect(["play()", "public play()"]).toContain(playMethod.string);
      });

      it("Increments mood by 1 and decrements energy by 1", () => {
        const testCat = new Cat(5, 0, 3);

        expect(testCat.mood).toEqual(5);
        expect(testCat.energy).toEqual(3);

        testCat.play();

        expect(testCat.mood).toEqual(6);
        expect(testCat.energy).toEqual(2);
      });

      it("Calls makeSound", () => {
        const testCat = new Cat(5, 0, 3);
        const spyMakeSound = jest.spyOn(testCat, "makeSound");

        testCat.play();

        expect(spyMakeSound).toHaveBeenCalledTimes(1);
      });
    });

    describe("feed", () => {
      const feedMethod = allCatMethods?.find((x) => x.string.includes("feed"));

      it("Is defined", () => {
        expect(feedMethod).toBeTruthy();
      });

      it("Is public", () => {
        expect(["feed()", "public feed()"]).toContain(feedMethod.string);
      });

      it("Decrements hungry by 1 and increments mood by 1", () => {
        const testCat = new Cat(5, 2, 3);

        expect(testCat.hungry).toEqual(2);
        expect(testCat.mood).toEqual(5);

        testCat.feed();

        expect(testCat.hungry).toEqual(1);
        expect(testCat.mood).toEqual(6);
      });

      it("Calls makeSound", () => {
        const testCat = new Cat(5, 0, 3);
        const spyMakeSound = jest.spyOn(testCat, "makeSound");

        testCat.feed();

        expect(spyMakeSound).toHaveBeenCalledTimes(1);
      });
    });
  });
});

describe("Assessment 4", () => {
  describe("Person", () => {
    const allPersonProperties = findInfo("ClassProperty", personDeclaration);

    it("Is defined", () => {
      expect(Person).toBeDefined();
    });

    it("Is abstract", () => {
      expect(personDeclaration.abstract).toBe(true);
    });

    describe("firstName", () => {
      const firstNameProperty = allPersonProperties?.find((x) =>
        x.string.includes("firstName")
      );

      it("Is defined", () => {
        expect(firstNameProperty).toBeTruthy();
      });

      it("Is protected", () => {
        expect(firstNameProperty.string).toEqual("protected firstName: string");
      });
    });

    describe("lastName", () => {
      const lastNameProperty = allPersonProperties?.find((x) =>
        x.string.includes("lastName")
      );

      it("Is defined", () => {
        expect(lastNameProperty).toBeDefined();
      });

      it("Is protected", () => {
        expect(lastNameProperty.string).toEqual("protected lastName: string");
      });
    });
  });

  describe("Student", () => {
    it("Is defined", () => {
      expect(Student).toBeDefined();
    });

    it("Implements IStudent", () => {
      expect(studentDeclaration.implements[0].string).toEqual("IStudent");
    });

    it("Is derived from class Person", () => {
      expect(studentDeclaration.superClass.string).toEqual("Person");
    });

    describe("grade", () => {
      it("Is defined", () => {
        const testStudent = new Student("John", "Doe", 6);
        expect(testStudent.grade).toBeDefined();
      });
    });

    describe("greet", () => {
      it("Is defined", () => {
        const testStudent = new Student("John", "Doe", 6);
        expect(testStudent.greet).toBeDefined();
      });

      it("Returns correct value", () => {
        const testStudent = new Student("John", "Doe", 6);
        expect(testStudent.greet()).toEqual("Hello, I'm John Doe");
      });
    });

    describe("displayGrade", () => {
      it("Is defined", () => {
        const testStudent = new Student("John", "Doe", 5);
        expect(testStudent.displayGrade).toBeDefined();
      });

      it("Returns correct value", () => {
        const testStudent = new Student("John", "Doe", 5);
        expect(testStudent.displayGrade()).toEqual("Grade: 5");
      });
    });
  });

  describe("Teacher", () => {
    it("Is defined", () => {
      expect(Teacher).toBeDefined();
    });

    it("Implements ITeacher", () => {
      expect(teacherDeclaration.implements[0].string).toEqual("ITeacher");
    });

    it("Is derived from class Person", () => {
      expect(teacherDeclaration.superClass.string).toEqual("Person");
    });

    describe("subject", () => {
      it("Is defined", () => {
        const testTeacher = new Teacher("Jane", "Doe", "history");
        expect(testTeacher.subject).toBeDefined();
      });
    });

    describe("greet", () => {
      it("Is defined", () => {
        const testTeacher = new Teacher("Jane", "Doe", "history");
        expect(testTeacher.greet).toBeDefined();
      });

      it("Returns correct value", () => {
        const testTeacher = new Teacher("Jane", "Doe", "history");
        expect(testTeacher.greet()).toEqual("Hello, I'm Mrs. Doe");
      });
    });

    describe("displaySubject", () => {
      it("Is defined", () => {
        const testTeacher = new Teacher("Jane", "Doe", "history");
        expect(testTeacher.displaySubject).toBeDefined();
      });

      it("Returns correct value", () => {
        const testTeacher = new Teacher("Jane", "Doe", "history");
        expect(testTeacher.displaySubject()).toEqual("Subject: history");
      });
    });
  });
});
