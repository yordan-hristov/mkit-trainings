/**
 * Exercise 1 - Generator Functions
 *
 * @param {number[]} arr
 * @param {Function} callback
 * @returns {Array}
 */
function map(array, cb) {
  if (!Array.isArray(arr)) {
    throw new Error("You must pass an array as a first argument!");
  }

  if (typeof cb !== "function") {
    throw new Error("You must pass a function as a second argument!");
  }

  const newArray = [];

  for (let index = 0; index < array.length; index++) {
    newArray.push(cb(array[index], index, array));
  }

  return newArray;
}

/**
 * Exercise 2 - Array Methods(Map)
 * 
 * @returns {Generator}
 */
function* fibonacci() {
  let current = 0;
  let next = 1;

  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

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
function potentialVotersResult(votersList) {
  if (!Array.isArray(votersList)) {
    throw new Error("Voters list should be an array!");
  }

  return votersList.reduce(
    (acc, curr) => {
      if (!curr.voted) {
        return acc;
      }

      if (curr.age >= 18 && curr.age <= 30) {
        return {
          ...acc,
          young: acc.young + 1,
        };
      }

      if (curr.age > 30 && curr.age <= 45) {
        return {
          ...acc,
          midAged: acc.midAged + 1,
        };
      }

      if (curr.age > 45 && curr.age <= 60) {
        return {
          ...acc,
          afterMidAged: acc.afterMidAged + 1,
        };
      }

      if (curr.age > 60 && curr.age <= 80) {
        return {
          ...acc,
          old: acc.old + 1,
        };
      }

      return acc;
    },
    {
      young: 0,
      midAged: 0,
      afterMidAged: 0,
      old: 0,
    }
  );
}

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
function reduce(array, callback, initializer = undefined) {
  if (!Array.isArray(arr)) {
    throw new Error("Your must provide an array as a first argument!");
  }

  if (typeof callback !== "function") {
    throw new Error("Your must provide a function as a second argument!");
  }

  let accumulator = initializer;

  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }

  return accumulator;
}

/**
 * Exercise 5 - Even Average Sum
 *
 * @param {number[]} arr
 * @returns {{
* sum: number;
* evenArray: number[];
* }}
*/
function calculateEvenAverage(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Provided argument should be an array");
  }

  const evenArray = array.filter((e) => e % 2 === 0);

  if (evenArray.length === 0) {
    return {
      sum: 0,
      evenArray: [],
    };
  }

  const sum = evenArray.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  return {
    sum,
    evenArray: evenArray.sort((a, b) => b - a),
  };
}