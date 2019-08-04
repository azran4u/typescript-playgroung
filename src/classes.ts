class Person {
    private readonly firstName: string;
    private readonly lastName: string = 'azran';
    constructor(firstName: string) {
      this.firstName = firstName;
  }
}

export function classes() {
  const eyal = new Person('eyal');
  console.log(eyal);
}
