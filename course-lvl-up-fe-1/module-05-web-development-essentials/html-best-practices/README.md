# Module 5 - HTML Best Practices

## Introduction

HTML is the standard markup language for websites and web applications. There are several especially valuable best practices to follow when working with HTML, i.e. performance, SEO, accessibility, and general HTML structuring.

[Learning Materials About This Topic](https://www.notion.so/mkit/HTML-Best-Practices-de8a951896534f1088fa0d44e8cf5a26)

## Exercise 1 - Document Structure

In this Exercise, you are provided with blank `index.html` file.

Your objectives are to:

- Create a page following the standard html document structure
- The page should have:
  - title `HTML Best Practices`
  - `header` containing:
    - `nav` with "Home" and "About" links
  - `main` containing:
    - `h1` with "HTML Best Practices" text content
  - `footer` containing:
    - `p` with "Author: John Doe" text content
    - `a` with "Contact" text content that opens the default mail client and can send email to `john.doe@email.com`

## Exercise 2 - SEO Meta Tags

In this Exercise, you continue working on `index.html`.

Your objectives are to:

- Add metadata about:
  - `charset` - "UTF-8"
  - `description` - "Html best practices exercises"
  - `keywords` - "html,javascript,training"
  - `author` - "John Doe"
  - `viewport` - "width=device-width, initial-scale=1.0"
  - `robots` - "noindex,nofollow"

## Exercise 3 - Stylesheet And Script Loading

In this Exercise, you continue working on `index.html`.

Your objectives are to:

- Load `styles.css` located in `_resources`
- Load `module.01` located in `_resources`, in such way that it is downloaded during the html parsing and executed right after it is download
- Load `module.02` located in `_resources`, in such way that it blocks the html parsing until it is downloaded and executed
- Load `module.03` located in `_resources`, in such way that it is downloaded during the html parsing and executed after the html is parsed

## Exercise 4 - Forms

In this Exercise, you continue working on `index.html`. You are provided with the following html code that you have to copy and paste in `main`:

```html
<form>
  <label>Email:</label>
  <input />

  <label>Name:</label>
  <input />

  <label>Position:</label>
  <input />

  <label>Password:</label>
  <input />

  <label>Age:</label>
  <input />

  <label>Description:</label>
  <textarea></textarea>

  <p>Favorite language:</p>

  <input value="HTML">
  <label>HTML</label>

  <input value="CSS">
  <label>CSS</label>

  <input value="JavaScript">
  <label>JavaScript</label>

  <input value="Submit">
</form>
```

Your objectives are to:

- Add all necessary attributes to all `label` and `input` tags for best accessibility
- Add the following validations:
  - email:
    - email
    - required
  - name:
    - text
    - minimum 3 characters
    - maximum 20 characters
    - required
  - position:
    - text
    - default value: "Student"
    - can not be edited
  - password:
    - password
    - minimum 8 characters
    - maximum 20 characters
    - required
  - age:
    - number
    - positive number
    - required
  - description:
    - maximum 100 characters
  - favorite language:
    - radio
    - default selected JavaScript
- Input with value "Submit" should be able to submit the form
- Do not modify the form structure
