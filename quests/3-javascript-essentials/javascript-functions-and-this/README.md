# Quest 3 - Assessment

## Introduction

...

## Assessment #1 - Car Manufacturing

In this assessment your are given an object literal `carOwner` with 2 properties `name: string, cars: Cars` and a method `selectNew`. Cars property is an array of objects with 2 properties `model: string, year: number`. Your task is to implement the method to return on the cars manufactured by a given `years` input `selectNew(years: number)` as an array of strings sorted by year. This about what type of function you will use.

Example:

```
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

## Assessment #2 - Sum of two numbers by context

In this assessment your are given a function declaration `addTwo`. It should accept any arguments. Your task is two implement it in this way so by calling it with `call` function method, with an object `{ a: number; b: number }` as a first parameter, it should return the sum of `a` and `b`.

Example:

```
console.log(addTwo.call({ a: 1, b:2 })) // 3
console.log(addTwo.call({ a: 2, b:5 })) // 7
console.log(addTwo.call({ a: 100, b:200 })) // 300
```

## Assessment #3 - Check for available users

In this assessment your are given an array of object literals `users` with the given properties `{ name: string, status: string }`. Your task is to implement a function that does not except arguments. It should be called with `call` and by the provided users your should return an object with 2 properties `online` and `offline` which will be the names of online and offline users as arrays.

Example:

```

```
