# Module 5 - Sass

## Introduction

CSS is powerful but it still lacks some features and syntax sugar that can help you be **even more productive**. Various CSS **preprocessors** came up as supersets of the standard CSS and the most notable being **Sass** and its lightweight cousin **SCSS**.

[Learning Materials About This Topic](https://www.notion.so/mkit/Sass-369999512b344127b532f7e242c4d656)

## Exercise #1 - Transpile File

In this Exercise, you are provided with `transpileFile` function declarations and `exercise_1.sass` file.

Your objectives are to:

- Implement function that does not receives arguments.
- Implement function as asynchronous.
- Transpile the `exercise_1.sass` to `css` file.
- Use `sass` to transpile the file.
- Not use `compile()` function of `sass` object.
- Return the string from the css file.

Example:

```js
transpileFile().then(res => console.log(res))// h1 {\n  color: #ffffff;\n}\nh1 .test {\n  color: #000000;\n}
```