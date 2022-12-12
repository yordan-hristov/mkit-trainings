const fs = require("fs");
const path = require("path");

/**
 * Exercise 1 - Callbacks
 *
 * @param {string} fileName
 * @param {(error: Error, result: string) => void} cb
 *
 */
function readFile(fileName, cb) {
  fs.readFile(
    path.join(__dirname, "_resources", fileName),
    "utf-8",
    (err, result) => {
      cb(err, result);
    }
  );
}

/**
 * Exercise 2 - Creating Promises
 *
 * @param {number} n
 * @returns {Promise<{input: number, success: boolean}>}
 *
 */
function isEven(n) {
  return new Promise((resolve) => {
    if (n % 2 === 0) {
      resolve({
        input: n,
        success: true,
      });
    } else {
      throw new Error();
    }
  });
}

/**
 * Exercise 3 - Error Handling With then/catch
 *
 * @param {Promise} promise
 * @param {(result) => void} successHandler
 * @param {(error) => void} errorHandler
 *
 */
function handlePromise(promise, successHandler, errorHandler) {
  promise
    .then((result) => successHandler(result))
    .catch((err) => errorHandler(err));
}

/**
 * Exercise 4 - Async Functions
 *
 * @param {number} n
 * @returns {Promise<{input: number, success: boolean}>}
 *
 */
async function isEvenAsync(n) {
  if (n % 2 === 0) {
    return {
      input: n,
      success: true,
    };
  } else {
    throw new Error();
  }
}

/**
 * Exercise 5 - Error Handling With async/await
 *
 * @param {Promise} promise
 * @returns
 *
 */
async function handlePromiseAsync(promise) {
  try {
    const result = await promise;
    return {
      data: result,
      errorMessage: null,
    };
  } catch {
    return {
      data: null,
      errorMessage: "Error Occurred!",
    };
  }
}

/*********************************************
 * DO NOT MODIFY THIS AREA
 *
 * This area is used by the automated tests.
 ********************************************/

module.exports = {
  readFile,
  isEven,
  handlePromise,
  isEvenAsync,
  handlePromiseAsync,
};
