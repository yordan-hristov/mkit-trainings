// Assessment 1

const map = (array) => {
  return array.map((x) => x * 2);
  // Implement me!
};

const filter = (array) => {
  return array.filter((x) => x % 2 === 0);
  // Implement me!
};

const reduce = (array) => {
  return array.reduce((a, b) => a + b);
  // Implement me!
};

// Assessment 2

const sort = (array) => {
  return [...array].sort(
    (a, b) => a.name.localeCompare(b.name) || a.age - b.age
  );
};

// Assessment 3

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

// Assessment 4

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

// Assessment 5

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

// Assessment 6

function add(n) {
  return (b) => {
    if (!b) {
      return n;
    }

    return add(n + b);
  };
}
