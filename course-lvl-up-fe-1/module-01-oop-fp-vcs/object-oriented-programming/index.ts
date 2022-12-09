/**
 * Exercise 1 - Access Modifiers
 */

class Greeter {}

/**
 * Exercise 2 - Constructor
 */

class Shape {}

/**
 * Exercise 3 - Encapsulation And Abstraction
 */

class Cat {}

/**
 * Exercise 4 - Inheritance And Polymorphism
 */

interface IStudent {
  grade: number;
  displayGrade: () => string; // Grade: {grade}
}

interface ITeacher {
  subject: string;
  displaySubject: () => string; // Subject: {subject}
}

class Person {}

class Student {}

class Teacher {}

/**
 * Exercise 5 - Dependency Inversion Principle
 */

import { paypalApi, stripeApi } from "./_resources/_api";

interface PaymentProvider {
  pay(price: string): {
    success: boolean;
    total: number;
  };
}

class Store {}

class StripeProvider {}

class PayPalProvider {}

/*********************************************
 * DO NOT MODIFY THIS AREA
 *
 * This area is used by the automated tests.
 ********************************************/

export {
  Greeter,
  Shape,
  Cat,
  Person,
  Student,
  Teacher,
  Store,
  StripeProvider,
  PayPalProvider,
};
