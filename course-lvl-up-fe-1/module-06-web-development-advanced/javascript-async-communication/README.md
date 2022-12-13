# Module 6 - Javascript Async Communication

## Introduction

Modern web applications are dynamic and interactive. We naturally expect web applications to emulate a "live" experience through quick, incremental updates to the user interface. Luckily, JavaScript provides you with different ways to achieve such behaviors.

[Learning Materials About This Topic](https://www.notion.so/mkit/JavaScript-Async-Communication-e49a7d0439394e9b8c09b91fe313c007)

## Exercise #1 - Callbacks

In this Exercise, you are provided with `readFile` function declaration. It receives `fileName: string` and `cb: (err, result) => void` as arguments. You can safely expect `fileName` to be a file only from `_resources` folder when tested.

Your objectives are to:

- Read the content from the given `fileName` using `fs.readFile`
- Implement `cb` in such way that is it receives `error` and `result` as arguments and is called when reading file is done

Example:

```js
readFile("test.txt", (err, result) => {
    console.log(result) // "Test file"
});
```

## Exercise #2 - Creating Promises

In this Exercise, you are provided with `isEven` function declaration. It receives `n: number` as an argument. You can safely expected `n` to be a valid input when tested.

Your objectives are to:

- Implement it in such way that if `n` is an even number it returns:
  
  ```javascript
  Promise<{input: {n}, success: true}>
  ```

- Throws error if `n` is an odd number:
- Implement the above without using `async` function

Example:

```javascript
isEven(2)
    .then(result => console.log(result))
// {input: 2, success: true}

isEven(1)
    .then(result => console.log(result))
// error

```

## Exercise #3 - Error Handling With `then/catch`

In this exercise you are provided with `handlePromise` function declaration. It receives 3 arguments: `promise: Promise`, `successHandler: (result) => void`, and `errorHandler: (error) => void`.

Your objectives are to:

- Implement it in such way that it attempts to resolve the argument `promise`
  - If `promise` is fulfilled, call `successHandler` with the result
  - If `promise` throws error, call `errorHandler` with the error
- Implement the above without using `async` function

Example:

```javascript
const successHandler = (result) => console.log(result);
const errorHandler = (error) => console.log(error);
const testPromise = isEven(1)
const testPromise2 = isEven(2)

handlePromise(testPromise, successHandler, errorHandler) // calls errorHandler()
handlePromise(testPromise2, successHandler, errorHandler) // calls successHandler()  
```

## Exercise #4 - Async Functions

In this Exercise, you are provided with `isEvenAsync` function declaration. Your objective is to implement it in such way that it works like `isEven` but is an `async` function.

Example:

```javascript
async function isEvenAsync(n) {...}

isEvenAsync(2)
    .then(result => console.log(result))
// {input: 2, success: true}

isEvenAsync(1)
    .then(result => console.log(result))
// error
```

## Exercise #5 - Error Handling With `async/await`

In this Exercise, you are provided with `handlePromiseAsync` function declaration. It receives `promise: Promise` as an argument and you can safely expect this input to be valid.

Your objectives are to:

- Make `handlePromiseAsync` an async function
  - If `promise` is fulfilled return `{data: {result}, errorMessage: null}`
  - If `promise` throws error return `{data: null, errorMessage: "Error Occurred!"}`
- Implement it in such way that it attempts to resolve the argument `promise`

Example:

```javascript
// async function

const testPromise = isEven(1)
const testPromise2 = isEven(2)

const { data, errorMessage } = await handlePromiseAsync(testPromise)
console.log(data) // null
console.log(errorMessage) // "Error Occurred!"

const { data, errorMessage } = await handlePromiseAsync(testPromise2)
console.log(data) // {input: 2, success: true}
console.log(errorMessage) // null

```
