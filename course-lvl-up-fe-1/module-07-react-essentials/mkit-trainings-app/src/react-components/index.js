import React from "react";

/**
 * Exercise #1 - Click on Menu Item
 *
 * @property {string[]} menuItems
 * @returns {React.ReactElement}
 */
export class Menu extends React.Component {
  render() {
    return <div>Menu</div>;
  }
}

/**
 * Exercise #2 - Search in TODO List
 *
 * @param {string[]} todoList
 * @returns {React.ReactElement}
 */
export function Search(todoList) {
  return <div>Search</div>;
}

/**
 * Exercise #3 - Add 2 Numbers
 *
 * @property {number} sum
 * @returns {React.ReactElement}
 */
class Result extends React.Component {
  render() {
    return <div>Result</div>;
  }
}

/**
 * @returns {React.ReactElement}
 */
export class AddTwo extends React.Component {
  render() {
    return <div>Add Two</div>;
  }
}

/**
 * Exercise #4 - User Card
 *
 * @returns {React.ReactElement}
 */

export function UserCard() {
  return <div>UserCard</div>;
}

/**
 * @returns {React.ReactElement}
 */
function Age() {
  return <div>Age</div>;
}

/**
 * @returns {React.ReactElement}
 */
function Description() {
  return <div>Description</div>;
}