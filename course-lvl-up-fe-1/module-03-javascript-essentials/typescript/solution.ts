// Exercise 2

interface Car {
  model: string;
  color: string;
}

type Cars = Car[];

interface Profession {
  name: string;
  sphere: string;
}

interface John {
  name: string;
  age: number;
  wife: string;
  cars: Cars;
  profession: Profession;
}

const john: John = {
  name: "John",
  age: 23,
  wife: "Daenerys",
  cars: [
    {
      model: "BMW",
      color: "black",
    },
    {
      model: "Mercedes",
      color: "white",
    },
  ],
  profession: {
    name: "Dragon slayer",
    sphere: "Hunter",
  },
};

// Exercise 3

function reverseArray<T extends []>(arr: T) {
  return arr.reverse();
}

export = {
  reverseArray,
};
