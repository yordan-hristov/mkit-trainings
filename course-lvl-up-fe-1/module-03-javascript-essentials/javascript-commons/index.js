// Exercise 1 - Generator Functions

/**
 *
 * @param {number[]} array
 * @param {Function} callback
 */
function map(array, callback = () => {}) {}

// Exercise 2 - Array Methods(Map)
function* fibonacci() {}

// Exercise 3 - Array Methods(Reduce)
/**
 * @typeparam {T} the type parameter
 * @param {{ name: string, age: number, voted: boolean }[]} votersList
 */
function potentialVotersResult(votersList) {}

// Exercise 4 - Array methods(Reduce implementation)
/**
 *
 * @typeparam {T} the current value type
 * @typeparam {InitializerT} the initializer type
 * @param {Array<T>} array
 * @param {(currElement: T) => InitializerT} callback
 * @param {InitializerT} initializer
 */
function reduce(array, callback, initializer) {}

// Exercise 5 - Even Average Sum
/**
 * 
 * @param {number[]} array 
 */
function calculateEvenAveragearr {}

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
