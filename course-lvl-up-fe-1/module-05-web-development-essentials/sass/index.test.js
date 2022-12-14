const fs = require('fs');
const sass = require('sass');

const { transpileFile } = require("./solution");

describe("Exercise 1 - Transpile File", () => {
  describe("transpileFile()", () => {
    it("Should be defined", () => {
      expect(transpileFile).toBeDefined();
    });

    it("Should return result of the correct type", async () => {
        const expectedResult = 'h1 {\n  color: #ffffff;\n}\nh1 .test {\n  color: #000000;\n}'
        await expect(transpileFile()).resolves.toBe(expectedResult);
    })
  });
});

describe("Exercise 2 - Apply Styles", () => {
  describe("transpileFile()", () => {
    let transpiledFile = '';
    beforeEach(async () => {
      try{
        const resultFile = await sass.compileAsync('course-lvl-up-fe-1/module-05-web-development-essentials/sass/exercise_2.scss');
        transpiledFile =  resultFile.css
      }
      catch(error){
        transpiledFile = error
      }
    });

    it("Should exercise_2.scss exists", () => {
      expect(transpiledFile.message).not.toBeTruthy()
      expect(typeof transpiledFile).not.toBe('object');
      expect(typeof transpiledFile).not.toBe('undefined');
      expect(typeof transpiledFile).not.toBe('boolean');
      expect(typeof transpiledFile).not.toBe('number');
      expect(typeof transpiledFile).not.toBe('null');
      expect(typeof transpiledFile).toBe('string');
    })

    it("Should use scss syntax", () => {
      const file = fs.readFileSync('course-lvl-up-fe-1/module-05-web-development-essentials/sass/exercise_2.scss');
      const isTheSameFile = file.toString().replace(/\s/g, '') === transpiledFile.replace(/\s/g, '');
      expect(isTheSameFile).toBeFalsy();
    })

    it("Should have styles for class wrapper", () => {
      const checkIfStringExists = transpiledFile.replace(/\s/g, '').lastIndexOf('.wrapper');
      expect(checkIfStringExists).toBeGreaterThanOrEqual(0)
    })

    it("Should have set border radius of class wrapper to 10px", () => {
      const checkIfStringExists = transpiledFile.replace(/\s/g, '').lastIndexOf('.wrapper{border-radius:10px;}');
      expect(checkIfStringExists).toBeGreaterThanOrEqual(0)
    })

    it("Should have styles for paragraph with class wrapper", () => {
      const checkIfStringExists = transpiledFile.replace(/\s/g, '').lastIndexOf('.wrapperp');
      expect(checkIfStringExists).toBeGreaterThanOrEqual(0)
    })

    it("Should have set color of text in paragraph with class wrapper to red", () => {
      const checkIfStringExists = transpiledFile.replace(/\s/g, '').lastIndexOf('.wrapperp{color:red;}');
      expect(checkIfStringExists).toBeGreaterThanOrEqual(0)
    })

    it("Should have set background color of container with class wrapper to blue", () => {
      const checkIfStringExists = transpiledFile.replace(/\s/g, '').lastIndexOf('.wrapperdiv{background-color:blue;}');
      expect(checkIfStringExists).toBeGreaterThanOrEqual(0)
    })

    it("Should have styles for class item", () => {
      const checkIfStringExists = transpiledFile.replace(/\s/g, '').lastIndexOf('.item');
      expect(checkIfStringExists).toBeGreaterThanOrEqual(0)
    })
    
    it("Should have set color of class item to cyan", () => {
      const checkIfStringExists = transpiledFile.replace(/\s/g, '').lastIndexOf('color:cyan;');
      expect(checkIfStringExists).toBeGreaterThanOrEqual(0)
    })

    it("Should have set background-color of class item to white", () => {
      const checkIfStringExists = transpiledFile.replace(/\s/g, '').lastIndexOf('background-color:white;');
      expect(checkIfStringExists).toBeGreaterThanOrEqual(0)
    })

    it("Should have set color to element with class item and id special to green", () => {
      const checkIfStringExists = transpiledFile.replace(/\s/g, '').lastIndexOf('.item#special{color:green;}');
      expect(checkIfStringExists).toBeGreaterThanOrEqual(0)
    })
  });
});
