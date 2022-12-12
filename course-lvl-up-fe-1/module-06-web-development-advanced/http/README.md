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


## Exercise 2 - Authentication

In this Exercise, you are provided with `login`, `authorizedRequest`, function declarations and API `http://restapi.adequateshop.com`. Link to the documentation of the API `https://www.appsloveworld.com/sample-rest-api-url-for-testing-with-authentication`.

Your objectives are to:
- All functions should be asynchronous
- First you should send `POST` request to `/api/authaccount/login` endpoint.
- You should use the following credentials:
```js
// Credentials
email: "mkit_user@gmail.com"
password: 123456
```

- login() should return data in the following format:
```js
// Response from login()
{
  code: 0,
  message: 'success',
  data: {
    Id: 193690,
    Name: 'MK_IT_User',
    Email: 'mkit_user@gmail.com',
    Token: '3f468069-2382-408d-a8b3-2d7a18509ea4'
  }
}
```

- In authorizedRequest() function you should make authorized request to `/api/users/{id}` endpoint and get data about user with id `193695`
- authorizedRequest() should return object in the following format:
```js
{
    id: 193695,
    name: 'User',
    email: 'email@gmail.com',
    profilepicture: 'http://restapi.adequateshop.com/Media//Images/userimageicon.png',
    location: 'BG',
    createdat: '2030-12-09T15:30:43.5753333'
}
```

## Exercise 3 - Web Sockets

In this Exercise, you are provided with `webSockets` function declarations and WebSocket API `wss://demo.piesocket.com/v3/channel_123?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self`.

Your objectives are to:
- The function should accept one argument of type string
- Connect to the websocket and send message on connecting. Use the argument as text of the message
- Validate message. It should be string
- You should close the connection with websocket after one second.
- On closing you should send `Closing` message
- The function should return the message, received as argument in the end

