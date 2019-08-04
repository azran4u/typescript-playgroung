class Animal {
  protected id: number;
  protected sym: symbol = Symbol('1');
  public move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}

// tslint:disable-next-line: max-classes-per-file
class Dog extends Animal {
  private name: string;
  constructor(id: number) {
    super();
    this.id = id;
    this.name = 'rexi';
  }

  public bark() {
    console.log(`${this.id} : Woof! Woof!`);
  }
}

export function objectsTest() {
  const animal = new Animal();
  const dog = new Dog(1);

  console.log('Animal Object Keys: ');
  for (const i of Object.keys(animal)) {
    console.log(i);
  }

  console.log('Dog Object Keys: ');
  for (const i of Object.keys(dog)) {
    console.log(i);
  }

  console.log('Dog Object Keys const i in dog: ');
  // tslint:disable-next-line:forin
  for (const i in dog) {
    console.log(i);
  }

  // GET Object Keys
  console.log('Get Object keys: ');
  const object = {
    id: 3,
    name: 'object',
    type: 'dog',
  };

  for (const i of Object.keys(object)) {
    console.log(i);
  }

  //   const array = [new Dog(1), new Dog(2), new Dog(3)];

  //   console.log('let i in array: ');
  //   // tslint:disable-next-line:forin
  //   for (const i in array) {
  //     array[i].bark();
  //   }

  //   console.log('const i of Object.keys(array): ');
  //   for (const i of Object.keys(array)) {
  //     array[+i].bark();
  //   }
}
