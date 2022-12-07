# Module 1 - Functional Programming

## Introduction

Functional Programming (FP) is yet another programming paradigm based on declarative code, function composition, data immutability, and pure functions avoiding side effects. FP decomposes business problems into functions and the application state flows through pure functions rather than having a shared application state. A typical illustration of FP are mathematical functions where no side effects should be possible and mathematical operations can be chained one after another.

[Learning Materials About This Topic](https://www.notion.so/mkit/Functional-Programming-FP-f4c83a19c7e348d0b299cc09df1b6593)

## Exercise #1 - Array Functions

In this Exercise, you are provided with `map`, `filter`, and `reduce` function declarations. Every function should receive an array of numbers as input and you can safely expect this input to be valid.

Your objectives are to:

- Implement `map` in such a way that it returns an array in which all numbers are multiplied by 2.
- Implement `filter` in such a way that it returns an array containing only even numbers.
- Implement `reduce` in such a way that it returns the total sum of all the numbers.

Example:
```js
const testInput = [1, 2, 3, 4, 5];

console.log(map(testInput)) // [2, 4, 6, 8, 10]
console.log(filter(testInput)) // [2, 4]
console.log(reduce(testInput)) // 15
```

## Exercise #2 - Pure Functions

In this Exercise, you are provided with `sort` function declaration. The function should receive an array of objects as input and you can safely expect this input to be valid.

Your objectives are to:

- Sort the array alphabetically by `name`
- If there are equal names, sort by `age` in `ascending` order
- Do the above without mutating the original array

Example:

```js
// Sample input
[
  {
    name: "John", // name: string
    age: 42, // age: number
  },
  {
    name: "Bob",
    age: 21,
  },
  {
    name: "John",
    age: 22,
  },
];


// Sample output
[
  {
    name: "Bob",
    age: 21,
  },
  {
    name: "John",
    age: 22,
  },
  {
    name: "John",
    age: 42,
  },
];
```

## Exercise #3 - Function Chaining And `this`

In this Exercise, you are provided with `calculator` object literal. All functions should receive a number as an input and you can safely expect this input to be valid.

Your objectives are to:

- Implement a property `result` with initial value of 0, which should hold the value of the result of all operations
- Implement a function `add(n: number)`, which should add the value of `n` to `result`
- Implement a function `subtract(n: number)`, which should subtract the value of `n` from `result`
- Implement a function `multiply(n: number)`, which should multiply `result` by the value of `n`
- Implement a function `divide(n: number)`, which should divide `result` by the value of `n`

Example: 

```javascript
calculator.add(10).add(10).subtract(5);
console.log(calculator.result); // 15

calculator.multiply(2);
console.log(calculator.result); // 30
```

## Exercise #4 - Recursion

In this Exercise, you are provided with `recursive(n: number, result = [])` function declaration. Your objective is to implement the function to recursively push `n` into the `result` array only if `n` is an even number, until `n` reaches 0 and then finally return the `result` array. You can safely expect a valid input.

Example:

```javascript
console.log(recursive(10)) // [10, 8, 6, 4, 2, 0]

console.log(recursive(25)) // [24, 22, 20, 18, 16, 14, 12, 10,  8,  6,  4,  2, 0]
```

## Exercise #5 - Closures

In this Exercise, you are provided with `createFibonacciClosure` function declaration. Your objective is to implement the function to return a function that prints the next Fibonacci number when executed, using Closure.

Example:

```javascript
const getNextFibonacci = createFibonacciClosure()

console.log(getNextFibonacci()) // 1
console.log(getNextFibonacci()) // 1
console.log(getNextFibonacci()) // 2
console.log(getNextFibonacci()) // 3
console.log(getNextFibonacci()) // 5
console.log(getNextFibonacci()) // 8
console.log(getNextFibonacci()) // 13
```

## Exercise #6 - Function Currying

In this Exercise, you are provided with `add(n: number)` function declaration. Your objective is to implement the function to add numbers using currying until called without arguments. You can safely expect a valid input.

Example:

```javascript
console.log(add(5)()); // 5
console.log(add(5)(10)(20)()); // 35
console.log(add(5)(10)(20)(25)()); // 60
```