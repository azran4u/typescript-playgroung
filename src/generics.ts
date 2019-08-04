function echo<T>(a: T): T {
  return a;
}

const num: number = echo(1);
// const str: string = echo(1);

class Person {
  constructor(private firstName: string, private lastName: string) {}
}

class Admin extends Person {}

class Manager extends Person {}

const admin = new Admin('a', 'b');
const manager = new Manager('a', 'b');

function echoPerson(person: Person): Person {
  return person;
}

const c = echoPerson(admin);

function echoPersonImproved<T extends Person>(person: T): T {
  return person;
}

const d = echoPerson(admin);
