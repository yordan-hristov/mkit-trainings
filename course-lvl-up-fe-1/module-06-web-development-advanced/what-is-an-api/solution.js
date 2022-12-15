const fetch = require("node-fetch");

const baseUrl = "https://jsonplaceholder.typicode.com";

/**
 * Exercise 1 - Fetch Currency With Soap
 *
 * @param {string} countryCode
 * @return {Promise<string>}
 */
async function getCurrency(countryCode) {
  const response = await fetch(
    "http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso",
    {
      method: "POST",
      headers: {
        "Content-Type": "text/xml;charset=UTF-8",
      },
      body: `
    <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
            <CountryCurrency xmlns="http://www.oorsprong.org/websamples.countryinfo">
                <sCountryISOCode>${countryCode}</sCountryISOCode>
            </CountryCurrency>
        </soap:Body>
    </soap:Envelope>
    `,
    }
  );

  const responseAsText = await response.text();

  return responseAsText;
}

/**
 * Exercise 2 - Social Media
 *
 * @param {number=} id
 * @param {boolean=} comments
 * @returns {Promise<Array<{
* userId: number;
* id: number;
* title: string;
* body: string;
* }>| {
* userId: number;
* id: number;
* title: string;
* body: string;
* }
* >}
*/
async function socialMedia(id, comments) {
  if (id && comments) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );

    return response.json();
  }

  if (id) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    return response.json();
  }

  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  return response.json();
}

/**
 * Exercise 3 - CRUD Operations
 *
 * @returns {Promise<{
* userId: number;
* id: number;
* title: string;
* body: string;
* }>}
*/
async function createPost() {
  const result = await fetch(`${baseUrl}/posts`, {
    method: "POST",
    body: JSON.stringify({
      title: "Harry Potter and the Sorcerer's Stone",
      body: "Harry Potter and the Philosopher's Stone is a 1997 fantasy novel written by British author J. K. Rowling.",
      userId: 1,
    }),
    headers: { "Content-Type": "application/json; charset=UTF-8" },
  });

  return result.json();
}

/**
 *
 * @param {number} id
 * @returns {Promise<{
* userId: number;
* id: number;
* title: string;
* body: string;
* }>}
*/
async function getPost(id) {
  if (typeof id !== "number") {
    throw new Error("Id should be a number!");
  }

  const result = await fetch(`${baseUrl}/posts/${id}`);

  return result.json();
}

/**
 *
 * @param {number} id
 * @returns {Promise<{
* id: number;
* title: string;
* }>}
*/
async function updatePost(id) {
  if (typeof id !== "number") {
    throw new Error("Id should be a number!");
  }

  const result = await fetch(`${baseUrl}/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title: "Harry Potter and the Philosopher's Stone",
    }),
    headers: { "Content-Type": "application/json; charset=UTF-8" },
  });

  return result.json();
}

/**
 *
 * @param {number} id
 * @returns {Promise<{}>}
 */
async function deletePost(id) {
  if (typeof id !== "number") {
    throw new Error("Id should be a number!");
  }

  const result = await fetch(`${baseUrl}/posts/${id}`, {
    method: "DELETE",
  });

  return result.json();
}

/**
 * Exercise 4 - Status Codes
 *
 * @param {number} id
 * @returns {Promise<{
* message: string;
* statusCode: number;
* }>}
*/
async function getPostById(id) {
  if (typeof id !== "number") {
    throw new Error({ message: "Id must be a number!", statusCode: 400 });
  }

  const result = await fetch(`${baseUrl}/posts/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
  });

  const { status } = result;

  if (status === 200) {
    return { message: "Success!", statusCode: 200 };
  }

  if (status === 404) {
    throw new Error({
      message: "No post found with this id!",
      statusCode: 404,
    });
  }
}