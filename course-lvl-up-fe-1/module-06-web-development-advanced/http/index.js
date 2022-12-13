/**
 * Exercise 1 - Send GET Request
 */

const apiUrlForExercise1 = "https://jsonplaceholder.typicode.com";

/**
 *
 * @param {string} id
 * @return {{id: string, userId: string, body: string, title: string}}
 *
 */

function getData() {}

/**
 *
 * @param {{userId: string, body: string, title: string}} body
 * @return {{id: string, userId: string, body: string, title: string}}
 *
 */

function postData() {}

/**
 *
 * @param {string} id
 * @param {{userId: string, body: string, title: string}} body
 * @return {{id: string}}
 *
 */

function putData() {}

/**
 *
 * @param {string} id
 * @returns {}
 *
 */

function deleteData() {}

/**
 * Exercise 2 - Authentication
 * login()
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

const apiUrlForExercise2 = "http://restapi.adequateshop.com";

/**
 *
 * @param {{email: string, password: string}} body
 * @return {{
  * code: number,
  * message: string,
  * data:{
  *   Id: number,
  *   Name: string,
  *   Email: string,
  *   Token: string
  * }}}
 *
 */

function login() {}

/**
 *
 * @param {{email: string, password: string}} body
 * @returns {
  * id: number,
  * name: string,
  * email: string,
  * profilepicture: string,
  * location: string,
  * createdat: Date
  * }
 *
 */

function authorizedRequest() {}

/**
 * Exercise 3 - Web Sockets
 * @param {string} message
 * @returns {string}
 */

const apiUrlForExercise3 =
  "wss://demo.piesocket.com/v3/channel_123?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self";

function webSockets() {}

/**
 * Exercise 4 - Advanced Methods
 */

/**
 *
 * @param {string} path
 * @return {string[]}
 *
 */

function getMethods() {}

/**
 *
 * @param {string} path
 * @return {number}
 *
 */

function checkEndPoint() {}

/**
 *
 * @param {string} id
 * @param {{userId: string | body: string | title: string}} body
 * @return {{id: string, userId: string, body: string, title: string}}
 *
 */

function modifyData() {}

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
  modifyData,
};
