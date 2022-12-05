// Assessment 1

export class Greeter {
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

// Assessment 2

export class Shape {}

// Assessment 3

export class Cat {
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

// Assessment 4

interface IStudent {
  grade: number;
  displayGrade: () => string; // Grade: {grade}
}

interface ITeacher {
  subject: string;
  displaySubject: () => string; // Subject: {subject}
}

export abstract class Person {
  protected firstName: string;
  protected lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  abstract greet(): string;
}

export class Student extends Person implements IStudent {
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

export class Teacher extends Person implements ITeacher {
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
