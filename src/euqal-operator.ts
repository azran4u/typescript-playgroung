{
  const a: any = 10;
  const b: any = '10';
  const c: any = 11;

  console.log('a is a number: ' + a);
  console.log('b is a string: ' + b);
  console.log('c is a number: ' + c);
  // tslint:disable-next-line: triple-equals
  const equality: boolean = a == b;
  const strictEquality: boolean = a === b;
  const strictEquality2: boolean = a === c;
  console.log('a==b : ' + equality);
  console.log('a===b : ' + strictEquality);
  console.log('a===c : ' + strictEquality2);
}
