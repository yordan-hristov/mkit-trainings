// Exercise 1

const map = (array) => {
  return array.map((x) => x * 2);
};

const filter = (array) => {
  return array.filter((x) => x % 2 === 0);
};

const reduce = (array) => {
  return array.reduce((a, b) => a + b);
};

// Exercise 2

const sort = (array) => {
  return [...array].sort(
    (a, b) => a.name.localeCompare(b.name) || a.age - b.age
  );
};

// Exercise 3

const calculator = {
  result: 0,
  add(n) {
    this.result += n;
    return this;
  },
  subtract(n) {
    this.result -= n;
    return this;
  },
  multiply(n) {
    this.result *= n;
    return this;
  },
  divide(n) {
    this.result /= n;
    return this;
  },
};

// Exercise 4

function recursive(n, result = []) {
  if (n % 2 === 0) {
    result.push(n);
  }

  if (n > 0) {
    return recursive(n - 1, result);
  } else {
    return result;
  }
}

// Exercise 5

function createFibonacciClosure() {
  let current = 0;
  let next = 1;

  return () => {
    const result = current + next;
    current = next;
    next = result;
    return current;
  };
}

// Exercise 6

function add(n) {
  return (b) => {
    if (!b) {
      return n;
    }

    return add(n + b);
  };
}
