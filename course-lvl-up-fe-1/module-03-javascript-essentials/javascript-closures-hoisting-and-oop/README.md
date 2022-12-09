# Module 3 - JavaScript Closures, Hoisting, and OOP

## Introduction

Every programming language has specifics necessary as a prerequisite to taking full advantage of its features. Having solid understanding of how to operate **variables**, **functions**, and **scope** in JavaScript is essential to both **functional and object-oriented programming**.

[Learning Materials About This Topic](https://www.notion.so/mkit/JavaScript-Closures-Hoisting-and-OOP-b69fb880517f49e4b19e59e120af4dea)

## Exercise #1 - Multiplication

In this Exercise, you are provided with `multiply` function declaration. It will receive 2 arguments `n: number, b?: number`(b is optional) as an input and you can safely expect this input to be valid.

Your objectives are to:

- Implement `multiply` in such way that:
  - When provided with **both** arguments it returns a result
  - When provided with **only one** argument it returns a function that returns the result
- Do the above using a Closure

Example:

```javascript
multiply(3, 4); // 12
multiply(3)(4); // 24
```

## Exercise 2 - Guessing Game

In this Exercise, you are provided with `guessingGame` function declaration. It will receive 2 arguments `guesses: number, answer: number` as an input and you can safely expect this input to be valid. After calling `guessingGame` it should return a `guess` function. `guess` must receive an argument `n: number`.

Your objectives are to:

- Implement `guessingGame` in such way that it returns a `guess` function
- Implement `guess` in such way that it:
  - Receives `n: number` as an argument
  - Returns `"{n} is the correct answer! You have {guesses-left} guesses left."`, if the input `n` is the correct number
  - Returns `"{n} is too {"high" | "low"}, go {"higher" | "lower"}"`, if the input `n` is not the correct answer
  - Returns `"No more guesses left"` if you run out of guesses
  - Returns `"This game is over!"` after a **WIN**
- Do the above using a Closure

Example:

```javascript
const guess = guessingGame(4);
console.log(guess(5)); // "5" is too low, go higher!
console.log(guess(9)); // "9" is too high, go lower!
console.log(guess(8)); // "8" is too high, go lower!
console.log(guess(6)); // "6" is the correct answer!

const guess2 = guessingGame(2);
console.log(guess2(2)); // "2" is too low, go higher!
console.log(guess2(7)); // "7" is too high, go lower!
console.log(guess2(8)); // No more guesses left.
console.log(guess2(6)); // No more guesses left.
console.log(guess2(3)); // No more guesses left.

const guess3 = guessingGame(3);
console.log(guess3(2)); // "2" is too low, go higher!
console.log(guess3(6)); // "6" is the correct answer!
console.log(guess3(8)); // "This game is over!"
console.log(guess3(6)); // "This game is over!"
console.log(guess3(3)); // "This game is over!"
```

## Exercise 3 - Human Body

In this Exercise, your are provided with `Human` constructor function. It should have 3 properties and you can safely expect to be tested with valid data.

```javascript
arms = 2;
legs = 2;
head = 1;
```

Your objectives are to:

- Implement 2 methods:
  - `punch` that should return `"I am punching"`
  - `walk` that should return `"I am walking"`
- Create another `Person` constructor function that receives 2 arguments `name: string, age: number` as an input and you can safely expect this input to be valid. `Person` should inherit all `Human` properties.
- Implement a `startFighting` method on person that returns both results from `walk` and `punch` in format `{walk()} and {punch()}`

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

In this Exercise, you are provided with `Car` constructor function. It will receive 2 arguments `tank: number, fuel: string` as input and you can safely expect to be tested with valid data. Also you will be provided with `drive` and `stop` function declarations already implemented for you.

Your objective is to:

- Attach both `drive` and `stop` to `Car's` prototype

Example:

```javascript
const car = new Car(100, "gas");

console.log(car.drive()); // "I am driving!"
console.log(car.stop("I am stopping!")); // "I am stopping!"
```

## Exercise 5 - Create Husky

In this Exercise, you are provided with `Husky` constructor function. It will receive 2 arguments `name: string, age: number` as input and you can safely expect to be tested with valid data.

Your objectives are to:

- Create `Animal` constructor function that:
  - Receives `arms: number, legs: number` as arguments
  - Has a `head` property that equals `1`
- Create `Dog` constructor function that:
  - Inherits all properties from `Animal`
  - Receives `fur: string` as an argument
  - Has a `startBarking()` function that returns `"Woof!"`
- Implement `Husky` in such way that it inherits all fields from `Dog`
- Create a prototype based inheritance: `Husky -> Dog -> Animal`

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
