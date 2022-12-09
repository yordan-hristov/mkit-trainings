# Module 3 - Typescript

## Introduction

Frankly, JavaScript lacks many features considered crucial by the software development community such as **types, OOP abstraction and interfaces, generics, enums**, and much more. TypeScript fills this gap and helps developers **write more robust and maintainable code**.

[Learning Materials About This Topic](https://www.notion.so/mkit/TypeScript-1d2dc7ec37fa4372821ae77b221cdd31)

## Exercise #1 - Config

In this Exercise you are provided with a `tsconfig.json` file.

Your objective are to:

- Create a **TypeScript** configuration from scratch
  - It should have compilerOptions
    - It should have target for transpilation and it should be `ES6`
    - It should have libraries to include that describe the target runtime environment and it should be `["dom", "dom.iterable", "esnext"]`
    - It should enable strict mode
    - It should allow javascript files to be allowed
    - It should enable casing check in imports
    - It should a module type and it should be "CommonJS"
    - It should enable importing `.json` files
  - It should transpile **ONLY** `.ts`,`.tsx` files
  - It should not transpile `node_modules`

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

Your objectives are to:

- Type `john`
  - John `interface` should be `John`
- Type every referential value as an `Interface` or a `Type`
  - Every referential `type`/`interface` must be named with capitalization -> `name: ['Harry', 'Potter'] // type Name = string[] `

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

Your objectives are to to:

- Make this function a generic (use `T` as a name of generic)
  - Whatever you pass as a parameter it has to be typed correctly
  - It should reverse the array provided

Example:

```typescript
console.log(reverseArray([1, 2, 3])); // [3, 2, 1]: number[]
console.log(reverseArray(["John", "Harry"])); // ["Harry", "John"]: string[]
```

## Exercise #4 - Create Cat from Animal

In this Exercise, you are provided with `Animal` interface. It has 3 properties

```typescript
interface Animal {
  type: "mammal" | "bird" | "reptiles" | "fish";
  legs: number;
  arms: number;
}
```

Your objectives are to:

- Create a `Cat` interface
- Implement it in this way that it should have all properties of `Animal` and a `fur: boolean` property

## Exercise #5 - Mammal

In this exercise you are provided with `Animal` interface. It has 4 properties

```typescript
interface Mammal {
  arms: number;
  legs: number; // required
  wings: number;
}
```

Your objective is to

- Refactor `Animal` so that some characteristics are not required

_Pro Tip: only bats have wings_

Example:

```typescript
const dog: Mammal = {
  legs: 4;
};

const monkey: Mammal = {
  arms: 2,
  legs: 2
}

const bats: Mammal = {
  legs: 2;
  wings: 2;
};
```
