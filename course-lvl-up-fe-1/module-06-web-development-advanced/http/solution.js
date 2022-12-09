const apiUrl = "https://jsonplaceholder.typicode.com";

async function getData(id) {
  if (typeof id !== "number") {
    throw Error("Invalid input");
  } else if (id <= 0 || id > 100) {
    throw Error("Invalid input");
  }

  const result = fetch(`${apiUrl}/posts/${id}`)
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
  const result = fetch(`${apiUrl}/posts`, {
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

  const result = fetch(`${apiUrl}/posts/${id}`, {
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

  const result = fetch(`${apiUrl}/posts/${id}`, {
    method: "DELETE",
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

module.exports = { getData, postData, putData, deleteData };
