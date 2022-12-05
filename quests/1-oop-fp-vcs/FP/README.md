# Quest 1 - Functional Programming

## Introduction

FP is yet another programming paradigm based on declarative code, function composition, data immutability, and pure functions avoiding side effects. FP decomposes business problems into functions and the application state flows through pure functions rather than having a shared application state. A typical illustration of FP are mathematical functions where no side effects should be possible and mathematical operations can be chained one after another.

[Link to Notion](https://www.notion.so/mkit/Functional-Programming-FP-f4c83a19c7e348d0b299cc09df1b6593)

## Assessment #1

In this assessment you are provided with three functions `map`, `filter` and `reduce`. All of the mentioned functions will receive an array of numbers. Your objective is to:

- Implement `map` in such a way that it returns an array in which all numbers are multiplied by 2.

- Implement `filter` in such a way that it returns an array containing only even numbers.

- Implement `reduce` in such a way that it returns the total sum of all the numbers.

Your solution will be tested so that it's verified that it works.

## Assessment #2 - Pure Functions

In this assessment you are provided with the function declaration `sort`. It will receive an array of objects
`{ name: string; age: number; }` as an argument. Your tasks are to:

- Sort the array alphabetically by `name`
- If there are equal names, sort by `age` in `ascending` order
- Do the above without mutating the original array

Example:
```
const testArray = [
    { name: 'john', age: 20},
    { name: 'will', age: 43},
    { name: 'john', age: 11},
]

sort(testArray)

// [
//  {name: 'john', age: 11},
//  {name: 'john', age: 20},
//  {name: 'will', age: 43},
// ]

```

## Assessment #3 - Function Chaining and `this`

In this assessment you are provided with the object literal `calculator`. Your task is to implement 1 property and 4 methods that can be chained:

- result: final result of all operations, initially 0
- add(n: number): adds the value of `n` to `result`
- subtract(n: number): subtracts the value of `n` from `result`
- multiply(n: number): multiplies `result` with `n`
- divide(n: number): divides `result` by `n`

Example: 

```
calculator.add(10).add(10).subtract(5);
console.log(calculator.result); // 15
calculator.multiply(2);
console.log(calculator.result); // 30
```

## Assessment #4 - Recursion

In this assessment you are provided with the function `recursive(n: number, result = [])`. Your task is to implement it in such way that it recursively pushes `n` into `result` if `n` is even number, until `n` reaches `0` and then return `result`.

Example:

```
recursive(10) // [ 10, 8, 6, 4, 2, 0 ]
recursive(25) // [24, 22, 20, 18, 16, 14, 12, 10,  8,  6,  4,  2, 0]
```

## Assessment #5 - Closures

In this assessment you are provided with the function `createFibonacciClosure`. Your task is to implement a function that when called, prints the next fibonacci number using closure.

Example:

```
const getNextFibonacci = createFibonacciClosure()

console.log(getNextFibonacci()) // 1
console.log(getNextFibonacci()) // 1
console.log(getNextFibonacci()) // 2
console.log(getNextFibonacci()) // 3
console.log(getNextFibonacci()) // 5
console.log(getNextFibonacci()) // 8
console.log(getNextFibonacci()) // 13
```

## Assessment #6 - Function Currying

In this assessment you are provided with the function `add(n: number)`. Your task is to implement it in such way that it can be curried infinite times until called without arguments.

Example:

```
console.log(add(5)()); // 5
console.log(add(5)(10)(20)()); // 35
console.log(add(5)(10)(20)(25)()); // 60
```