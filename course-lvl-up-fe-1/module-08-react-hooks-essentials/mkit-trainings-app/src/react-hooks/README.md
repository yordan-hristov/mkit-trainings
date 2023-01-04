# Module 8 - React Hooks

## Introduction

As stated by the official **React** documentation, [**Hooks** solve a variety of seemingly unconnected problems in **React**](https://reactjs.org/docs/hooks-intro.html#motivation). The biggest advantage is that **Hooks** allow us to use **stateful logic** in **function components** and moreover reuse this same logic across multiple **components**.

[Learning Materials About This Topic](https://www.notion.so/mkit/React-Hooks-98551a866ce4445483fbc94a170ebd9f)

## Exercise #1 - Mouse Position

In this Exercise you are provided with `useMousePosition` React Custom hook. It will not receive any arguments as input and you can safely expect this to be valid.

Your objectives are to:

- Implement `useMousePosition` in a way that returns the current mouse position on the page in format `{ x: number; y: number }`
- Implement `useMousePosition` in a way that return the current mouse position on every rerender

Example:

```javascript
const { x, y } = useMousePosition();

// clientX: 100, clientY: 100
console.log(x); // 100
console.log(y); // 100

// clientX: 30, clientY: 20
console.log(x); // 30
console.log(y); // 20

// clientX: 50, clientY: 80
console.log(x); // 50
console.log(y); // 80
```

## Exercise #2 - useDebounce

In this Exercise you are provided with `useDebounce` React Custom hook. It will receive `value: string | number, delay: number` as input and you can safely expect this input to be valid.

Your objectives are to:

- Return `undefined` before delay has expired
- Return `value` after `delay` has expired

Example:

```javascript
const debouncedValue100 = useDebounce(100, 3000);
// second one
console.log(debouncedValue); // undefined
// second two
console.log(debouncedValue); // undefined
// second three
console.log(debouncedValue); // 100

const debouncedValueJohn = useDebounce("John", 5000);
// second one
console.log(debouncedValue); // undefined
// second two
console.log(debouncedValue); // undefined
// second three
console.log(debouncedValue); // undefined
// second four
console.log(debouncedValue); // undefined
// second five
console.log(debouncedValue); // John
```

## Exercise #3 - useLocalStorage

In this Exercise you are provided with `useLocalStorage` React Custom hook. It will receive `key: string, value: string` as input and you can safely expect this input to be valid. It should return an array with 3 elements `[storedValue: string, setValue: (value) => void], removeValue: () => void`.

Your objectives are to:

- Implement `useLocalStorage` in a way that it stores data in local storage
- `setValue` should change stored value
- `removeValue` should remove stored data

Example:

```javascript
const [storedValue, setValue, removeValue] = useLocalStorage("name", "John");

console.log(window.localStorage.getItem("name")); // John

setValue("Peter");
console.log(window.localStorage.getItem("name")); // Peter

removeValue();
console.log(window.localStorage.getItem("name")); // null
```

## Exercise #4 - Online Status

In this Exercise you are provided with `useStatus` React Custom hook. It will not receive any arguments and you can safely expect this to be valid.

Your objectives are to:

- Implement `useStatus` in a way that it returns `true` or `false` depending on client's status, online or offline

Example:

```javascript
const status = useStatus();

//on connected to network
console.log(status); // true

//on disconnected to network
console.log(status); // false
```

## Exercise #5 - useApi

In this Exercise you are provided with `useApi` React Custom hook. It will receive an argument `url: string` as input and you can safely expect this input to be valid. It should return an object in form `{ data: Object, loading: boolean, error: Object, refetch: () => void }`

Your objectives are to:

- Implement useApi in a way that it fetches data from `url`
  - It should fetch on mount
  - It should change `loading` status to true and false depending of promise pending
- It should return fetched response in `data`
  - It should return data as null if error occurs
- It should catch the error and return it as `error`
  - It should return error as null if error does not occur
- It should return a refetch function that refetch the response when it is called
  - `refetch` should change also change `loading`, `data` and `error` state depending on promise state

Example:

```javascript
const { data, loading, error, refetch } = useApi("https://www.example.com");

// On Pending
console.log(data); // null
console.log(loading); // true
console.log(error); // null

// On Fulfilled
console.log(data); // {...}
console.log(loading); // false
console.log(error); // null

// On Rejected
console.log(data); // null
console.log(loading); // false
console.log(error); // {...}

refetch();

// On Pending
console.log(data); // null
console.log(loading); // true
console.log(error); // null

// On Fulfilled
console.log(data); // {...}
console.log(loading); // false
console.log(error); // null

// On Rejected
console.log(data); // null
console.log(loading); // false
console.log(error); // {...}
```
