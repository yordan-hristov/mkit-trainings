# Module 5 - Sass

## Introduction

CSS is powerful but it still lacks some features and syntax sugar that can help you be **even more productive**. Various CSS **preprocessors** came up as supersets of the standard CSS and the most notable being **Sass** and its lightweight cousin **SCSS**.

[Learning Materials About This Topic](https://www.notion.so/mkit/Sass-369999512b344127b532f7e242c4d656)

## Exercise #1 - Transpile File

In this Exercise, you are provided with `transpileFile` function declarations and `exercise_1.scss` file.

Your objectives are to:

- Implement function that does not receives arguments.
- Implement function as asynchronous.
- Transpile the `exercise_1.sass` to `css` file.
- Use relative path to the file.
- Use `sass` to transpile the file.
- Not use `compile()` function of `sass` object.
- Return the string from the css file.

Example:

```js
transpileFile().then(res => console.log(res))// h1 {\n  color: #ffffff;\n}\nh1 .test {\n  color: #000000;\n}
```

## Exercise #2 - Apply SCSS Styles

In this Exercise, you are provided with `exercise_2.scss`.

Your objectives are to:

- Create class with name `wrapper` that:
  - Has rounded borders (`10px`)
  - Each text in paragraph in the class has red color
  - Each container background to be in blue
- Create class with name `item` that:
  - Has text in `cyan` color
  - Has white background
  - If the item with this class has id `special`, text color need to be in `green` color
- Format file before running tests

## Exercise #3 - Apply SASS Styles

In this Exercise, you are provided with `exercise_3.sass`.

Your objectives are to:

- Create class with name `container` that:
  - Has 1px blue border
  - Each text in paragraph in the class has blue color
  - Each div background should be white
- Create class with name `title` that:
  - Has text in red color
  - If the element with this class has parent with class `container`, text should be underlined, else should not be underlined with dots
- Create class with name `item` that:
  - Paragraphs with this class should have green background
  - The first Button with this class should have red background
  - When the element with this class is hovered, it should have cyan background
