/**
 * Exercise 1 - Generator Functions
 *
 * @param {number[]} arr
 * @param {Function} callback
 * @returns {Array}
 */
function map(arr, callback = () => {}) {}

/**
 * Exercise 2 - Array Methods(Map)
 * 
 * @returns {Generator}
 */
function fibonacci() {}

/**
 * Exercise 3 - Array Methods(Reduce)
 *
 * @typeparam {T} the type parameter
 * @param {{ name: string, age: number, voted: boolean }[]} votersList
 * @returns {{
 * young: number;
 * midAged: number;
 * afterMidAged: number;
 * old: number;
 * }}
 */
function potentialVotersResult(votersList) {}

/**
 * Exercise 4 - Array methods(Reduce implementation)
 *
 * @typeparam {T} the current value type
 * @typeparam {InitializerT} the initializer type
 * @param {Array<T>} arr
 * @param {(currElement: T) => InitializerT} callback
 * @param {InitializerT} initializer
 * @returns {InitializerT}
 */
function reduce(arr, callback, initializer) {}

/**
 * Exercise 5 - Even Average Sum
 *
 * @param {number[]} arr
 * @returns {{
 * sum: number;
 * evenArray: number[];
 * }}
 */
function calculateEvenAverage(arr) {}

/*********************************************
 * DO NOT MODIFY THIS AREA
 *
 * This area is used by the automated tests.
 ********************************************/
module.exports = {
  map,
  fibonacci,
  potentialVotersResult,
  reduce,
  calculateEvenAverage,
};
