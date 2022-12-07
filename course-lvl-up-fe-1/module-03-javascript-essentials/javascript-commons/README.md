# Module 3 - Javascript Commons

## Introduction

JavaScript is our primarily used programming language for the full-stack. Getting to know the history, internals, and features of JavaScript is fundamental to levering its capabilities. In addition to that, it's favorable to know where is JavaScript going.

[Learning Materials About This Topic](https://www.notion.so/mkit/Quest-3-JavaScript-Essentials-efb2218bedfc4039b571b6d6d88f2258#d914f35330c54de9b660caa94cf20f86)

## Exercise #1 - Generator Functions

In this Exercise you are provided with `fibonacci` function declaration. 

Your Objective is to:
- refactor `fibonacci` function declaration to a generator function
- when `fibonacci` is called/yielded should returns a fibonacci number

Example:

```javascript
const getNextFibonacci = fibonacci();

console.log(getNextFibonacci.next().value); // 0
console.log(getNextFibonacci.next().value); // 1
console.log(getNextFibonacci.next().value); // 1
console.log(getNextFibonacci.next().value); // 2
console.log(getNextFibonacci.next().value); // 3
console.log(getNextFibonacci.next().value); // 5
console.log(getNextFibonacci.next().value); // 8
console.log(getNextFibonacci.next().value); // 13
```

## Exercise #2 - Array Methods(Map)

In this Exercise you are provided with `map` function declaration. It will receive an array of elements
and a `map<T>(arr: T[], cb: () => [])` callback function as arguments. The callback must receive 3 arguments
`(el:T, index: number, array: T[] ) => []`. 

Your Objective is to:
- implement the well known array method `array.map()`
- handle incorrect arguments by throwing an Error if passed arguments are incorrect

Example:

```javascript
console.log(map([1, 2, 3, 4], (el) => el * 2)); // [2, 4, 6, 8]

console.log(
  map(["John", "Doe", "Peter", "Parker"], (el, index) => `${el} - ${index}`)
);

// ['John - 0', 'Doe - 1', 'Peter - 2', 'Parker - 3']
```

## Exercise #3 - Array Methods(Reduce)

In this Exercise you are provided with `potentialVotersResult` function declaration. It will receive an array of object literals of potential voters `{ name:string , age: number, voted: boolean }` as input and you can safely expect this input to be valid. 

Your Objective is to:
- return how many people are voters for each age group as an object literal
- the object literal should be in format `ageGroup: voters // number`

Age groups:

```
Young: 18 - 30;
Mid Aged: 30 - 45;
After Mid Aged: 45 - 60;
Old: 60 - 80;
```

Example:

```javascript
console.log(
  potentialVotersResult([
    { name: "John", age: 18, voted: true }, // { name: string, age: number, voted: boolean }
    { name: "Jake", age: 55, voted: true },
    { name: "Peter", age: 25, voted: false },
    { name: "Harry", age: 53, voted: true },
    { name: "George", age: 23, voted: true },
    { name: "Dan", age: 40, voted: false },
  ])
);

// {
// young: 2,
// midAged: 0,
// afterMidAged: 2,
// old: 0,
// }
```

## Exercise #4 - Array methods(Reduce implementation)

In this Exercise you are provided with `reduce<T, InitializerT>(array: T[], callback: (accumulator: InitializerT, currentElement: T) => InitializerT, initializer: InitializerT = undefined)` function declaration and you can safely expect it's arguments to be valid. 

Your Objective is to:
- implement the well known array method reduce from scratch
- You must throw an error if the the provided arguments are not correct

Example:

```javascript
console.log(reduce([1, 2, 3, 4], (accumulator, currentElement) => accumulator + currentElement, 0 )); // 10
```

## Exercise #5 - Even Average Sum

In this Exercise you are provided with `calculateEvenAverage` function declaration. It will receive an array of numbers `array: number[]` as input and you can safely expect this input to be valid. 

Your Objective is to:
- implement a `calculateEvenAverage` that when called returns the average of only even numbers
-  return array of even numbers sorted decreasingly
-  the end result should be an object literal in format of `{ sum: number, evenArray: number[] }`

Example:

```javascript
console.log(calculateEvenAverage([1, 2, 3, 4, 5])); // { sum: 6, evenArray: [4, 2] }
console.log(calculateEvenAverage([23, 87, 1, 93, 3])); // { sum: 0, evenArray: [] }
console.log(calculateEvenAverage([0, 2, 5, 8, 10])); // { sum: 20, evenArray: [10, 8, 2] }
console.log(calculateEvenAverage([1, 3, 4, 9])); // { sum: 4, evenArray: [4] }
```
