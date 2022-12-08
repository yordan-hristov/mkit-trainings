# Module 3 - Javascript Functions And This

## Introduction

In JavaScript there is a **global scope** that contains and is visible in all other scopes. In **client-side** (browser) JavaScript the global scope is generally the web page or `window` object. However, since JavaScript runs on the **server-side** as well, there is another global scope available there. In addition to that, the keyword `this` behaves a little differently in JavaScript compared to other languages.

[Learning Materials About This Topic](https://www.notion.so/mkit/JavaScript-Functions-and-this-8d8513ed71c54bf4ab6b716ce936f7de)

## Exercise #1 - Car Manufacturing

In this Exercise your are provided with `carOwner` object literal with 2 properties `name: string, cars: Cars` and a method `selectNew`. Cars value will be an array of object literals with 2 properties `model: string, year: number`. As an input for `selectNew` will be `years: number`. You can safely expect to be tested with valid data.
_Pro tip: Think about what type of function you will use._

Your Objective is to:

- implement the method to return on the cars manufactured by a given `years`
- end result should be an array of strings sorted by year.

Example:

```javascript
const carOwner = {
    name: "John",
    cars: [
        {
            model: "BMW",
            year: 1999
        },
        {
            model: "Mercedes",
            year: 2022
        },
        {
            model: "Audi",
            year: 2021
        }
    ],
    selectNew: // Implement it
}

// Current date - 2022

console.log(carOwner.selectNew(2)) // ["Mercedes", "Audi"]
console.log(carOwner.selectNew(1)) // ["Mercedes"]
```

## Exercise #2 - Sum Of Two Numbers By Context

In this Exercise your are provided with `addTwo` function declaration. It should `NOT` accept any arguments.

Your Objective is to:

- implement `addTwo` in this way so by calling it with `call` function method, with an object `{ a: number; b: number }` as a first parameter, it should return the sum of `a` and `b`.

Example:

```javascript
console.log(addTwo.call({ a: 1, b: 2 })); // 3
console.log(addTwo.call({ a: 2, b: 5 })); // 7
console.log(addTwo.call({ a: 100, b: 200 })); // 300
```

## Exercise #3 - Check For Available Users

In this Exercise your are provided with `users` array of object literals, with the properties `{ name: string, status: string }`, as input and you and you can safely expect this input to be valid.

Your Objective is to:

- implement a function `getUsers` that does not accept arguments.
- it should be called with `call`
- by the provided users your should return an object with 2 properties `online` and `offline` which will be the names of online and offline users as arrays of strings.

Example:

```javascript
const users = [
  {
    name: "John",
    status: "online",
  },
  {
    name: "Peter",
    status: "offline",
  },
  {
    name: "Harry",
    status: "online",
  },
];

const result = getUsers.call(users);

console.log(result); // {online: [ "John", "Harry" ], offline: [ "Peter" ]}
```

## Exercise #4 - Create a Javascript Class From Scratch

In this Exercise you are provided with `Person` function constructor. It will receive 2 arguments `name: string, age: number` as input and you can safely expect this input to be valid.

Your Objective is to:

- to assign it to a variable so that it can be called with the keyword `new`
- so that implement the old **EcmaScript 5** version of the javascript `Class`
- when called, it should return an instance
- the instance should be `Person`
- it should have a `getPerson` method that returns the name and the age with a space in between `"John 32"`

Example:

```javascript
const john = new Person("John", 23);

john.getPerson(); // "John 23"
```

## Exercise #5 - Get Person's Name

In this Exercise you are provided with `getPrintName` function declaration. It will be assigned in to a `printName` property in a `person` object literal. The object literal will have a `name` property as well and you can safely expect to be tested with valid data. `getPrintName` should NOT accept any arguments.

Your Objective is to:

- implement `getPrintName` to be a high order function and return a callback (it should not accept arguments as well)
- the callback itself should return the `name` value from `person` object

Example:

```javascript
const person = {
  name: "John",
  printName: getPrintName,
};

call.printName()(); // "John"
```
