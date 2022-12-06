# Quest 3 - Assessment

## Introduction

...

## Assessment #1 - Generator Functions

In this assessment you are provided with the generator function `createFibonacciGenerator`. Your task is to implement a generator function that when called/yielded prints a fibonacci number.

Example:

```
const getNextFibonacci = createFibonacciGenerator()

console.log(getNextFibonacci.next().value) // 0
console.log(getNextFibonacci.next().value) // 1
console.log(getNextFibonacci.next().value) // 1
console.log(getNextFibonacci.next().value) // 2
console.log(getNextFibonacci.next().value) // 3
console.log(getNextFibonacci.next().value) // 5
console.log(getNextFibonacci.next().value) // 8
console.log(getNextFibonacci.next().value) // 13
```

## Assessment #2 - Array Methods(Map)

In this assessment you are provided with the function declaration `map`. It will receive an array of elements
and a callback function `map<T>(arr: T[], cb: () => [])` as arguments. The callback must receive 3 arguments
`(el:T, index: number, array: T[] ) => []`. Your task is to implement the well known array method `array.map()`. You should handle incorrect arguments by throwing an Error if passed arguments are incorrect.

Example:

```
console.log(map([1, 2, 3, 4], (el) => el * 2)); // [2, 4, 6, 8]

console.log(
    map(
        ['John', 'Doe', 'Peter', 'Parker'],
        (el, index) => `${el} - ${index}`
    )
);

// ['John - 0', 'Doe - 1', 'Peter - 2', 'Parker - 3']
```

## Assessment #3 - Array Methods(Reduce)

In this assessment you are provided with the function declaration `potentialVotersResult`. It will receive an array of object of potential voters `{ name:string , age: number, voted: boolean },`. Your task is to how many people vote in each age group.

Age groups:

```
Young: 18 - 30;
Mid Aged: 30 - 45;
After Mid Aged: 45 - 60;
Old: 60 - 80;
```

As a result you should return an object with each age group and the number of voters as a value.

Example:

```
console.log(
    potentialVotersResult(
        [{name:'John' , age: 18, voted: true},
        {name:'Jake' , age: 55, voted: true},
        {name:'Peter' , age: 25, voted: false},
        {name:'Harry' , age: 53, voted: true},
        {name:'George' , age: 23, voted: true},
        {name:'Dan' , age: 40, voted: false}]
    )
);

// {
// young: 2,
// midAged: 0,
// afterMidAged: 2,
// old: 0,
// }

```

## Assessment #4 - Array methods(Reduce implementation)

In this assessment you are provided with the function `reduce<T, InitializerT>(array: T[], callback: (accumulator: InitializerT, currentElement: T) => InitializerT, initializer: InitializerT = undefined)`. Your task is to implement the well known array method reduce from scratch. You must throw an error if the the provided arguments are not correct.

Example:

```
console.log(reduce([1, 2, 3, 4], (accumulator, currentElement) => accumulator + currentElement, 0)) // 10
```

## Assessment #5 - Even Average Sum

In this assessment you are provided with the function `calculateEvenAverage`. It will receive an array of numbers `arr: number[]`. Your task is to implement a function that when called, prints the average of only even numbers and the array of even numbers sorted decreasingly.

Example:

```
console.log(calculateEvenAverage([1, 2, 3, 4, 5])) // { sum: 6, evenArray: [4, 2] }
console.log(calculateEvenAverage([23, 87, 1, 93, 3])) // { sum: 0, evenArray: [] }
console.log(calculateEvenAverage([0, 2, 5, 8, 10])) // { sum: 20, evenArray: [10, 8, 2] }
console.log(calculateEvenAverage([1, 3, 4, 9])) // { sum: 4, evenArray: [4] }
```
