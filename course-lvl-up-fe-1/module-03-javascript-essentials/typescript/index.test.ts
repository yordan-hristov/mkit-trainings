// @ts-nocheck
import path from "path";
import { readFileSync } from "fs";
import { find, findInfo } from "ast-parser";
import { parse as babelParse } from "@babel/parser";

import tsconfig from "./index.json";
import { reverseArray } from "./index";

function getNode(code: string) {
  return babelParse(code, {
    sourceType: "module",
    plugins: ["typescript"],
  });
}

const fileToString = readFileSync(path.join(__dirname, "index.ts"), "utf-8");

const allInterfaceDeclaration = find(
  "TSInterfaceDeclaration",
  getNode(fileToString)
);

describe("Exercise 1 - Config", () => {
  it("Should not be an empty object", () => {
    const keys = Object.keys(tsconfig);

    const keysLength = keys.length;

    expect(keysLength).toBeGreaterThan(0);
  });

  describe("compilerOptions", () => {
    it("Should be in tsconfig", () => {
      const { compilerOptions } = tsconfig;

      expect(compilerOptions).not.toBeUndefined();
    });

    it("Should be an object", () => {
      const { compilerOptions } = tsconfig;

      expect(compilerOptions).toBeInstanceOf(Object);
    });

    it("Should have target", () => {
      const { compilerOptions } = tsconfig;
      const { target } = compilerOptions;

      expect(target).not.toBeUndefined();
    });

    it("Should have target value", () => {
      const { compilerOptions } = tsconfig;
      const { target } = compilerOptions;

      expect(target).toBe("ES6");
    });

    it("Should have lib", () => {
      const { compilerOptions } = tsconfig;
      const { lib } = compilerOptions;

      expect(lib).not.toBeUndefined();
    });

    it("Should have lib value", () => {
      const { compilerOptions } = tsconfig;
      const { lib } = compilerOptions;

      expect(lib).toEqual(["dom", "dom.iterable", "esnext"]);
    });

    it("Should have strict", () => {
      const { compilerOptions } = tsconfig;
      const { strict } = compilerOptions;

      expect(strict).not.toBeUndefined();
    });

    it("Should have strict value", () => {
      const { compilerOptions } = tsconfig;
      const { strict } = compilerOptions;

      expect(strict).toBeTruthy();
    });

    it("Should have allowJs", () => {
      const { compilerOptions } = tsconfig;
      const { allowJs } = compilerOptions;

      expect(allowJs).not.toBeUndefined();
    });

    it("Should have allowJs value", () => {
      const { compilerOptions } = tsconfig;
      const { allowJs } = compilerOptions;

      expect(allowJs).toBeTruthy();
    });

    it("Should have forceConsistentCasingInFileNames", () => {
      const { compilerOptions } = tsconfig;
      const { forceConsistentCasingInFileNames } = compilerOptions;

      expect(forceConsistentCasingInFileNames).not.toBeUndefined();
    });

    it("Should have forceConsistentCasingInFileNames value", () => {
      const { compilerOptions } = tsconfig;
      const { forceConsistentCasingInFileNames } = compilerOptions;

      expect(forceConsistentCasingInFileNames).toBeTruthy();
    });

    it("Should have module", () => {
      const { compilerOptions } = tsconfig;
      const { module } = compilerOptions;

      expect(module).not.toBeUndefined();
    });

    it("Should have module value", () => {
      const { compilerOptions } = tsconfig;
      const { module } = compilerOptions;

      expect(module).toBe("CommonJS");
    });

    it("Should have resolveJsonModule", () => {
      const { compilerOptions } = tsconfig;
      const { resolveJsonModule } = compilerOptions;

      expect(resolveJsonModule).not.toBeUndefined();
    });

    it("Should have resolveJsonModule value", () => {
      const { compilerOptions } = tsconfig;
      const { resolveJsonModule } = compilerOptions;

      expect(resolveJsonModule).toBeTruthy();
    });
  });

  it("Should have include", () => {
    const { include } = tsconfig;

    expect(include).not.toBeUndefined();
  });

  it("Should have include value", () => {
    const { include } = tsconfig;

    expect(include).toEqual(["**/*.ts", "**/*.tsx"]);
  });

  it("Should have exclude", () => {
    const { exclude } = tsconfig;

    expect(exclude).not.toBeUndefined();
  });

  it("Should have exclude value", () => {
    const { exclude } = tsconfig;

    expect(exclude).toEqual(["node_modules"]);
  });
});

describe("Exercise 2 - Type John", () => {
  describe("person", () => {
    it("Should be typed", () => {
      const john = find("VariableDeclaration", getNode(fileToString));

      const johnType = john.id.typeAnnotation.string;

      expect(johnType).toBe("John");
    });

    describe("Primitive props", () => {
      it("Should John interface has primitive variables typed correctly", () => {
        const johnInterface = allInterfaceDeclaration?.find(
          (int) => int.id.name === "John"
        );

        const primitiveProperties = johnInterface.body?.reduce((acc, prop) => {
          if (
            prop.key.name === "name" ||
            prop.key.name === "age" ||
            prop.key.name === "wife"
          ) {
            return { ...acc, [prop.key.name]: prop };
          }
          return acc;
        }, {});

        const { name, age, wife } = primitiveProperties;
        const nameType = name.typeAnnotation.string;
        const ageType = age.typeAnnotation.string;
        const wifeType = wife.typeAnnotation.string;

        expect(nameType).toBe("string");
        expect(ageType).toBe("number");
        expect(wifeType).toBe("string");
      });
    });

    describe("Referential props", () => {
      describe("profession", () => {
        const professionInterface = allInterfaceDeclaration?.find(
          (int) => int.id.name === "Profession"
        );

        it("Should be on John interface", () => {
          const johnInterface = allInterfaceDeclaration?.find(
            (int) => int.id.name === "John"
          );

          const profession = johnInterface.body?.find((prop) => {
            return prop.key.name === "profession";
          });

          expect(profession).not.toBeUndefined();
        });

        it("Should have correct name", () => {
          const { name } = professionInterface.id;

          expect(name).toBe("Profession");
        });

        it("Should have typed properties", () => {
          const { body } = professionInterface;

          const { name, sphere } = body?.reduce(
            (acc, prop) => ({ ...acc, [prop.key.name]: prop }),
            {}
          );

          const nameType = name.typeAnnotation.string;
          const sphereType = sphere.typeAnnotation.string;

          expect(nameType).toBe("string");
          expect(sphereType).toBe("string");
        });
      });

      describe("cars", () => {
        const carDeclaration = find(
          "TSTypeAliasDeclaration",
          getNode(fileToString)
        );

        it("Should be on John interface", () => {
          const johnInterface = allInterfaceDeclaration?.find(
            (int) => int.id.name === "John"
          );

          const cars = johnInterface.body?.find((prop) => {
            return prop.key.name === "cars";
          });

          expect(cars).not.toBeUndefined();
        });

        it("Should have correct name", () => {
          const { name } = carDeclaration.id;

          expect(name).toBe("Cars");
        });

        it("Should be with value of Car[]", () => {
          const value = carDeclaration.typeAnnotation.string;

          expect(value).toBe("Car[]");
        });

        describe("Car", () => {
          const carInterface = allInterfaceDeclaration?.find(
            (int) => int.id.name === "Car"
          );

          it("Should be an interface", () => {
            expect(carInterface).not.toBeUndefined();
          });

          it("Should have correct properties", () => {
            const { model, color } = carInterface.body?.reduce(
              (acc, prop) => ({ ...acc, [prop.key.name]: prop }),
              {}
            );

            const modelType = model.typeAnnotation.string;
            const colorType = color.typeAnnotation.string;

            expect(modelType).toBe("string");
            expect(colorType).toBe("string");
          });
        });
      });
    });
  });
});

describe("Exercise 3 - Reverse Array Generic Function", () => {
  describe("reverse()", () => {
    const allFunctionDeclarations = find(
      "FunctionDeclaration",
      getNode(fileToString)
    );

    it("Should be defined", () => {
      expect(reverseArray).toBeDefined();
    });

    it("Should be a generic", () => {
      const genericType = allFunctionDeclarations.typeParameters.string;

      expect(genericType).toBe("<T extends []>");
    });

    it("Should assign generic to arr", () => {
      const [param] = allFunctionDeclarations.typeParameters.params;

      const typeName = param.name;

      expect(typeName).toBe("T");
    });

    it("Should return an array", () => {
      const mockedReversedArray = jest.fn(reverseArray);

      const returnValue = mockedReversedArray([1, 2, 3]);

      expect(returnValue).toBeInstanceOf(Array);
    });

    it("Should reverse the passes array", () => {
      const mockedReversedArray = jest.fn(reverseArray);

      const result1 = mockedReversedArray([1, 2, 3]);
      const result2 = mockedReversedArray(["John", "Peter"]);
      const result3 = mockedReversedArray([1, "John", 3]);

      expect(result1).toEqual([3, 2, 1]);
      expect(result2).toEqual(["Peter", "John"]);
      expect(result3).toEqual([3, "John", 1]);
    });
  });
});

describe("Exercise - Create Cat from Animal", () => {
  describe("Animal", () => {
    const animalInterface = allInterfaceDeclaration.find(
      (int) => int.id.name === "Animal"
    );

    it("Should be defined", () => {
      expect(animalInterface).not.toBeUndefined();
    });

    it("Should have 3 correct props", () => {
      const { type, arms, legs } = animalInterface.body?.reduce(
        (acc, curr) => ({ ...acc, [curr.key.name]: curr }),
        {}
      );

      expect(type).not.toBeUndefined();
      expect(arms).not.toBeUndefined();
      expect(legs).not.toBeUndefined();

      const typePropType = type.typeAnnotation.string;
      const armsPropType = arms.typeAnnotation.string;
      const legsPropType = legs.typeAnnotation.string;

      expect(typePropType).toBe(`"mammal" | "bird" | "reptiles" | "fish"`);
      expect(armsPropType).toBe("number");
      expect(legsPropType).toBe("number");
    });
  });

  describe("Cat", () => {
    const catInterface = allInterfaceDeclaration.find(
      (int) => int.id.name === "Cat"
    );

    it("Should be defined", () => {
      expect(catInterface).not.toBeUndefined();
    });

    it("Should extend Animal", () => {
      const [extendedInterface] = catInterface.extends;
      expect(extendedInterface.string).toBe("Animal");
    });

    it("Should have 1 correct props", () => {
      const { fur } = catInterface.body?.reduce(
        (acc, curr) => ({ ...acc, [curr.key.name]: curr }),
        {}
      );

      expect(fur).not.toBeUndefined();

      const furPropType = fur.typeAnnotation.string;

      expect(furPropType).toBe("string");
    });
  });
});

describe("Exercise #5 - Mammal", () => {
  const mammalInterface = allInterfaceDeclaration.find(
    (int) => int.id.name === "Mammal"
  );

  it("Should be defined", () => {
    expect(mammalInterface).not.toBeUndefined();
  });

  describe("props", () => {
    const { legs, arms, wings } = mammalInterface.body?.reduce(
      (acc, curr) => ({ ...acc, [curr.key.name]: curr }),
      {}
    );

    it("Should have correct props", () => {
      expect(legs).not.toBeUndefined();
      expect(arms).not.toBeUndefined();
      expect(wings).not.toBeUndefined();
    });

    it("Should have wings and arms optional", () => {
      const armsOptional = arms.optional;
      const wingsOptional = wings.optional;

      expect(armsOptional).toBeTruthy();
      expect(wingsOptional).toBeTruthy();
    });

    it("Should not have legs optional", () => {
      const legsOptional = legs.optional;

      expect(legsOptional).toBeFalsy();
    });
  });
});
