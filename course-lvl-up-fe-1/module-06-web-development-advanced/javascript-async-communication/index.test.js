const {
  readFile,
  isEven,
  handlePromise,
  isEvenAsync,
  handlePromiseAsync,
} = require("./index");

describe("Exercise 1 - Callbacks", () => {
  jest.setTimeout(200);
  jest.retryTimes(0);

  describe("readFile", () => {
    it("Should be defined", () => {
      expect(readFile).toBeDefined();
    });

    describe("cb", () => {
      it("Should be called", (done) => {
        const callback = () => done();

        readFile("test.txt", callback);
      });

      it("Should be called with 2 arguments", (done) => {
        const callback = (...args) => {
          args.length === 2 ? done() : done("Expected 2 arguments");
        };

        readFile("test.txt", callback);
      });

      describe("err", () => {
        it("Should be truthy if fileName is invalid", (done) => {
          const callback = (err, result) => {
            !!err ? done() : done("Error is falsy");
          };

          readFile("non-existing.txt", callback);
        });

        it("Should be falsy if fileName is valid", (done) => {
          const callback = (err, result) => {
            !!err ? done("Error is truthy") : done();
          };

          readFile("test.txt", callback);
        });
      });

      describe("result", () => {
        it("Should be truthy if fileName is valid", (done) => {
          const callback = (err, result) => {
            !!result ? done() : done("Result is falsy");
          };

          readFile("test.txt", callback);
        });

        it("Should be falsy if fileName is invalid", (done) => {
          const callback = (err, result) => {
            !!result ? done("Result is truthy") : done();
          };

          readFile("non-existing.txt", callback);
        });

        it("Should have a correct value", (done) => {
          const expectedTestValue = "Test file";

          const callback = (err, result) => {
            result === expectedTestValue
              ? done()
              : done("Result value is incorrect");
          };

          readFile("test.txt", callback);
        });
      });
    });
  });
});

describe("Exercise 2 - Creating Promises", () => {
  jest.setTimeout(200);
  jest.retryTimes(0);

  describe("isEven", () => {
    it("Should be defined", () => {
      expect(isEven).toBeDefined();
    });

    it("Should not be an async function", () => {
      const constructorName = isEven.constructor.name;
      expect(constructorName).toBe("Function");
      expect(constructorName).not.toBe("AsyncFunction");
    });

    describe("With even input", () => {
      it("Should not throw", (done) => {
        isEven(2)
          .then(() => done())
          .catch(() => done("Threw error"));
      });

      it("Should return a promise", () => {
        const result = isEven(2);

        expect(result).toBeInstanceOf(Promise);
      });

      it("Should return a promise with correct value", async () => {
        const result = await isEven(2);
        const expectedResult = {
          input: 2,
          success: true,
        };

        expect(result).toEqual(expectedResult);
      });
    });

    describe("With odd input", () => {
      it("Should throw", (done) => {
        isEven(1)
          .then((res) => done("Did not throw"))
          .catch((err) => done());
      });
    });
  });
});

describe("Exercise 3 - Error Handling with then/catch", () => {
  jest.setTimeout(200);
  jest.retryTimes(0);

  describe("handlePromise", () => {
    it("Should be defined", () => {
      expect(handlePromise).toBeDefined();
    });

    it("Should not be an async function", () => {
      const constructorName = handlePromise.constructor.name;
      expect(constructorName).toBe("Function");
      expect(constructorName).not.toBe("AsyncFunction");
    });

    it("Should expect 3 arguments", () => {
      const result = handlePromise.length;
      const expectedResult = 3;

      expect(result).toBe(expectedResult);
    });

    describe("successHandler", () => {
      it("Should be called if promise is fulfilled", (done) => {
        const testPromise = new Promise((resolve) => resolve("asd"));
        const testSuccessHandler = () => done();

        handlePromise(testPromise, testSuccessHandler, () => {});
      });

      it("Should be called with correct input", (done) => {
        const resolveValue = "test resolve";
        const testPromise = new Promise((resolve) => resolve(resolveValue));
        const testSuccessHandler = (result) => {
          result === resolveValue
            ? done()
            : done(
                `Was not called with correct value, expected: ${resolveValue}, received: ${result}`
              );
        };

        handlePromise(testPromise, testSuccessHandler, () => {});
      });

      it("Should not be called if promise is unfulfilled", (done) => {
        const testPromise = new Promise((resolve, reject) => {
          reject("reject in successHandler");
        });
        const testSuccessHandler = () => done("Should not be called");

        handlePromise(testPromise, testSuccessHandler, () => done());
      });
    });

    describe("errorHandler", () => {
      it("Should be called if promise is unfulfilled", (done) => {
        const testPromise = new Promise((resolve, reject) =>
          reject("reject in errorHandler")
        );
        const testErrorHandler = () => done();

        handlePromise(testPromise, () => {}, testErrorHandler);
      });

      it("Should be called with correct input", (done) => {
        const rejectValue = "test reject";
        const testPromise = new Promise((resolve, reject) =>
          reject(rejectValue)
        );
        const testErrorHandler = (err) => {
          err === rejectValue
            ? done()
            : done(
                `Was not called with correct value, expected: ${resolveValue}, received: ${result}`
              );
        };

        handlePromise(testPromise, () => {}, testErrorHandler);
      });

      it("Should not be called if promise is fulfilled", (done) => {
        const testPromise = new Promise((resolve, reject) => {
          resolve("asd");
        });
        const errorHandler = () => done("Should not be called");

        handlePromise(testPromise, () => done(), errorHandler);
      });
    });
  });
});

describe("Exercise 4 - Async Functions", () => {
  jest.setTimeout(200);
  jest.retryTimes(0);

  describe("isEvenAsync", () => {
    it("Should be defined", () => {
      expect(isEvenAsync).toBeDefined();
    });

    it("Should be an async function", () => {
      const constructorName = isEvenAsync.constructor.name;

      expect(constructorName).not.toBe("Function");
      expect(constructorName).toBe("AsyncFunction");
    });

    describe("With even input", () => {
      it("Should not throw", (done) => {
        isEvenAsync(2)
          .then(() => done())
          .catch(() => done("Threw error"));
      });

      it("Should return a promise", () => {
        const result = isEvenAsync(2);

        expect(result).toBeInstanceOf(Promise);
      });

      it("Should return a promise with correct value", async () => {
        const result = await isEven(2);
        const expectedResult = {
          input: 2,
          success: true,
        };

        expect(result).toEqual(expectedResult);
      });
    });

    describe("With odd input", () => {
      it("Should throw", (done) => {
        isEvenAsync(1)
          .then((res) => done("Did not throw"))
          .catch((err) => done());
      });
    });
  });
});

describe("Exercise 5 - Error Handling With async/await", () => {
  describe("handlePromiseAsync", () => {
    it("Should be defined", () => {
      expect(handlePromiseAsync).toBeDefined();
    });

    it("Should be an async function", () => {
      const constructorName = handlePromiseAsync.constructor.name;

      expect(constructorName).not.toBe("Function");
      expect(constructorName).toBe("AsyncFunction");
    });

    it("Should expect 1 argument", () => {
      const result = handlePromiseAsync.length;
      const expected = 1;

      expect(result).toBe(expected);
    });

    it("Should return an object with properties data and errorMessage", async () => {
      const testPromise = new Promise((resolve) => resolve("test"));

      const { data, errorMessage } = await handlePromiseAsync(testPromise);

      expect(data).toBeDefined();
      expect(errorMessage).toBeDefined();
    });

    it("Should return a correct value if the promise is fulfilled", async () => {
      const resolveValue = "test";
      const testPromise = new Promise((resolve) => resolve(resolveValue));

      const { data, errorMessage } = await handlePromiseAsync(testPromise);

      expect(data).toBe(resolveValue);
      expect(errorMessage).toBe(null);
    });

    it("Should return a correct value if the promise is unfulfilled", async (done) => {
      const testPromise = new Promise((resolve, reject) => {
        reject("reject in handlePromiseAsync");
      });

      const { data, errorMessage } = await handlePromiseAsync(testPromise);

      expect(data).toBe(null);
      expect(errorMessage).toBe("Error Occurred!");
    });
  });
});
