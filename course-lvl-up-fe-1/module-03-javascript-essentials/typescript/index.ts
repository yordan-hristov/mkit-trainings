/**
 * Exercise 2 - Type John
 */
const john: unknown = {
  name: "John",
  age: 23,
  wife: "Daenerys",
  cars: [
    {
      model: "BMW",
      color: "black",
    },
    {
      model: "Mercedes",
      color: "white",
    },
  ],
  profession: {
    name: "Dragon slayer",
    sphere: "Hunter",
  },
};

/**
 * Exercise 3 - Reverse Array Generic Function
 */
export default function reverseArray(arr: unknown) {
  // Implement it
}

/**
 * Exercise 4 - Create Cat from Animal
 */
interface Animal {
  // Implement it
}

interface Cat {
  // Implement it
}

/**
 * Exercise #5 - Mammal
 */
interface Mammal {}

/*********************************************
 * DO NOT MODIFY THIS AREA
 *
 * This area is used by the automated tests.
 ********************************************/
export { reverseArray };
