# Module 3 - Typescript

## Introduction

Frankly, JavaScript lacks many features considered crucial by the software development community such as **types, OOP abstraction and interfaces, generics, enums**, and much more. TypeScript fills this gap and helps developers **write more robust and maintainable code**.

[Learning Materials About This Topic](https://www.notion.so/mkit/TypeScript-1d2dc7ec37fa4372821ae77b221cdd31)

## Exercise #1 - Config

In this Exercise you are provided with a `tsconfig.json` file.

Your Objective is to:

- Create a **TypeScript** configuration from scratch
- it should have compilerOptions
  - it should have target for transpilation and it should be `ES6`
  - it should have libraries to include that describe the target runtime environment and it should be `["dom", "dom.iterable", "esnext"]`
  - it should enable strict mode
  - it should allow javascript files to be allowed
  - it should enable casing check in imports
  - it should a module type and it should be "CommonJS"
  - it should enable importing `.json` files
- it should transpile **ONLY** `.ts`,`.tsx` files
- it should not transpile `node_modules`

## Exercise #2 - Type John

In this Exercise you are given with a `john` object literal. It will be:

```typescript
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
```

Your objective is to:

- type `john`
- John `interface` should be `John`
- every referential value is an `Interface` or a `Type`
- every referential `type`/`interface` must be named with capitalization -> `name: ['Harry', 'Potter'] // type Name = string[] `

Example:

```typescript
interface Person {
  name: string;
  age: number
}

const person: Person = {
  name: 'Peter'
  age: 16
}
```

## Exercise #3 - Reverse Array Generic Function

In this exercise you are provided with `reverseArray` function declaration. It will receive an argument `arr`.

Your objective is to:

- make this function a generic (use `T` as a name of generic)
- whatever you pass as a parameter it has to be typed correctly
- it should reverse the array provided

Example:

```typescript
console.log(reverseArray([1, 2, 3])); // [3, 2, 1]: number[]
console.log(reverseArray(["John", "Harry"])); // ["Harry", "John"]: string[]
```
