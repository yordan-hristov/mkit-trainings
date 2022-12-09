# Module 6 - HTTP

## Introduction

Machine communication can be described as the process of exchanging information between two or more systems. The **HTTP protocol** streamlines communication of hypermedia documents such as **HTML**, i.e. it's designed for governing the **communication between web browsers and servers**.

[Learning Materials About This Topic](https://www.notion.so/mkit/HTTP-9398181e010841529abd2ba6ba51657d)

## Exercise #1 - HTTP Methods

In this Exercise, you are provided with `getData`, `postData`, `putData`, `deleteData` function declarations and API `https://jsonplaceholder.typicode.com`.

Your objectives are to:

- All functions should be asynchronous 
- Send GET request and get data about the post with given id, API endpoint is `/posts/{id}`. Use `getData` for this method. The function should receive id as argument, which should be number between 1 and 100.

Example:

```js
// Sample input
1

// Sample output
{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
```

- Send POST request and make new post, API endpoint is `/posts`. Use `postData` for this method. The function should receive body as argument, which should be in the following format:

```js
// Sample input
{
    "userId": 1,
    "title": "Post title",
    "body": "Post body"
}

// Sample output
{
    "id": 13
}
```

- Send PUT request and overwrite post, API endpoint is `/posts/{id}`. Use `putData` for this method. The function should receive id and body as argument. Id should be number between 1 and 100.

```js
// Sample input
30,
{
    "userId": 1,
    "title": "Post title",
    "body": "Post body"
}

// Sample output
{
    "id": 30,

}
```

- Send DELETE request and delete post, API endpoint is `/posts/{id}`. Use `deleteData` for this method. The function should receive id as argument. Id should be number between 1 and 100.

```js
// Sample input
1

// Sample output
{}
```