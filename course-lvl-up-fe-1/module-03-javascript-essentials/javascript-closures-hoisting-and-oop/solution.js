// Exercise 1

function multiply(n, b) {
  if (b || b === 0) {
    return n * b;
  }

  return (b) => {
    return n * b;
  };
}

// Exercise 2

function guessingGame(maxGuesses, answer) {
  let guesses = 0;
  let win = false;

  return function guess(guessNumber) {
    guesses += 1;

    //win
    if (win) {
      return "This game is over!";
    }

    //no more guesses
    if (guesses > maxGuesses) {
      return "No more guesses left.";
    }

    //too low
    if (guessNumber < answer) {
      return `"${guessNumber}" is too low, go higher!`;
    }

    //too high
    if (guessNumber > answer) {
      return `"${guessNumber}" is too high, go lower!`;
    }

    // correct
    if (guessNumber === answer) {
      win = true;
      return `"${guessNumber}" is the correct number! You have ${
        maxGuesses - guesses
      } guesses left.`;
    }
  };
}

// Exercise 3
function Human() {
  this.head = 1;
  this.arms = 2;
  this.legs = 2;

  this.punch = function () {
    return "I am punching";
  };

  this.walk = function () {
    return "I am walking";
  };
}

function Person(name, age) {
  if (typeof name !== "string") {
    throw new Error("Name should be string");
  }

  if (typeof age !== "number") {
    throw new Error("Age should be number");
  }

  Human.call(this);

  this.name = name;
  this.age = age;

  this.startFighting = function () {
    return `${this.walk()} and ${this.punch()}`;
  };
}

// Exercise 4 - Car
function drive() {
  return "I am driving!";
}

function stop() {
  return "I am stopping!";
}

function Car(tank, fuel) {
  this.tank = tank;
  this.fuel = fuel;
}

Car.prototype.drive = drive;
Car.prototype.stop = stop;

module.exports = {
  multiply,
  guessingGame,
  Person,
  Human,
  Car,
};
