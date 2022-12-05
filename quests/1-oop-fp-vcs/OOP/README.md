# Quest 1 - Assessment

## Introduction

...

## Assessment #1 - Modifiers

In this assessment you are provided with the starting of a definition for a `Greeter` class. Your tasks are to:

- Implement a field of type string that is called `name` and is accessible only in this class.

- Implement a method called `getName()` that is accessible in this class and it's derived classes and returns the value of the field `name`

- Implement a method called `greet()` that is accessible outside this class and returns a string in format `"Hello, {name}"`

## Assessment #2

 In this assessment you are provided with the starting of a definition for a `Shape` class. This class only models shapes for which all sides are the same length, like a square or an equilateral triangle.

- Add a constructor to this class. The constructor takes arguments for the `name`, `sides`, and `sideLength` properties, and initializes them.

- Add a new `calcPerimeter()` method to the class, which calculates its perimeter (the length of the shape's outer edge) and logs the result to the console.

## Assessment #3 - Encapsulation And Abstraction

In this assessment you are provided with a class called `Cat`. You tasks are to:

- Implement 3 fields: 
    1. `mood: number`:  Accessible only in this class.
    2. `hungry: number`:  Accessible only in this class.
    3. `energy: number`:  Accessible only in this class.

- Implement 4 methods:
    1. `makeSound()`: Returns `"Meow"` and is accessible only in this class.
    2. `sleep()`: increments `energy` and `hungry` by `1`.
    3. `play()`: increment `mood` by `1` and decrements `energy` by `1`. Also calls `makeSound()`.
    4. `feed()`: decrements `hungry` by `1` and increment `mood` by `1`. Also calls `makeSound()`.


## Assessment #4 - Inheritance And Polymorphism

In this assessment you are provided with 2 interfaces: `IStudent` and `ITeacher` and 3 class declarations: `Person`, `Teacher` and `Student`. Your tasks are to:

- Implement `Person` in such way that it can not be instantiated and has 3 fields:
    1. `firstName: string`: Accessible in this class and derived classes.
    2. `lastName: string`: Accessible in this class and derived classes.
    3. `greet(): string`: Abstract method.

- Implement 2 classes:
    1. `Student`: Implementing `IStudent` and greeting in format `"Hello, I'm {fullName}"`
    2. `Teacher`: Implementing `ITeacher` and greeting in format `"Hello, I'm Mrs. {lastName}"`