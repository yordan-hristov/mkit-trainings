// Exercise 1

export class Greeter {}

// Exercise 2

export class Shape {}

// Exercise 3

export class Cat {}

// Exercise 4

interface IStudent {
  grade: number;
  displayGrade: () => string; // Grade: {grade}
}

interface ITeacher {
  subject: string;
  displaySubject: () => string; // Subject: {subject}
}

export class Person {}

export class Student {}

export class Teacher {}

// Exercise 5
import { paypalApi, stripeApi } from "./_api";

interface PaymentProvider {
  pay(price: string): {
    success: boolean;
    total: number;
  };
}

export class Store {}

export class StripeProvider {}

export class PayPalProvider {}
