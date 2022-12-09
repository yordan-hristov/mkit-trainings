// Exercise 1

const { accessSync } = require("fs");

const carOwner = {
  name: "John",
  cars: [
    {
      model: "BMW",
      year: 1999,
    },
    {
      model: "Mercedes",
      year: 2022,
    },
    {
      model: "Audi",
      year: 2021,
    },
  ],

  selectNew: function (year) {
    if (typeof year !== "number") {
      throw new Error("Year should be a number");
    }

    const currentYear = Number(new Date().getFullYear());

    return this.cars
      .sort((a, b) => b.year - a.year)
      .filter(({ year: carYear }) => currentYear - carYear <= year)
      .map(({ model }) => model);
  },
};

// Exercise 2

function addTwo() {
  return this.a + this.b;
}

// Exercise 3

function getUsers() {
  const users = this.reduce(
    (acc, curr) => {
      if (curr.status === "online") {
        acc.online.push(curr.name);
      }

      if (curr.status === "offline") {
        acc.offline.push(curr.name);
      }

      return acc;
    },
    { online: [], offline: [] }
  );

  return users;
}

// Exercise 4

function Person(name, age) {
  if (typeof name !== "string") {
    throw new Error("Name should be a string");
  }

  if (typeof age !== "number") {
    throw new Error("Age should be a number");
  }

  this.name = name;
  this.age = age;

  this.getPerson = function () {
    return `${name} ${age}`;
  };
}

// Exercise 3

function getPrintName() {
  return () => {
    return this.name;
  };
}

module.exports = { carOwner, addTwo, getUsers, Person, getPrintName };
