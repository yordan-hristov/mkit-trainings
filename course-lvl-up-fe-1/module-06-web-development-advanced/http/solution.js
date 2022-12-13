const WebSocket = require("ws");

/**
 * Exercise 1 - Send GET Request
 * 
 * getData()
 * @param {string} id
 * @return {{id: string, userId: string, body: string, title: string}}
 * postData()
 * @param {{userId: string, body: string, title: string}} body
 * @return {{id: string, userId: string, body: string, title: string}}
 * putData()
 * @param {string} id
 * @param {{userId: string, body: string, title: string}} body
 * @return {{id: string}}
 * deleteData()
 * @param {string} id
 * @returns {}
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
 * login()
 * @param {{email: string, password: string | number}} body
 * @return {{
 * code: number,
 * message: string, 
 * data:{
 * Id: number,
 * Name: string,
 * Email: string,
 * Token: string
 * }}}
 * authorizedRequest()
 * @param {{email: string, password: string | number}} body
 * @returns {
 * id: number,
 * name: string,
 * email: string,
 * profilepicture: string,
 * location: string,
 * createdat: Date
 * }
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
 * @param {string} message
 * @returns {string}
 */

const socketUrl =
  "wss://demo.piesocket.com/v3/channel_123?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self";

async function webSockets(message) {
  if (typeof message !== "string") {
    throw Error("Invalid input");
  }

  const socket = new WebSocket(socketUrl);

  socket.on("open", () => {
    socket.send(message);
  });

  setTimeout(() => {
    socket.send("Closing");
    socket.close();
  }, 1000);

  return message;
}

/**
 * Exercise 4 - Advanced Methods
 * getMethods()
 * @param {string} path
 * @return {string[]} 
 * checkEndPoint()
 * @param {string} path
 * @return {number} 
 * modifyData()
 * @param {string} id
 * @param {{userId: string | body: string | title: string}} body
 * @return {{id: string, userId: string, body: string, title: string}}
 */

async function getMethods(path) {
  if (typeof path !== "string") {
    throw Error("Invalid input");
  }

  const result = fetch(`${apiForExercise1}${path}`, {
    method: "OPTIONS",
  })
    .then((response) => response.headers)
    .then((data) => data.get("access-control-allow-methods"));
  const stringResult = await result;
  return stringResult.split(",");
}

async function checkEndPoint(path) {
  if (typeof path !== "string") {
    throw Error("Invalid input");
  }

  const result = fetch(`${apiForExercise1}${path}`, {
    method: "HEAD",
  })
    .then((response) => response.status)
    .then((data) => data);
  return result;
}

async function modifyData(id, body) {
  if (typeof id !== "number") {
    throw Error("Invalid input");
  } else if (id <= 0 || id > 100) {
    throw Error("Invalid input");
  }

  if (typeof body !== "object") {
    throw Error("Invalid input");
  } else if (!Boolean(body.userId || body.title || body.body) || Object.keys(body).length !== 1) {
    throw Error("Invalid input");
  }

  const result = fetch(`${apiForExercise1}/posts/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((data) => data);
  return result;
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
  getMethods,
  checkEndPoint,
  modifyData
};
