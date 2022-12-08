# Module 3 - JavaScript Closures, Hoisting, and OOP

## Introduction

Every programming language has specifics necessary as a prerequisite to taking full advantage of its features. Having solid understanding of how to operate variables, functions, and scope in JavaScript is essential to both functional and object-oriented programming.

[Learning Materials About This Topic](https://www.notion.so/mkit/Quest-3-JavaScript-Essentials-efb2218bedfc4039b571b6d6d88f2258#c6553f7cdebf41fe86569b170d3f3d11)

## Exercise #1 - Multiplication

In this Exercise you will be provided with `multiply` function declaration. It will receive 2 arguments `n: number, b?: number`(b is optional) as an input and you can safely expect this input to be valid. After the last call it should return `No more calculations`.

Your Objective is to:

- use closure
- providing both arguments must return result
- providing only one should return a function that can return the result

Example:

```javascript
multiply(3, 4); // 12
multiply(3)(4); // 24
```

## Exercise 2 - Guessing Game

In this Exercise you are provided with `guessingGame` function declaration. It will receive 2 arguments `guesses: number, answer: number` as an input and you can safely expect this input to be valid. After calling `guessingGame` it should return a `guess` function. `guess` must receive an argument `n: number`.

Your Objective is to:

- to use closure
- after calling `guess` it should return whether the answer is correct or incorrect
  - correct: `<n> is the correct answer! You have <guesses-left> guesses left.`
  - incorrect: `<n> is too <high | low>, go <higher | lower>`
  - when run out of guesses you should return `No more guesses left`.
- after calling `guess` after a **WIN** you should return `This game is over!`

Example:

```javascript
const guess = guessingGame(4);
guess(5); // "5" is too low, go higher!
guess(9); // "9" is too high, go lower!
guess(8); // "8" is too high, go lower!
guess(6); // "6" is the correct answer!

const guess2 = guessingGame(2);
guess2(2); // "2" is too low, go higher!
guess2(7); // "7" is too high, go lower!
guess2(8); // No more guesses left.
guess2(6); // No more guesses left.
guess2(3); // No more guesses left.

const guess3 = guessingGame(3);
guess3(2); // "2" is too low, go higher!
guess3(6); // "6" is the correct answer!
guess3(8); // "This game is over!"
guess3(6); // "This game is over!"
guess3(3); // "This game is over!"
```

## Exercise 3 - Human Body

In this Exercise your are provided with a `Human` function constructor. It should have 3 properties and you can safely expect to be tested with valid data.

```javascript
arms = 2;
legs = 2;
head = 1;
```

Your Objective is to:

- implement 2 methods:
  - `punch` that should return `"I am punching"`
  - `walk` that should return `"I am walking"`
- create another `Person` constructor that should receive `name: string, age: number` as an input and you can safely expect this input to be valid. `Person` should inherit all `Human` properties.
- implement a `startFighting` method on person that prints both results from `walk` and `punch in this order with `and` in between.

Example:

```javascript
const john = new Person("John", 23);

console.log(john.name); // "John"
console.log(john.age); // 23
console.log(john.head); // 1
console.log(john.arms); // 2
console.log(john.legs); // 2
console.log(john.startFighting()); // I am walking and I am punching
```

## Exercise 4 - Car

In this Exercise you are provided with a `Car` function constructor. It should have 2 properties `tank: number, fuel: string` as input and you can safely expect to be tested with valid data. Also you will be provided with `drive` and `stop` function declarations already implemented for you.

Your Objective is to:

- chain both `drive` and `stop` to Car

Example:

```javascript
const car = new Car();

car.drive(); // "I am driving!"
car.stop("I am stopping!"); // "I am stopping!"
```

## Exercise 5 - Create Husky

In this Exercise you are provided with a `Husky` function constructor. It should receive 2 properties `name: string, age: number` as input and you can safely expect to be tested with valid data.

Your Objective is to:

- create `Dog` and `Animal` function constructors

  - `Animal` properties:

    ```javascript
    head = 1;
    arms; // as input
    legs; // as input
    ```

  - `Dog`

    - should inherit all properties from `Animal`
    - should 1 more property and 1 method

    ```javascript
    fur = // as an input;
      startBarking; // returns "Woof!"
    ```

- `Husky` should inherit all properties/methods from `Dog // fur = 'black and white`
- create a prototype based inheritance with `Husky -> Dog -> Animal`

Example:

```javascript
const maya = new Husky("Maya", 2);

console.log(maya.head); // 1;
console.log(maya.arms); // 0;
console.log(maya.legs); // 4;
console.log(maya.fur); // "black and white";
console.log(maya.startBarking()); // "Woof!";
console.log(Object.getPrototypeOf(Husky) === Dog); // true;
console.log(Object.getPrototypeOf(Dog) === Animal); // true;
```
