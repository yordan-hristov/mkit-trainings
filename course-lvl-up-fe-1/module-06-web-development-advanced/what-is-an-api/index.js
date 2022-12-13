const fetch = require("node-fetch");

const baseUrl = "https://jsonplaceholder.typicode.com";

/**
 * Exercise 1 - Fetch Currency With Soap
 *
 * @param {string} countryCode
 */
function getCurrency(countryCode) {
  // Implement it
}

/**
 * Exercise 2 - Social Media
 *
 * @param {number=} id
 * @param {boolean=} comments
 */
function socialMedia(id, comments) {
  // Implement it
}

/**
 * Exercise 3 - CRUD Operations
 */

function createPost() {
  // Implement it
}

/**
 *
 * @param {number} id
 */
function getPost(id) {
  // Implement it
}

/**
 *
 * @param {number} id
 */
function updatePost(id) {
  // Implement it
}

/**
 *
 * @param {number} id
 */
function deletePost(id) {
  // Implement it
}

/**
 * Exercise 4 - Status Codes
 *
 * @param {number} id
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
