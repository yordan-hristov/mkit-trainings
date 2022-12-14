import { paypalApi, stripeApi } from "./_resources/_api";

// Exercise 1

class Greeter {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  protected getName() {
    return this.name;
  }

  greet() {
    return `Hello, ${this.name}`;
  }
}

// Exercise 2

class Shape {}

// Exercise 3

class Cat {
  private mood: number;
  private hungry: number;
  private energy: number;

  constructor(mood: number, hungry: number, energy: number) {
    this.mood = mood;
    this.hungry = hungry;
    this.energy = energy;
  }

  private makeSound() {
    return `Meow`;
  }

  sleep() {
    this.energy++;
    this.hungry++;
  }

  play() {
    this.mood++;
    this.energy--;
    this.makeSound();
  }

  feed() {
    this.hungry--;
    this.mood++;
    this.makeSound();
  }
}

// Exercise 4

interface IStudent {
  grade: number;
  displayGrade: () => string; // Grade: {grade}
}

interface ITeacher {
  subject: string;
  displaySubject: () => string; // Subject: {subject}
}

abstract class Person {
  protected firstName: string;
  protected lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  abstract greet(): string;
}

class Student extends Person implements IStudent {
  grade: number;

  constructor(firstName: string, lastName: string, grade: number) {
    super(firstName, lastName);
    this.grade = grade;
  }

  greet() {
    return `Hello, I'm ${this.firstName} ${this.lastName}`;
  }

  displayGrade() {
    return `Grade: ${this.grade}`;
  }
}

class Teacher extends Person implements ITeacher {
  subject: string;

  constructor(firstName: string, lastName: string, subject: string) {
    super(firstName, lastName);
    this.subject = subject;
  }

  greet() {
    return `Hello, I'm Mrs. ${this.lastName}`;
  }

  displaySubject() {
    return `Subject: ${this.subject}`;
  }
}

// Exercise 5

interface PaymentProvider {
  pay(price: string): {
    success: boolean;
    total: number;
  };
}

class Store {
  private provider: PaymentProvider;

  constructor(provider: PaymentProvider) {
    this.provider = provider;
  }

  buySomething(price: string) {
    return this.provider.pay(price);
  }
}

class StripeProvider implements PaymentProvider {
  pay(price: string) {
    const { isSuccess } = stripeApi.createPayment(price);
    const priceToNumber = Number(price);
    const total = priceToNumber + priceToNumber * stripeApi.tax;

    return {
      success: isSuccess,
      total,
    };
  }
}

class PayPalProvider implements PaymentProvider {
  pay(price: string) {
    const priceToNumber = Number(price);
    const { hasFailed } = paypalApi.makePayment(priceToNumber);

    return {
      success: !hasFailed,
      total: priceToNumber,
    };
  }
}
