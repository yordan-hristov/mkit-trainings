- [x] - Examples should have a provided language (js, ts, etc)
- [x] - Quests should be course-lvlup-fe-1
- [x] - Naming of folders in course should be `0<number-of-module>-<name-module-in-kebab-case>` e.g. - `module-01-oop-fp-vsc` | `module-10-advanced-state-management`
- [x] - Topic folders should be lowercase
- [x] - Introduction should be copied from notion for every topic
- [x] - When using an acronym use it with its real meaning and then with an acronym e.g. `Functional Programming(FP)`
- [x] - `Learning Materials About This Topic` a link to the topic in notion under introduction
- [x] - README replace `Quest` in title with `Module`
- [x] - Replace `Assessment` with `Exercise` everywhere
- [x] - `Exercise` should be capitalized everywhere
- [x] - All exercises should have examples with input and output
- [x] - After argument's description it should be said that valid `input` will be safely provided when testing.
- [x] - Every Exercise should include documentation about argument's types and validity when testing.
    e.g. `Every function should receive an array of numbers as input and you can safely expect this input to be valid.`
- [x] - In the description of every exercise your should follow `provided with <name-of-function> function declaration` as a convention.
- [x] - `Your tasks` should be `Your objectives` 
- [x] - Follow oxford comma convention
- [ ] - In exercises the different tasks should be described as bullets
- [x] - `method` should be renamed to `function` everywhere except in OOP related sections / OOP context.
- [x] - Consistency in figure of speech
- [x] - Output result should be on the same line or with `...` in between
- [ ] - Always console.log output function result e.g. `console.log(solve(123))`
- [ ] - You can use -> `_Pro tip: Use something_` if needed
- [ ] - Functions in index should be with documentation
  - [ ] Use multi-line comments to separate the code in a more readable way
  - [ ] Eventually consider adding the types of the params
  - [ ] Every exercise source file should end with an area DO NOT EDIT (where applicable)
- [ ] - Tests:
  - [ ] - Tests description should have full names of exercises.
  - [ ] - Every test should start with an "is defined" test
  - [ ] - `Should` convention must be used
  - [ ] - Tests should be ordered by meaning/logically
  - [ ] - Should use Arrange, Act, Assert (AAA Pattern)
  - [ ] - Empty lines between AAA sections

---

# Example of an Exercise

## Exercise #2 - Pure Functions

In this Exercise you are provided with `sort` function declaration. The function should receive an array of objects as input and you can safely expect this input to be valid.

Your objectives are to:

- Sort the array alphabetically by `name`
- If there are equal names, sort by `age` in `ascending` order
- Do the above without mutating the original array

Objects array:

```javascript
// Sample input
[
  {
    name: "John", // name: string
    age: 42, // age: number
  },
  {
    name: "Bob",
    age: 21,
  },
  {
    name: "John",
    age: 22,
  },
];

// Sample output
[
  {
    name: "Bob", // name: string
    age: 21, // age: number
  },
  {
    name: "John",
    age: 22,
  },
  {
    name: "John",
    age: 42,
  },
];
```

---