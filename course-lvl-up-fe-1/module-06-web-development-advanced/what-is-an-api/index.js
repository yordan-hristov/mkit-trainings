const fetch = require("node-fetch");

const baseUrl = "https://jsonplaceholder.typicode.com";

/**
 * Exercise 1 - Fetch Currency With Soap
 *
 * @param {string} countryCode
 * @return {Promise<string>}
 */
function getCurrency(countryCode) {
  // Implement it
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
function socialMedia(id, comments) {
  // Implement it
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
function createPost() {
  // Implement it
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
function getPost(id) {
  // Implement it
}

/**
 *
 * @param {number} id
 * @returns {Promise<{
 * id: number;
 * title: string;
 * }>}
 */
function updatePost(id) {
  // Implement it
}

/**
 *
 * @param {number} id
 * @returns {Promise<{}>}
 */
function deletePost(id) {
  // Implement it
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
function getPostById(id) {
  // Implement it
}

/*********************************************
 * DO NOT MODIFY THIS AREA
 *
 * This area is used by the automated tests.
 ********************************************/
module.exports = {
  getCurrency,
  socialMedia,
  createPost,
  getPost,
  updatePost,
  deletePost,
  getPostById,
};
