# Module 6 - HTTP

## Introduction

Machine communication can be described as the process of exchanging information between two or more systems. The **HTTP protocol** streamlines communication of hypermedia documents such as **HTML**, i.e. it's designed for governing the **communication between web browsers and servers**.

[Learning Materials About This Topic](https://www.notion.so/mkit/HTTP-9398181e010841529abd2ba6ba51657d)

## Exercise #1 - Send GET Request

In this Exercise you are provided with `getPostData` function and API `https://jsonplaceholder.typicode.com`. Function should receive id of type number and return data about the post with given id.

Your objectives are to:

- Send GET request and get data about the post with given id, API endpoint is `/posts/{id}`
- Post ids should be between 1 and 100 and should be numbers, otherwise should throw error
- Function should not be asynchronous 

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