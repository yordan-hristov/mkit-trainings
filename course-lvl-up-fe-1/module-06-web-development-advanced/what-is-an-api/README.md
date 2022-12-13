# Module 6 - What Is an API?

## Introduction

Application programming interfaces (**APIs**) allow two or more applications to talk to each other. Moreover, **APIs are interfaces** that simplify the communication between not just apps but functionalities. Think of **APIs** the storefront of a shop. You may not know what happens behind the counter but you know how to buy a soda. See [MDN's example of APIs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction#what_are_apis) to get a more vivid explanation.

[Learning Materials About This Topic](https://www.notion.so/mkit/What-Is-an-API-3fb67bf1782c483b8122bf034e34e082)

## Exercise #1 - Fetch Currency With Soap

In this Exercise, you are provided with `getCurrency` function declaration. It will receive an argument `countryCode: string` as input and you can safely expect this input to be valid.

Your objectives are to:

- Use `fetch()` method
- Make a post request to a SOAP endpoint `"http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso"`
- Include a `Content-Type` header with correct value for `XML` and `charset`
- Include in the body:
  - soap envelope with `xml soap namespace` with a value of `"http://schemas.xmlsoap.org/soap/envelope/"`
  - soap body should have a `CountryCurrency` with a value `http://www.oorsprong.org/websamples.countryinfo` element in which you should request with a `sCountryISOCode` equals to `countryCode` provided argument.
- Return response as text

Example:

```javascript
const usCurrencyResponse = getCurrency("US");
usCurrencyResponse.then((res) => console.log(res));
// <?xml version="1.0" encoding="utf-8"?>
// <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
//   <soap:Body>
//     <m:CountryCurrencyResponse xmlns:m="http://www.oorsprong.org/websamples.countryinfo">
//       <m:CountryCurrencyResult>
//         <m:sISOCode>USD</m:sISOCode>
//         <m:sName>Dollars</m:sName>
//       </m:CountryCurrencyResult>
//     </m:CountryCurrencyResponse>
//   </soap:Body>
// </soap:Envelope>

const bgCurrencyResponse = getCurrency("BG");
bgCurrencyResponse.then((res) => console.log(res));
// <?xml version="1.0" encoding="utf-8"?>
// <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
//   <soap:Body>
//     <m:CountryCurrencyResponse xmlns:m="http://www.oorsprong.org/websamples.countryinfo">
//       <m:CountryCurrencyResult>
//         <m:sISOCode>BGN</m:sISOCode>
//         <m:sName>Leva</m:sName>
//       </m:CountryCurrencyResult>
//     </m:CountryCurrencyResponse>
//   </soap:Body>
// </soap:Envelope>

const ukCurrencyResponse = getCurrency("GB");
ukCurrencyResponse.then((res) => console.log(res));
// <?xml version="1.0" encoding="utf-8"?>
// <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
//   <soap:Body>
//     <m:CountryCurrencyResponse xmlns:m="http://www.oorsprong.org/websamples.countryinfo">
//       <m:CountryCurrencyResult>
//         <m:sISOCode>GBP</m:sISOCode>
//         <m:sName>Great Brittain Pounds</m:sName>
//       </m:CountryCurrencyResult>
//     </m:CountryCurrencyResponse>
//   </soap:Body>
// </soap:Envelope>
```

## Exercise #2 - Social Media

In this Exercise, you are provided with `socialMedia` function declaration. It will receive an optional arguments `id?: number` and an required argument `comments: boolean` as input and you can safely expect this input to be valid.

Your objectives are to:

- Implement `socialMedia` in such a way that it calls an `API` with `base url: https://jsonplaceholder.typicode.com`
- Implement it in a way that if `id` is **NOT** provided it should return all `100` posts
- Implement it in a way that if `id` is provided it should return only one post
- Implement it in a way that if both `id` and `comments = true` you should return all comments connected to a post
- Return the response JSON

Example:

```javascript
const postsResponse = socialMedia();
postsResponse.then((posts) => console.log(posts)); // [{ "userId": 1,"id": 1, "title": "sunt... }, ...]

const postResponse = socialMedia(1);
postResponse.then((post) => console.log(post)); // { "userId": 1, "id": 1, "title": "sunt... }

const commentsResponse = socialMedia(1, true); // [{ "postId": 1, "id": 1, "name": "id labore ex et... }, ...]
```

## Exercise #3 - CRUD Operations

In this Exercise, you are provided with `createPost`, `getPost`, `updatePost`, and `deletePost` function declarations. Every function, except `createPost`, should receive an argument `id: number` as input and you can safely expect this input to be valid. `createPost` will **NOT** receive any arguments. You are also provided with a `baseUrl` variable equals to `https://jsonplaceholder.typicode.com`.

Request Body:

```typescript
{
  title : string,
  body: string,
  userId: number
}
```

Your objectives are to:

- Implement `createPost` in such a way that it creates a new post, with:
  - `userId` equals `1`.
  - `title` equals `"Harry Potter and the Sorcerer's Stone"`.
  - `body` equals `"Harry Potter and the Philosopher's Stone is a 1997 fantasy novel written by British author J. K. Rowling."`.
    and returns it as `json`.
- Implement `getPost` in such a way that it returns the new created post from `createPost`, by providing it's `id` as input, and returns it as `json`.
- Implement `updatePost` in such a way that it updates a post's title to `"Harry Potter and the Philosopher's Stone"` and returns the result as `json`.
- Implement `deletePost` in such a way that it deletes a post and returns the result as `json`. ( The API always returns an empty object on DELETE )

_Pro tip: Be careful with the `request headers`_

Example:

```js
createPost().then((post) => console.log(post));
// {
//  id: 101,
//  title: "Harry Potter and the Sorcerer's Stone",
//  body: "Harry Potter and the Philosopher's Stone is a 1997 fantasy novel written by British author J. K. Rowling.",
//  userId: 1
// }

getPost(1).then((post) => console.log(post));
// {
// userId: 1,
// id: 1,
// title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
// body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// }

updatePost(1).then((post) => console.log(post));
// {
//  id: 1,
//  title: "Harry Potter and the Philosopher's Stone",
// }

deletePost().then((post) => console.log(post)); // {}
```

## Exercise #4 - Status Codes

In this exercise you are provided with a `getPostById` function declaration and a `baseUrl` variable equals to `https://jsonplaceholder.typicode.com`. It will receive an argument `id: number` as input and you can safely expect this input to be valid.

Your objective is to:

- Implement it in such a way that it throws an `{ message: "No post found with this id!", statusCode: 404 }"` `Error` if the provided `id` is not found.
- Implement it in such a way that it throws an `{ message: "Id must be a number!", statusCode: 400 }` `Error` if the provided `id` is not of type of `number`.
- Implement it in such a way that it returns `{ message: "Success!", statusCode: 200 }` if a post is found.
- Choose your return value based on status code.

Example:

```javascript
getPostById(9999).then((res) => console.log(res)); // { message: "No post found with this id!", statusCode: 404 }"
getPostById("test").then((res) => console.log(res)); // { message: "Id must be a number!", statusCode: 400 }
getPostById(1).then((res) => console.log(res)); // { message: "Server error!", statusCode: 500 } (On server error)
getPostById(1).then((res) => console.log(res)); // { message: "Success!", statusCode: 200 }
```
