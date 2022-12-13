# Module 6 - HTTP

## Introduction

Machine communication can be described as the process of exchanging information between two or more systems. The **HTTP protocol** streamlines communication of hypermedia documents such as **HTML**, i.e. it's designed for governing the **communication between web browsers and servers**.

[Learning Materials About This Topic](https://www.notion.so/mkit/HTTP-9398181e010841529abd2ba6ba51657d)

## Exercise #1 - HTTP Methods

In this Exercise, you are provided with `getData`, `postData`, `putData`, `deleteData` function declarations and API `https://jsonplaceholder.typicode.com`.

Your objectives are to:
- Implement all functions as asynchronous
- Implement `getData` that:
  - Receive a number as input and you should validate it. The number should be between 1 and 100 inclusive. If the input is invalid you should throw error.
  - Send GET request and get data about the post with given id, API endpoint is `/posts/{id}`.
- Implement `postData` that:
  - Receive an object as input and you should validate it. The object should have `userId`, `title`, `body` fields. If the input is invalid you should throw error.
  - Send POST request and make new post, API endpoint is `/posts`.
- Implement `putData` that:
  - Receive a number and an object as input and you should validate it. The number should be between 1 and 100 inclusive. The object should have `userId`, `title`, `body` fields. If the input is invalid you should throw error.
  - Send PUT request and overwrite post, API endpoint is `/posts/{id}`.
- Implement `deleteData` that:
  - Receive a number as input and you should validate it. The number should be between 1 and 100 inclusive. If the input is invalid you should throw error.
  - Send DELETE request and delete post, API endpoint is `/posts/{id}`. 
- You should return the response.

Example:
```js
const exampleInput = {
    "userId": 1,
    "title": "Post title",
    "body": "Post body"
}

getData(1).then(res => console.log(res)); //...
// {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// }
postData(exampleInput).then(res => console.log(res)); //...
// {
//     "id": 101
//     "userId": 1,
//     "title": "Post title",
//     "body": "Post body"
// }
putData(1, exampleInput).then(res => console.log(res)); // {id: 1}
deleteData(1).then(res => console.log(res)); // {}
```

## Exercise 2 - Authentication

In this Exercise, you are provided with `login`, `authorizedRequest`, function declarations and API `http://restapi.adequateshop.com`. Link to the documentation of the API `https://www.appsloveworld.com/sample-rest-api-url-for-testing-with-authentication`.

Your objectives are to:
- Implement all functions as asynchronous.
- You should return the response.
- Implement `login` that:
  - Receive an object as input and you should validate it. The object should have `email` and `password` fields. If the input is invalid you should throw error.
  - Should send request to `/api/authaccount/login` endpoint.
  - Should use credentials given below:
- Implement `authorizedRequest` that:
  - Receive object as input and you can safely expect this input to be valid.
  - Should make authorized request to `/api/users/{id}` endpoint and get data about user with id `193695`
  - First you should use the `login` function that you already declared and use the token from the object that it returns to make the authorized request.
  
```js
// Credentials
email: "mkit_user@gmail.com"
password: 123456
```

Example:
```js
login({email: "mkit_user@gmail.com",password: 123456}).then(res => console.log(res))//...
// {
//   code: 0,
//   message: 'success',
//   data: {
//     Id: 193690,
//     Name: 'MK_IT_User',
//     Email: 'mkit_user@gmail.com',
//     Token: '3f468069-2382-408d-a8b3-2d7a18509ea4'
//   }
// }
authorizedRequest({email: "mkit_user@gmail.com",password: 123456}).then(res => console.log(res))//...
// {
//     id: 193695,
//     name: 'User',
//     email: 'email@gmail.com',
//     profilepicture: 'http://restapi.adequateshop.com/Media//Images/userimageicon.png',
//     location: 'BG',
//     createdat: '2030-12-09T15:30:43.5753333'
// }
```

## Exercise 3 - Web Sockets

In this Exercise, you are provided with `webSockets` function declarations and WebSocket API `wss://demo.piesocket.com/v3/channel_123?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self`.

Your objectives are to:
- Implement all functions as asynchronous.
- The function should receive a string as input and you should validate it. If the input is invalid you should throw error.
- Connect to the websocket and send message on connecting. Use the argument as text of the message.
- Close the connection with websocket after one second.
- On closing you should send `Closing` message to the server.
- The function should return the message, received as argument in the end.

```js
webSockets('Example message').then(res => console.log(res))// Example message
```

## Exercise 4 - Advanced HTTP Methods

In this Exercise, you are provided with `getMethods`, `checkEndPoint`, `modifyData` function declarations and API `https://jsonplaceholder.typicode.com`.

Your objectives are to:
- Implement all functions as asynchronous.
- You should use the correct method for each function.
- Implement `getMethods` that:
  - Receive a string as input and you should validate it. If the input is invalid you should throw error.
  - Should get all possible methods that are allowed to the endpoint, passed as argument. 
  - Should return array of all allowed methods.
- Implement `checkEndPoint` that:
  - Receive a string as input and you should validate it. If the input is invalid you should throw error.
  - Should check if endpoint exists. 
  - Should return status code of the response.
- Implement `modifyData` that:
  - Receive a number and an object as input and you should validate it. The number should be between 1 and 100 inclusive. The object should have only one of `userId`, `title`, `body` fields. If the input is invalid you should throw error.
  - Should send request to `/posts` and change only one field of item. 
  - Should return the response.

Example:

```js
getMethods('/posts').then(response => console.log(response))// ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"]
getMethods('/invalid').then(response => console.log(response))// 404
modifyData(48, {title: 'title'})//...
// {
//     id: 1, 
//     userId: 5, 
//     title: 'title', 
//     body: 'ut voluptatem illum ea doloribus itaque eos'
// }
```
