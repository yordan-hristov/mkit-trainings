const WebSocket = require("ws");

/**
 * Exercise 1 - Send GET Request
 */

const apiForExercise1 = "https://jsonplaceholder.typicode.com";

async function getData(id) {
  if (typeof id !== "number") {
    throw Error("Invalid input");
  } else if (id <= 0 || id > 100) {
    throw Error("Invalid input");
  }

  const result = fetch(`${apiForExercise1}/posts/${id}`)
    .then((response) => response.json())
    .then((data) => data);

  return result;
}

async function postData(body) {
  if (typeof body !== "object") {
    throw Error("Invalid input");
  } else if ([body.userId, body.title, body.body].includes(undefined)) {
    throw Error("Invalid input");
  }
  const result = fetch(`${apiForExercise1}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application-json",
    },
    body,
  })
    .then((response) => response.json())
    .then((data) => data);
  return result;
}

async function putData(id, body) {
  if (typeof body !== "object") {
    throw Error("Invalid input");
  } else if ([body.userId, body.title, body.body].includes(undefined)) {
    throw Error("Invalid input");
  }

  if (typeof id !== "number") {
    throw Error("Invalid input");
  } else if (id <= 0 || id > 100) {
    throw Error("Invalid input");
  }

  const result = fetch(`${apiForExercise1}/posts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application-json",
    },
    body,
  })
    .then((response) => response.json())
    .then((data) => data);
  return result;
}

async function deleteData(id) {
  if (typeof id !== "number") {
    throw Error("Invalid input");
  } else if (id <= 0 || id > 100) {
    throw Error("Invalid input");
  }

  const result = fetch(`${apiForExercise1}/posts/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => data);

  return result;
}

/**
 * Exercise 2 - Authentication
 */

const apiForExercise2 = "http://restapi.adequateshop.com";
const credentials = { email: "mkit_user@gmail.com", password: 123456 };
const userData = {
  Id: 193690,
  Name: "MK_IT_User",
  Email: "mkit_user@gmail.com",
  password: "123456",
};
const userId = 193695;

async function login(body) {
  if (typeof body !== "object") {
    throw Error("Invalid input");
  } else if ([body.email, body.password].includes(undefined)) {
    throw Error("Invalid input");
  }
  const result = fetch(`${apiForExercise2}/api/authaccount/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((data) => data);
  return result;
}

async function authorizedRequest(userData) {
  const authData = await login(userData);
  const token = authData.data.Token;

  const result = fetch(`${apiForExercise2}/api/users/${userId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => data);

  return result;
}

/**
 * Exercise 3 - Web Sockets
 */

async function webSockets(message) {
  if (typeof message !== "string") {
    throw Error("Invalid input");
  }

  const socket = new WebSocket(
    "wss://demo.piesocket.com/v3/channel_123?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self"
  );

  socket.on("open", () => {
    socket.send(message);
  });

  setTimeout(() => {
    socket.send("Closing");
    socket.close();
  }, 1000);

  return message;
}

/*********************************************
 * DO NOT MODIFY THIS AREA
 *
 * This area is used by the automated tests.
 ********************************************/

module.exports = {
  getData,
  postData,
  putData,
  deleteData,
  login,
  authorizedRequest,
  webSockets,
};
