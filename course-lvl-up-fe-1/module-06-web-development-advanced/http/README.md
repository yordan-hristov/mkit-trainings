# Module 6 - HTTP

## Introduction

Machine communication can be described as the process of exchanging information between two or more systems. The **HTTP protocol** streamlines communication of hypermedia documents such as **HTML**, i.e. it's designed for governing the **communication between web browsers and servers**.

[Learning Materials About This Topic](https://www.notion.so/mkit/HTTP-9398181e010841529abd2ba6ba51657d)

## Exercise #1 - HTTP Methods

In this Exercise, you are provided with `getData`, `postData`, `putData`, `deleteData` function declarations and API `https://jsonplaceholder.typicode.com`.

Your objectives are to:

- All functions should be asynchronous 
- Send GET request and get data about the post with given id, API endpoint is `/posts/{id}`. Use `getData` for this method.
- The function should receive a number as input and you should validate it. The number should be between 1 and 100 inclusive. If the input is invalid you should throw error.

Example:

```js
// Sample input
getData(1).then(res => console.log(res));

// Sample output
{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
```

- Send POST request and make new post, API endpoint is `/posts`. Use `postData` for this method.
- The function should receive an object as input and you should validate it. The object should have `userId`, `title`, `body` fields. If the input is invalid you should throw error.

```js
// Sample input
const input = {
    "userId": 1,
    "title": "Post title",
    "body": "Post body"
}
postData(input).then(res => console.log(res))

// Sample output
{
    "id": 13
}
```

- Send PUT request and overwrite post, API endpoint is `/posts/{id}`. Use `putData` for this method. The function should receive id and body as argument. Id should be number between 1 and 100.
- The function should receive a number and an object as input and you should validate it. The number should be between 1 and 100 inclusive. The object should have `userId`, `title`, `body` fields. If the input is invalid you should throw error.

```js
// Sample input
const input = {
    "userId": 1,
    "title": "Post title",
    "body": "Post body"
}
putData(30, input).then(res => console.log(res)),

// Sample output
{
    "id": 30,
}
```

- Send DELETE request and delete post, API endpoint is `/posts/{id}`. Use `deleteData` for this method. The function should receive id as argument. Id should be number between 1 and 100.
- The function should receive a number as input and you should validate it. The number should be between 1 and 100 inclusive. If the input is invalid you should throw error.

```js
// Sample input
deleteData(1).then(res => console.log(res));

// Sample output
{}
```

## Exercise 2 - Authentication

In this Exercise, you are provided with `login`, `authorizedRequest`, function declarations and API `http://restapi.adequateshop.com`. Link to the documentation of the API `https://www.appsloveworld.com/sample-rest-api-url-for-testing-with-authentication`.

Your objectives are to:
- All functions should be asynchronous
- You should send request to `/api/authaccount/login` endpoint.
- The `login` function should receive an object as input and you should validate it. The object should have `email` and `password` fields. If the input is invalid you should throw error.
- You should use the following credentials:
```js
// Credentials
email: "mkit_user@gmail.com"
password: 123456
```

Example:
```js
// Sample input
login({email: "mkit_user@gmail.com",password: 123456}).then(res => console.log(res))

// Sample output
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
- The function `authorizedRequest` should receive object as input and you can safely expect this input to be valid.
- First you should use the `login` function that you already declared and use the token from the object that it returns to make the authorized request
- authorizedRequest() should return object in the following format:
```js
// Sample input
authorizedRequest({email: "mkit_user@gmail.com",password: 123456}).then(res => console.log(res))

// Sample output
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
- The function should receive a string as input and you should validate it. If the input is invalid you should throw error.
- Connect to the websocket and send message on connecting. Use the argument as text of the message
- You should close the connection with websocket after one second.
- On closing you should send `Closing` message to the server
- The function should return the message, received as argument in the end

```js
//Sample input
webSockets('Example message').then(res => console.log(res))

//Sample output
'Example message'
```

## Exercise 4 - Advanced HTTP Methods

In this Exercise, you are provided with `getMethods`, `checkEndPoint`, `modifyData` function declarations and API `https://jsonplaceholder.typicode.com`.

Your objectives are to:
- You should use the correct method for each function.
- The function `getMethods` should receive a string as input and you should validate it. If the input is invalid you should throw error.
- In `getMethods` you should get all possible methods that are allowed to the endpoint, passed as argument. The function should return array of all allowed methods.
```js
//Sample input
getMethods('/posts').then(response => console.log(response)) 

//Sample output
["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"]
```

- The function `checkEndPoint` should receive a string as input and you should validate it. If the input is invalid you should throw error.
- In `checkEndPoint` function you should check if endpoint exists. The function should return status code of the response.
```js
//Sample input
getMethods('/invalid').then(response => console.log(response))

//Sample output
404
```

- The function `modifyData` should receive a number and an object as input and you should validate it. The number should be between 1 and 100 inclusive. The object should have only one of `userId`, `title`, `body` fields. If the input is invalid you should throw error.
- In `modifyData` function you should send request to `/posts` and change only one field of item. The function should return the response.
```js
//Sample input
modifyData(48, {title: 'title'})

// Sample output
{
    id: 1, 
    userId: 5, 
    title: 'title', 
    body: 'ut voluptatem illum ea doloribus itaque eos'
}
```

- You should validate input for each function.
