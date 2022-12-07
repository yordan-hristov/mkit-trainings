// Assessment 1

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

// Assessment 2

function addTwo() {
  return this.a + this.b;
}

// Assessment 2

function Person() {}

module.exports = { carOwner, addTwo, Person };
