# Module 1 - Object-Oriented Programming

## Introduction

Object Oriented Programming(OOP) is a programming paradigm based on the concepts of "objects", which helps describe complex real life problems into a more human-natural way. OOP objects can represent various physical (or not) entities encapsulating both data and functionality within a single model. A typical illustration of OOP is the concept of a hierarchy, e.g. Animal (parent, top-level entity) - Cat, Dog (extends from parent, lower-level entity), etc.

[Learning Materials About This Topic](https://www.notion.so/mkit/Object-Oriented-Programming-OOP-1d516d7c57764e02b31d0eaa719b1bf2)

## Exercise #1 - Access Modifiers

In this Exercise you are provided with `Greeter` class definition.

Your objectives are to:

- Implement a property called `name`, that is of type string and is accessible only in this class.
- Implement a method called `getName()` that is accessible in this class and it's derived classes and returns the value of the field `name`
- Implement a method called `greet()` that is accessible outside this class and returns a string in format `"Hello, {name}"`

Example:

```typescript
const greeter = new Greeter('John Doe')
greeter.name // ❌
greeter.getName() // ❌
greeter.greet() // "Hello, John Doe"
```

## Exercise #2 - Constructor

 In this Exercise you are provided with `Shape` class definition.

Your objectives are to:

- Implement the `constructor` in such way that it accepts `name`, `sides`, and `sideLength` properties and initializes them
- Implement `calcPerimeter()` method that calculates its perimeter and returns the result

Example:

```typescript
const shape = new Shape('square', 4, 5)

console.log(shape.name) // "square"
console.log(shape.sides) // 4
console.log(shape.sideLength) // 5
console.log(shape.calcPerimeter()) // 20
```

## Exercise #3 - Encapsulation And Abstraction

In this Exercise you are provided with `Cat` class definition.

Your objectives are to:

- Implement `mood`, `hungry`, and `energy` properties. All of them are of type `number` and accessible `only in this class`
- Implement `makeSound()` method that returns `"Meow"` and is accessible `only in this class`
- Implement `sleep()` method that increments `energy` and `hungry` by `1`
- Implement `play()` method that increments `mood` by `1`, decrements `energy` by `1`, and  calls `makeSound()`
- Implement `feed()` method that decrements `hungry` by `1`, increments `mood` by `1`, and calls `makeSound()`

Example:

```typescript
const cat = new Cat()

cat.mood // ❌
cat.hungry // ❌
cat.energy // ❌
cat.makeSound // ❌
cat.sleep() // ✅
cat.play() // ✅
cat.feed() // ✅
```

## Exercise #4 - Inheritance And Polymorphism

In this Exercise you are provided with `Person`, `Teacher`, and `Student` class definitions and:

- interface `IStudent`:

  ```typescript
  grade: number;
  displayGrade: () => string; // Grade: {grade}
  ```

- interface `ITeacher`:

  ```typescript
  subject: string;
  displaySubject: () => string; // Subject: {subject}
  ```

 Your objectives are to:

- Implement `Person` in such way that it can not be instantiated and has 3 fields:
    1. `firstName: string`: Accessible in this class and derived classes.
    2. `lastName: string`: Accessible in this class and derived classes.
    3. `greet(): string`: Abstract method.
- Implement 2 classes:
    1. `Student`: Implementing `IStudent` and greeting in format `"Hello, I'm {fullName}"`
    2. `Teacher`: Implementing `ITeacher` and greeting in format `"Hello, I'm Mrs. {lastName}"`

Example:

```typescript
const person = new Person('John', 'Doe') // ❌
const student = new Student('John', 'Doe', 5) // ✅ 
const teacher = new Teacher('Jane', 'Doe', 'History') // ✅

student.greet() // "Hello, I'm John Doe"
student.displayGrade() // "Grade: 5"

teacher.greet() // "Hello, I'm Mrs. Doe"
teacher.displaySubject() // "Subject: History"

```

## Exercise #5 - Dependency Inversion Principle

In this Exercise you are provided with `Store`, `StripeProvider`, and `PaypalProvider` class definitions and:

- interface `PaymentProvider`:

  ```typescript
  pay(price: string): {
    success: boolean;
    total: number;
  };
  ```

- `stripeApi`:

  ```typescript
  tax: number;
  createPayment(price: string): { isSuccess: boolean }
  ```

- `paypalApi`:

    ```typescript
    makePayment(price: number): { hasFailed: boolean }
    ```

Your objectives are to:

- Implement a class `Store` in a way that:
  - It has a `private` field called `provider` and is of type `PaymentProvider`
  - It has a `public` method called `buySomething` which accepts `price: string` as an argument and calls `this.provider.pay(price)`
- Implement 2 classes:
  1. `StripeProvider`: implements `PaymentProvider` and makes payment based on `stripeApi`
  2. `PaypalProvider`: implements `PaymentProvider` and makes payment based on `paypalApi`
- Implement `Store` in such way that it should be able to be instantiated with both providers.

_Pro tip: Do not forget that stripe api applies taxes to the total price_
Example:

```typescript
const storeA = new Store(new StripeProvider())
storeA.buySomething('29.99') // { success: true, total: 31.4895 }

const storeB = new Store(new PaypalProvider())
storeB.buySomething('29.99') // { success: true, total: 29.99 }

```
