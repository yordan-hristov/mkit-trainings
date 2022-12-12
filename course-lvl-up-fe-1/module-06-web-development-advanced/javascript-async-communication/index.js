/**
 * Exercise 1 - Callbacks
 *
 * @param {string} fileName
 * @param {(error: Error, result: string) => void} cb
 *
 */
function readFile(fileName, cb) {}

/**
 * Exercise 2 - Creating Promises
 *
 * @param {number} n
 * @returns {Promise<{input: number, success: boolean}>}
 *
 */
function isEven(n) {}

/**
 * Exercise 3 - Error Handling With then/catch
 *
 * @param {Promise} promise
 * @param {(result) => void} successHandler
 * @param {(error) => void} errorHandler
 *
 */
function handlePromise(promise, successHandler, errorHandler) {}

/**
 * Exercise 4 - Async Functions
 *
 * @param {number} n
 * @returns {Promise<{input: number, success: boolean}>}
 *
 */
function isEvenAsync(n) {}

/**
 * Exercise 5 - Error Handling With async/await
 *
 * @param {Promise} promise
 * @returns
 *
 */
function handlePromiseAsync(promise) {}

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
